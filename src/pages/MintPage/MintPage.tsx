import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

import NFT from '../../components/NFT/NFT';
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
      const addFundTx = await contract.addFund('test signature', 1, {
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
      return account.toString().charAt(0) +
        account.toString().charAt(1) +
        "..." +
        account.toString().charAt(account.toString().length - 2) +
        account.toString().charAt(account.toString().length - 1);
    } else return 'Connect wallet';
  };

  return (
    <div className="landing__background-photo">
      {isModalActive &&
        <ConnectWallet
          setUser={setUser}
          setIsActive={setIsModalActive}
          setGnosisError={setGnosisError}
          isGnosisError={isGnosisError}
        />}
      <div className="landing__dark-bg">
        <nav className="landing__nav">
          <p>Buggy DAO 12.9 DAO</p>
          <button className="landing__nav-center-button">
            Multipy your donation by x3
          </button>
          <button
            className="landing__nav-connect-wallet"
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
        <div className="landing__balances-bg">
          <div className="landing__balances-container">
            <div
              style={{ borderRadius: '25px 0px 0px 0px' }}
              className="landing__balances-currency-amount"
            >
              <div className="landing__balances-text-wrapper">
                <p>Ethereum</p>
                <p>0.09 ETH</p>
              </div>
            </div>
            <div
              style={{ background: 'none' }}
              className="landing__balances-currency-amount"
            >
              <div className="landing__balances-text-wrapper">
                <p>USD Coin</p>
                <p>3.18 USDC</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="green-line" />
        <div className="landing__nfts-container">
          <NFT />
        </div>
        <div className="input-wrapper">
          <input
            placeholder="Amount to donate..."
            type="number"
            min="0"
            max="2000"
            value={amountToDonate}
            onChange={(event) => setAmountToDonate(event.target.value)}
          ></input>
          {isError && <span>Amount in input is not correct</span>}
          <button onClick={() => addFund()}>Donate</button>
        </div>
        <p>
          Price of 1 buggy: {ethers.utils.formatUnits(buggyPrice.toString())}
        </p>
      </div>
      <p>Price of 1 buggy: {ethers.utils.formatUnits(buggyPrice.toString())}</p>
    </div>
  );
}

export default MintPage;
