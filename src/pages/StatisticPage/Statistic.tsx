import { useWeb3React } from '@web3-react/core';
import {ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner'

import { useGetBuggyNFTs } from '../../hooks/useGetBuggyNFTs';
import { CryptoBuggy__factory } from '../../typechain';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import './Statistic.scss';

function StatisticPage() {
  const [isModalActive, setIsModalActive] = useState(false);

  const [user, setUser] = useState<string>();
  const [isGnosisError, setGnosisError] = useState(false);

  const [totalBoughtBuggy,setTotalBoughtBugg] = useState<number>()
  const [totalUsers,setTotalUsers] = useState<number>()
  const [totalCreatedBuggy,setTotalCreatedBuggy] = useState<number>()
  // const [totalFundsInvested,setTotalFundsInvested] = useState<number>()


  // const [isError, setIsError] = useState(false);

  const { account, connector, deactivate } = useWeb3React();
  const { fetchNFTsForContract } = useGetBuggyNFTs();

  const getContract = async () => {
    if (!connector) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner();
    const cryptoBuggyContract = CryptoBuggy__factory.connect(
      '0x607fB2bEc6464Ab3f730eA6fd00807185197D334',
      signer,
    );

    return cryptoBuggyContract;
  };
  
  const getTotalUsers = async () => {
  
    const cryptoBuggyContract = await getContract()
    
    if(!cryptoBuggyContract) return
    console.log('uniqUsers',await cryptoBuggyContract.buggyNFT())

    const uniqUsers = await cryptoBuggyContract.uniqUsers()
    setTotalUsers(uniqUsers.toNumber())
    
    console.log('boughtBuggy',uniqUsers.toNumber());
  };

  const getBoughtBuggy = async () => {
    const cryptoBuggyContract = await getContract()
    
    if(!cryptoBuggyContract) return

    const boughtBuggy = await cryptoBuggyContract.boughtBuggy()
    setTotalBoughtBugg(boughtBuggy.toNumber())
    console.log('boughtBuggy',boughtBuggy.toNumber());
  };

  const getTotalCreatedBuggy = async () => {
    const cryptoBuggyContract = await getContract()
    
    if(!cryptoBuggyContract) return

    const totalCreatedBuggy = await cryptoBuggyContract.boughtBuggy()
    setTotalCreatedBuggy(totalCreatedBuggy.toNumber())
    console.log('totalCreatedBuggy',totalCreatedBuggy.toNumber());
  };

  // const getTotalDonatedFunds = async () => {
  //     if(totalBoughtBuggy == undefined || totalBoughtBuggy == null) return;

  //     const res = totalBoughtBuggy * 1500
  //     setTotalFundsInvested(res);
  //     console.log('res',res);
  //   };

  useEffect(() => {
    getTotalUsers()
    getBoughtBuggy()
    getTotalCreatedBuggy()
    // getTotalDonatedFunds()

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

  async function handleLogout() {
    deactivate();
    setUser('');
    setGnosisError(false);
  }
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
        <div className='statistic-header'>
        <Audio
              height="80"
              width="80"
              color="#2df30d"
              ariaLabel="loading"
            />
          <h1 className='statistic-title'>Buggy DAO Statistic</h1>
          <Audio
              height="80"
              width="80"
              color="#2df30d"
              ariaLabel="loading"
            />
        </div>
        
        <div className='statistic'>
            <div>
              <h2>Total users</h2>
              <div className='statistic-cirle'>{totalUsers?totalUsers: '...'}</div>
            </div>
            <div >
              <h2>Total bought buggy</h2>
              <div className='statistic-cirle'>{totalBoughtBuggy?totalBoughtBuggy:'...'}</div>
            </div>
            <div >
              <h2>Total created buggy</h2>
              <div className='statistic-cirle'>{totalCreatedBuggy?totalCreatedBuggy:'...'}</div>
            </div>
            <div>
             <h2>Total donated funds(MATIC)</h2>
             <div className='statistic-cirle'>{totalBoughtBuggy?totalBoughtBuggy * 1500:'...'} </div>

            </div>
        </div>
       

        </div>
    </div>
  );
}

export default StatisticPage;
