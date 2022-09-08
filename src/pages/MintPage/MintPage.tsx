/* eslint-disable */
import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

import NFT from '../../components/NFT/NFT';
import Dropdown from '../../components/Dropdown/Dropdown';
import { CRYPTO_BUGGY_ADDRESS, NFT_ADDRESS } from '../../helper/constants';
import { useGetBuggyNFTs } from '../../hooks/useGetBuggyNFTs';
import { BuggyToken__factory, CryptoBuggy__factory } from '../../typechain';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import './mintPage.scss';
import { useNavigate } from 'react-router-dom';
import { BuggyNFT__factory } from '../../typechain/factories/BuggyNFT__factory';

interface INftObjs {
  id: string;
  image: string;
}

function MintPage() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [signature, setSignature] = useState('');
  const [buggyBalance, setBuggyBalance] = useState(0);
  const [nativeTokenBalance, setNativeTokenBalance] = useState(0);
  const [user, setUser] = useState<string>();
  const [isGnosisError, setGnosisError] = useState(false);
  const [amountToDonate, setAmountToDonate] = useState('0');
  const [buggyPrice, setBuggyPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>('Full');
  const [isError, setIsError] = useState(false);
  const [isTxDone, setIsTxDone] = useState(false);
  const { account, connector, deactivate } = useWeb3React();
  const { fetchNFTsForContract } = useGetBuggyNFTs();
  const [nftsImages, setNFTsImages] = useState<INftObjs[]>();

  const navigate = useNavigate();

  const getContract = async () => {
    if (!connector) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner();
    const cryptoBuggyContract = CryptoBuggy__factory.connect(
      CRYPTO_BUGGY_ADDRESS,
      signer,
    );
    const nativeTokenBalance = await signer.getBalance();
    setNativeTokenBalance(Number(nativeTokenBalance) / Math.pow(10, 18));
    const buggyTokenAddr = await cryptoBuggyContract.buggyToken();
    const buggyTokenContract = BuggyToken__factory.connect(
      buggyTokenAddr,
      signer,
    );
    const buggyNFTContract = BuggyNFT__factory.connect(NFT_ADDRESS, signer);

    return { cryptoBuggyContract, buggyTokenContract, buggyNFTContract };
  };

  const addFund = async () => {
    if (+amountToDonate <= 0) {
      setIsError(true);
      return;
    }
    try {
      const contracts = await getContract();
      if (!contracts) return;
      const { cryptoBuggyContract } = contracts;
      const numberOfBuggys = Number(amountToDonate) / Number(buggyPrice);
      console.log('Number of buggys to buy: ', numberOfBuggys);
      console.log('Signature: ', signature);
      console.log('Amount to spend: ', amountToDonate);
      const addFundTx = await cryptoBuggyContract.addFund(
        signature,
        BigNumber.from(numberOfBuggys),
        {
          value: ethers.utils.parseUnits(amountToDonate),
        },
      );
      await addFundTx.wait();
      setIsTxDone(true);
      console.log('Funds sended');
    } catch (e) {
      console.log(e);
    }

    setIsError(false);
  };

  const addFundPartially = async () => {
    if (+amountToDonate <= 0) {
      setIsError(true);
      return;
    }
    try {
      const contracts = await getContract();
      if (!contracts) return;
      const { cryptoBuggyContract } = contracts;
      console.log('Amount to spend: ', amountToDonate);
      const addFundTx = await cryptoBuggyContract.addFundPartially(
        signature, {
        value: ethers.utils.parseUnits(amountToDonate)
      });
      await addFundTx.wait();
      console.log('Funds sended');
    } catch (e) {
      console.log(e);
    }
  };

  async function handleLogout() {
    deactivate();
    setUser('');
    setGnosisError(false);
  }

  useEffect(() => {
    const getData = async () => {
      const contracts = await getContract();
      if (!contracts) return;
      const { cryptoBuggyContract, buggyTokenContract, buggyNFTContract } =
        contracts;
      const price = await cryptoBuggyContract.price();
      console.log('Price of 1 buggy: ', Number(price) / Math.pow(10, 18));
      setBuggyPrice(Number(price) / Math.pow(10, 18));

      if (!account) return;
      const nftAddr = await cryptoBuggyContract.buggyNFT();
      const nftsData = await fetchNFTsForContract(nftAddr);
      console.log(nftsData);

      const buggyBalance = buggyTokenContract.balanceOf(account);
      console.log('Buggy balance: ', Number(buggyBalance) / Math.pow(10, 18));
      setBuggyBalance(Number(buggyBalance) / Math.pow(10, 18));

      if (nftsData && nftsData.length) {
        const nftsImages = await Promise.all(
          nftsData.map(async (item) => {
            const image = await buggyNFTContract.getImage(item.token_id);
            return { id: item.token_id, image };
          }),
        );

        setNFTsImages(nftsImages);
      }
      setIsTxDone(false);
    };

    getData();
  }, [account, isTxDone]);

  const buttonText = () => {
    if (user) return user;
    if (account) {
      const accountFormatted = account?.split('');
      accountFormatted?.splice(5, 33, '...');
      return accountFormatted?.slice(0, 12);
    } else return 'Connect wallet';
  };

  return (
    <div className="mint-page__background-photo">
      {isModalActive && (
        <ConnectWallet
          setUser={setUser}
          setIsActive={setIsModalActive}
          setGnosisError={setGnosisError}
          isGnosisError={isGnosisError}
        />
      )}
      <div className="mint-page__dark-bg">
        <nav className="mint-page__nav">
          <p>Buggy DAO {buggyBalance ? buggyBalance.toFixed(2) : 0} DAO</p>
          <button className="mint-page__nav-center-button">
            Multipy your donation by x3
          </button>
          <button
            className="mint-page__nav-connect-wallet"
            style={
              user || account
                ? {
                  background: '#232622',
                  color: 'white',
                }
                : {}
            }
            onClick={() =>
              account || user ? handleLogout() : setIsModalActive(true)
            }
          >
            {buttonText()}
          </button>
        </nav>
        <hr className="green-line" />
        <div className="mint-page__nfts">
          <div className="container">
            <div className="mint-page__nfts-grid">
              {nftsImages?.length &&
                nftsImages.map((nft) => <NFT image={nft.image} key={nft.id} />)}
            </div>
          </div>
        </div>
        <div className="mint-page__balances-bg">
          <span className="mint-page__balances-text">Balances</span>
          <div className="mint-page__balances-container">
            <div
              style={{ borderRadius: '25px 0px 0px 0px' }}
              className="mint-page__balances-currency-amount"
            >
              <div className="mint-page__balances-text-wrapper">
                <p>MATIC</p>
                <p>{nativeTokenBalance} MATIC</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="green-line" />
        <div className="mint-page__content">
          <div className="mint-page__input-wrapper">
            <div className="mint-page__select">
              <span className="input-text">Mode</span>
              <Dropdown setSelectedOption={setSelectedOption} />
            </div>
            <div className="mint-page__input">
              <span className="input-text">Amount</span>
              <input
                placeholder="Amount to donate..."
                type="number"
                min="0"
                step={
                  buggyPrice
                    ?
                    selectedOption === "Full" ? buggyPrice : buggyPrice / 2
                    :
                    1
                }
                value={amountToDonate}
                onChange={(event) => setAmountToDonate(event.target.value)}
              />
              <span className="buggy-amount">1B = {buggyPrice} MATIC</span>
              {isError && (
                <span className="amount-error">
                  Amount in input is not correct
                </span>
              )}
            </div>
          </div>
          <div className="mint-page__input-text">
            <span className="input-text">Your signature for buggy</span>
            <textarea
              className="text-area"
              id="w3review"
              name="w3review"
              rows={5}
              cols={50}
              maxLength={100}
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button
          className="mint-page__donate-btn"
          onClick={() => !account
            ? setIsModalActive(true) :
            selectedOption === "Full" ? addFund() : addFundPartially()}>
          Donate
        </button>

        <button
          className="mint-page__donate-btn"
          onClick={() =>
            !account ? setIsModalActive(true) : navigate('/statistic-page')
          }
        >
          Visit Statistic
        </button>
      </div>
    </div>
  );
}

export default MintPage;
