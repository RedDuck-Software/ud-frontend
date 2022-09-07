import { EvmChain } from '@moralisweb3/evm-utils';
import { useWeb3React } from '@web3-react/core';
import { useMoralisWeb3Api } from 'react-moralis';

export const useGetBuggyNFTs = () => {
  const Web3Api = useMoralisWeb3Api();
  const { account } = useWeb3React();

  const fetchNFTsForContract = async (contractAddress: string) => {
    console.log(contractAddress);
    const options = {
      chain: EvmChain.RINKEBY,
      address: account,
      token_address: contractAddress,
    };
    console.log(options);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rinkebyNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log(rinkebyNFTs);
  };

  return { fetchNFTsForContract };
};
