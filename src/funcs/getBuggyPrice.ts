import { ethers } from 'ethers';

import { NETWORK_NAME, CRYPTO_BUGGY_ADDRESS } from '../helper/constants';
import { CryptoBuggy__factory } from '../typechain';

export const getBuggyPrice = async (): Promise<string> => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://${NETWORK_NAME}.infura.io/v3/${process.env.REACT_APP_INFURA_API}`,
  );

  const cryptoBuggyContract = CryptoBuggy__factory.connect(
    CRYPTO_BUGGY_ADDRESS,
    provider,
  );

  const price = await cryptoBuggyContract.price();

  return price.toString();
};
