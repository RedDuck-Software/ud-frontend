import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

// import NFT from '../../components/NFT/NFT';
import { CRYPTO_BUGGY_ADDRESS } from '../../helper/constants';
import { useGetBuggyNFTs } from '../../hooks/useGetBuggyNFTs';
import { CryptoBuggy__factory } from '../../typechain';
import './mintPage.scss';

function MintPage() {
  const [amountToDonate, setAmountToDonate] = useState('0');
  const [buggyPrice, setBuggyPrice] = useState<BigNumber>(BigNumber.from(0));
  const [isError, setIsError] = useState(false);
  const { account, connector } = useWeb3React();
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
        value: buggyPrice,
      });
      await addFunxTx.wait();
      console.log('Funds sended');
    } catch (e) {
      console.log(e);
    }

    setIsError(false);
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

  return (
    <div className="mint-page__background-photo">
      <div className="mint-page__dark-bg">
        <nav className="mint-page__nav">
          <p>Buggy DAO 12.9 DAO</p>
          <button className="mint-page__nav-center-button">
            Multipy your donation by x3
          </button>
          <button className="mint-page__nav-connect-wallet">
            Connect wallet
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
            <div
              style={{ background: 'none' }}
              className="mint-page__balances-currency-amount"
            >
              <div className="mint-page__balances-text-wrapper">
                <p>USD Coin</p>
                <p>3.18 USDC</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="green-line" />
        <div className="mint-page__content">
          <input
            placeholder="Amount to donate..."
            type="number"
            min="0"
            max="2000"
            value={amountToDonate}
            onChange={(event) => setAmountToDonate(event.target.value)}
          ></input>
          {isError && <span>Amount in input is not correct</span>}
        </div>
        <div className="input-wrapper">
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
