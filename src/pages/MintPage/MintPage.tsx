import React, { useState } from 'react';

function MintPage() {
    const [amountToDonate, setAmountToDonate] = useState('0');

    const donate = async () => {
        console.log(amountToDonate);
    };

    return (
        <div>
            <h1>Mint page</h1>
            <input
                placeholder='Amount to donate...'
                value={amountToDonate}
                onChange={event => setAmountToDonate(event.target.value)}
            ></input>
            <button onClick={() => donate()}>Donate</button>
        </div>
    );
}

export default MintPage;