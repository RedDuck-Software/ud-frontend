import './NFT.scss';
import React from 'react';

function NFT({ image }: { image: string | undefined }) {
  return (
    <div className="nft__container">
      <div className="nft__container-img">
        <img
          className="nft__image"
          src={image && `https://ipfs.io/ipfs/${image}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default NFT;
