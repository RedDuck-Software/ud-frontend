import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

import NFT from '../../components/NFT/NFT';
import { CRYPTO_BUGGY_ADDRESS } from '../../helper/constants';
import { CryptoBuggy__factory } from '../../typechain';
import './mintPage.scss';
declare let window: any;

function MintPage() {
  const [amountToDonate, setAmountToDonate] = useState('0');
  const [buggyPrice, setBuggyPrice] = useState<BigNumber>(BigNumber.from(0));
  const [isError, setIsError] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const cryptoBuggyContract = CryptoBuggy__factory.connect(CRYPTO_BUGGY_ADDRESS, signer);

  const addFund = async () => {
    if (+amountToDonate <= 0 || +amountToDonate >= 2000) {
      setIsError(true);
      return;
    }
    try {
      const addFunxTx = await cryptoBuggyContract.addFund('test signature', { value: buggyPrice });
      await addFunxTx.wait();
      console.log('Funds sended');
    } catch (e) {
      console.log(e);
    }

    setIsError(false);
  };

  useEffect(() => {
    const getBuggyPrice = async () => {
      const result = await cryptoBuggyContract.price();
      return result;
    };
    getBuggyPrice()
      .then(res => {
        console.log('Price of 1 buggy: ', ethers.utils.formatUnits(res.toString()));
        setBuggyPrice(res);
      });
  }, []);

  return (
    <div className="landing__background-photo">
      <div className="landing__dark-bg">
        <nav className='landing__nav'>
          <p>Buggy DAO 12.9 DAO</p>
          <button className="landing__nav-center-button">
            Multipy your donation by x3
          </button>
          <button className='landing__nav-connect-wallet'>Connect wallet</button>
        </nav>
        <hr className="green-line" />
        <div className='landing__balances-bg'>
          <div className='landing__balances-container'>
            <div
              style={{ borderRadius: '25px 0px 0px 0px' }}
              className='landing__balances-currency-amount'>
              <div className='landing__balances-text-wrapper'>
                <p>Ethereum</p>
                <p>0.09 ETH</p>
              </div>
            </div>
            <div
              style={{ background: 'none' }}
              className='landing__balances-currency-amount'>
              <div className='landing__balances-text-wrapper'>
                <p>USD Coin</p>
                <p>3.18 USDC</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="green-line" />
        <div className='landing__nfts-container'>
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
        <p>Price of 1 buggy: {ethers.utils.formatUnits(buggyPrice.toString())}</p>
      </div>
    </div>
  );
}

export default MintPage;
