import { useWeb3React } from '@web3-react/core';
import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';

import { CRYPTO_BUGGY_ADDRESS } from '../../helper/constants';
import { CryptoBuggy__factory } from '../../typechain';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import './mintPage.scss';

function MintPage() {
  const [amountToDonate, setAmountToDonate] = useState('0');
  const [buggyPrice, setBuggyPrice] = useState<BigNumber>(BigNumber.from(0));
  const [isError, setIsError] = useState(false);
  const { account, connector } = useWeb3React();
  const Web3Api = useMoralisWeb3Api();

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

  const fetchNFTsForContract = async (contractAddress: string) => {
    console.log(contractAddress);
    const options = {
      chain: 'rinkeby',
      address: account,
      token_address: contractAddress,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rinkebyNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log(rinkebyNFTs);
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
    <div>
      <ConnectWallet />
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
