import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Mint page</h1>
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
  );
}

export default MintPage;
