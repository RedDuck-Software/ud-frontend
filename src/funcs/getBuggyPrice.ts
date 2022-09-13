import { ethers } from 'ethers';

import { CRYPTO_BUGGY_ADDRESS } from '../helper/constants';
import { CryptoBuggy__factory } from '../typechain';

export const getBuggyPrice = async (): Promise<string> => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API}`,
  );

  const cryptoBuggyContract = CryptoBuggy__factory.connect(
    CRYPTO_BUGGY_ADDRESS,
    provider,
  );

  const price = await cryptoBuggyContract.price();

  return price.toString();
};
