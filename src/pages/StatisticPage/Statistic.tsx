import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Audio } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import { useGetBuggyNFTs } from '../../hooks/useGetBuggyNFTs';
import { BuggyToken__factory, CryptoBuggy__factory } from '../../typechain';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import './Statistic.scss';

function StatisticPage() {
  const [isModalActive, setIsModalActive] = useState(false);

  const [user, setUser] = useState<string>();
  const [isGnosisError, setGnosisError] = useState(false);

  const [totalBoughtBuggy, setTotalBoughtBugg] = useState<number>();
  const [totalUsers, setTotalUsers] = useState<number>();
  const [totalCreatedBuggy, setTotalCreatedBuggy] = useState<number>();
  const [nftAddr, setNftAddr] = useState('');
  const [buggyBalance, setBuggyBalance] = useState(0);

  const navigate = useNavigate();

  const { account, deactivate } = useWeb3React();
  const { fetchNFTsForContract } = useGetBuggyNFTs();

  const getContractAndBuggyBalance = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://${process.env.REACT_APP_NETWORK_NAME}.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API}`,
    );
    const cryptoBuggyContract = CryptoBuggy__factory.connect(
      // eslint-disable-next-line
      process.env.REACT_APP_CRYPTO_BUGGY_ADDRESS!,
      provider,
    );
    const nftAddr = await cryptoBuggyContract.buggyNFT();
    console.log('NFT addr: ', nftAddr);
    setNftAddr(nftAddr);

    if (account) {
      const buggyTokenAddr = await cryptoBuggyContract.buggyToken();
      const buggyTokenContract = BuggyToken__factory.connect(
        buggyTokenAddr,
        provider,
      );
      const buggyBalance = await buggyTokenContract.balanceOf(account);
      console.log('Buggy balance: ', Number(buggyBalance) / Math.pow(10, 18));
      setBuggyBalance(Number(buggyBalance) / Math.pow(10, 18));
    }

    return cryptoBuggyContract;
  };

  const getTotalUsers = async () => {
    const cryptoBuggyContract = await getContractAndBuggyBalance();

    if (!cryptoBuggyContract) return;
    console.log('uniqUsers', await cryptoBuggyContract.buggyNFT());

    const uniqUsers = await cryptoBuggyContract.uniqUsers();
    setTotalUsers(uniqUsers.toNumber());

    console.log('boughtBuggy', uniqUsers.toNumber());
  };

  const getBoughtBuggy = async () => {
    const cryptoBuggyContract = await getContractAndBuggyBalance();

    if (!cryptoBuggyContract) return;

    const boughtBuggy = await cryptoBuggyContract.boughtBuggy();
    setTotalBoughtBugg(boughtBuggy.toNumber());
    console.log('boughtBuggy', boughtBuggy.toNumber());
  };

  const getTotalCreatedBuggy = async () => {
    const cryptoBuggyContract = await getContractAndBuggyBalance();

    if (!cryptoBuggyContract) return;

    const totalCreatedBuggy = await cryptoBuggyContract.boughtBuggy();
    setTotalCreatedBuggy(totalCreatedBuggy.toNumber());
    console.log('totalCreatedBuggy', totalCreatedBuggy.toNumber());
  };

  useEffect(() => {
    getTotalUsers();
    getBoughtBuggy();
    getTotalCreatedBuggy();

    if (!account) return;

    fetchNFTsForContract(nftAddr);
  }, [account]);

  const buttonText = () => {
    if (user) return user;
    if (account) {
      const accountFormatted = account?.split('');
      accountFormatted?.splice(5, 33, '...');
      return accountFormatted?.slice(0, 12);
    } else return 'Connect wallet';
  };

  async function handleLogout() {
    deactivate();
    setUser('');
    setGnosisError(false);
  }
  return (
    <div className="statistic__wrapper">
      <div className="statistic__background-photo">
        {isModalActive && (
          <ConnectWallet
            setUser={setUser}
            setIsActive={setIsModalActive}
            setGnosisError={setGnosisError}
            isGnosisError={isGnosisError}
          />
        )}
        <div className="statistic__dark-bg">
          <nav className="statistic__nav">
            <p>Buggy DAO {buggyBalance ? buggyBalance : 0} DAO</p>
            <button className="statistic__nav-center-button">
              Multiply your donation by x3
            </button>
            <button
              className="statistic__nav-connect-wallet"
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
          <div
            onClick={() => navigate('/mint-page')}
            className="statistic__go-back"
          >
            <BsFillArrowLeftSquareFill style={{ fontSize: '28px' }} />
            <p>Back to Mint Page</p>
          </div>
          <div className="statistic-header">
            <Audio height="80" width="80" color="#2df30d" ariaLabel="loading" />
            <h1 className="statistic-title">Buggy DAO Statistic</h1>
            <Audio height="80" width="80" color="#2df30d" ariaLabel="loading" />
          </div>

          <div className="statistic-content">
            <div className="statistic-block">
              <h2>Total users</h2>
              <div className="statistic-cirle">
                {totalUsers
                  ? totalUsers
                  : totalUsers === 0
                  ? totalUsers
                  : '...'}
              </div>
            </div>
            <div className="statistic-block">
              <h2>Total bought buggy</h2>
              <div className="statistic-cirle">
                {totalBoughtBuggy
                  ? totalBoughtBuggy
                  : totalBoughtBuggy === 0
                  ? totalBoughtBuggy
                  : '...'}
              </div>
            </div>
            <div className="statistic-block">
              <h2>Total created buggy</h2>
              <div className="statistic-cirle">
                {totalCreatedBuggy
                  ? totalCreatedBuggy
                  : totalCreatedBuggy === 0
                  ? totalCreatedBuggy
                  : '...'}
              </div>
            </div>
            <div className="statistic-block">
              <h2>Total donated funds(MATIC)</h2>
              <div className="statistic-cirle">
                {totalBoughtBuggy
                  ? totalBoughtBuggy * 1500
                  : totalBoughtBuggy === 0
                  ? totalBoughtBuggy
                  : '...'}{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticPage;
