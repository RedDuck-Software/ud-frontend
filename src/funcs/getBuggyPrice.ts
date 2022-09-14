import { ethers } from 'ethers';

import { CryptoBuggy__factory } from '../typechain';

export const getBuggyPrice = async (): Promise<string> => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://${process.env.REACT_APP_NETWORK_NAME}.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API}`,
  );

  const cryptoBuggyContract = CryptoBuggy__factory.connect(
    process.env.REACT_APP_CRYPTO_BUGGY_ADDRESS!,
    provider,
  );

  const price = await cryptoBuggyContract.price();

  return price.toString();
};
