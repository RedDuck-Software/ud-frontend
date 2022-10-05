import './NFT.scss';
import React from 'react';

function NFT({ image }: { image: string | undefined }) {
  console.log('Item image: ', image);

  return (
    <div className="nft__container">
      <div className="nft__container-img">
        <img className="nft__image" src={image ? image : ''} alt="" />
      </div>
    </div>
  );
}

export default NFT;
