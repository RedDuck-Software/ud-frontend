import React, { useState } from 'react';
import './mintPage.scss';

function MintPage() {
  const [amountToDonate, setAmountToDonate] = useState('0');
  const [isError, setIsError] = useState(false);

  const donate = async () => {
    if (+amountToDonate <= 0 || +amountToDonate >= 2000) {
      setIsError(true);
      return;
    }

    console.log(amountToDonate);

    setIsError(false);
  };

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
        <button onClick={() => donate()}>Donate</button>
      </div>
    </div>
  );
}

export default MintPage;
