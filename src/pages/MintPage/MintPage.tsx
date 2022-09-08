/* eslint-disable */
import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

// import NFT from '../../components/NFT/NFT';
import Dropdown from '../../components/Dropdown/Dropdown';
import { CRYPTO_BUGGY_ADDRESS } from '../../helper/constants';
import { useGetBuggyNFTs } from '../../hooks/useGetBuggyNFTs';
import { CryptoBuggy__factory } from '../../typechain';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import './mintPage.scss';

function MintPage() {
  const [isModalActive, setIsModalActive] = useState(false);

  const [user, setUser] = useState<string>();
  const [isGnosisError, setGnosisError] = useState(false);
  const [amountToDonate, setAmountToDonate] = useState('0');
  const [buggyPrice, setBuggyPrice] = useState<BigNumber>(BigNumber.from(0));
  const [selectedOption, setSelectedOption] = useState<string>('Full');
  const [isError, setIsError] = useState(false);
  const { account, connector, deactivate } = useWeb3React();
  const { fetchNFTsForContract } = useGetBuggyNFTs();

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

    return cryptoBuggyContract;
  };

  const addFund = async () => {
    if (+amountToDonate <= 0 || +amountToDonate >= 2000) {
      setIsError(true);
      return;
    }
    try {
      const contract = await getContract();
      if (!contract) return;
      const addFunxTx = await contract.addFund('test signature', {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value: buggyPrice,
      });
      await addFundTx.wait();
      console.log('Funds sended');
    } catch (e) {
      console.log(e);
    }

    setIsError(false);
  };

  async function handleLogout() {
    deactivate();
    setUser('');
    setGnosisError(false);
  };

  useEffect(() => {
    const getBuggyPrice = async () => {
      const contract = await getContract();
      if (!contract) return;
      const result = await contract.price();
      return result;
    };
    getBuggyPrice().then((res) => {
      console.log(
        'Price of 1 buggy: ',
        res && ethers.utils.formatUnits(res.toString()),
      );
      res && setBuggyPrice(res);
    });
  }, [account]);

  useEffect(() => {
    if (!account) return;

    fetchNFTsForContract('0x151893e0913BE2D12ADcfbF104bF6559027eDBF0');
  }, [account]);

  const buttonText = () => {
    if (user) return user;
    if (account) {
      const accountFormatted = account?.split("");
      accountFormatted?.splice(5, 33, "...");
      return accountFormatted?.slice(0,12);
    } else return 'Connect wallet';
  };

  return (
    <div className="mint-page__background-photo">
      {isModalActive &&
        <ConnectWallet
          setUser={setUser}
          setIsActive={setIsModalActive}
          setGnosisError={setGnosisError}
          isGnosisError={isGnosisError}
        />}
      <div className="mint-page__dark-bg">
        <nav className="mint-page__nav">
          <p>Buggy DAO 12.9 DAO</p>
          <button className="mint-page__nav-center-button">
            Multipy your donation by x3
          </button>
          <button
            className="mint-page__nav-connect-wallet"
            style={user || account ? {
              background: '#232622',
              color: 'white',
            } : {}}
            onClick={() => account || user
              ? handleLogout() : setIsModalActive(true)}>
            {buttonText()}
          </button>
        </nav>
        <hr className="green-line" />
        <div className="mint-page__nfts">
          <div className="container">
            <div className="mint-page__nfts-grid">{/* <NFT /> */}</div>
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
                <p>Ethereum</p>
                <p>0.09 ETH</p>
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
                max="2000"
                value={amountToDonate}
                onChange={(event) => setAmountToDonate(event.target.value)}
              />
              <span className="buggy-amount">1B = 2000$</span>
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
            ></textarea>
          </div>
        </div>
        <button className="mint-page__donate-btn" onClick={() => addFund()}>
          Donate
        </button>
        {/* <p>
          Price of 1 buggy: {ethers.utils.formatUnits(buggyPrice.toString())}
        </p> */}
      </div>
    </div>
  );
}

export default MintPage;
