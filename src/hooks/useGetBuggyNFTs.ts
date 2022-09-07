import { useWeb3React } from '@web3-react/core';
import { useMoralisWeb3Api } from 'react-moralis';

export const useGetBuggyNFTs = () => {
  const Web3Api = useMoralisWeb3Api();
  const { account } = useWeb3React();

  const fetchNFTsForContract = async (contractAddress: string) => {
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

  return { fetchNFTsForContract };
};
