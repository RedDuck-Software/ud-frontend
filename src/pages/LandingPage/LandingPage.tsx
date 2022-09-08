import React from 'react';
import './landingPage.scss';
import { useNavigate } from 'react-router-dom';

import aim from '../../images/aim.png';
import buggy1 from '../../images/buggy-1.png';
import buggy2 from '../../images/buggy-2.png';
import image1 from '../../images/image-1.png';
import image2 from '../../images/image-2.png';
import takeMyMoney from '../../images/SUATMM.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing__wrapper">
      <button className="landing__top-button">
        Multipy your donation by x3
      </button>
      <div className="landing__background-photo">
        <div className="landing__dark-bg">
          <div className="landing__take-my-money">
            <hr className="green-line" />
            <div className="container">
              <div className="landing__take-my-money-wrapper">
                <img className="take-my-money-img" src={takeMyMoney} alt="" />
                <div className="take-my-money-bg"></div>
                <p className="take-my-money-text">
                  We are developing buggies for the Ukrainian army for very
                  cheap self-cost. Instead of donating money for expensive cars
                  from the market, it&apos;s better to donate the same amount to
                  buggy manufacturing and get three times more cars. Multiply
                  your donation by X3.
                </p>
              </div>
              <div className="landing__button-wrapper">
                <button
                  className="button button-one"
                  onClick={() => navigate('/mint-page')}
                >
                  shut up and take my money!
                </button>
              </div>
            </div>
          </div>
          <div className="landing__fully-dark-bg">
            <div className="container">
              <div className="landing__text-1">
                <div className="landing__text-1-wrapper">
                  <hr className="green-line" />
                  <p className="landing__text-1-text">
                    We believe that every person should be working towards the
                    same goal - achieving military superiority (technical in the
                    first place) against our common enemy - Russia, and kicking
                    them out of the whole territory of Ukraine.
                  </p>
                  <p className="landing__text-1-text">
                    That&apos;s why we started this project of manufacturing
                    buggies that we hand over to the Ukrainian military for
                    transportation purposes.
                  </p>
                  <hr className="green-line" />
                </div>
                <img className="landing__text-1-img" src={buggy1} alt="" />
              </div>

              <div className="landing__text-2">
                <img className="landing__text-2-img" src={image1} alt="" />
                <div className="landing__text-2-wrapper">
                  <hr className="green-line" />
                  <p className="landing__text-2-text">
                    The company RedDuck has been the main sponsor of this idea,
                    and we are pleased to announce that, today, at the Kyiv Tech
                    Summit, we are opening the DAPP that allows donating for
                    buggies seamlessly.
                  </p>
                  <img className="aim" src={aim} />
                  <hr className="green-line" />
                </div>
              </div>

              <div className="landing__text-3">
                <div className="landing__text-3-wrapper">
                  <hr className="green-line" />
                  <p className="landing__text-3-text">
                    For each buggy manufactured, an NFT is minted for those who
                    participated in the donation for it.
                  </p>
                  <hr className="green-line" />
                </div>
                <img className="landing__text-3-img" src={buggy2} alt="" />
              </div>

              <div className="landing__text-wrapper">
                <p className="landing__text">
                  You will get an NFT for the buggy you purchased. You can also
                  select the nickname/text we display on the buggy. If you
                  don&apos;t want, you can leave no comment, contribute for
                  buggy, and get its NFT.
                </p>

                <p className="landing__text">
                  You can view the NFTs that we emit on our website and all the
                  supported NFT marketplaces.
                </p>

                <p className="landing__text-note">NOTE:</p>

                <p className="landing__text">
                  The dapp has two modes: partial and complete donation.
                </p>

                <p className="landing__text">
                  Even if you don&apos;t have the total amount for the
                  contribution for one buggy, you can still participate in the
                  contribution by choosing partial mode.
                </p>

                <p className="landing__text">
                  Partial mode means you can donate less than the amount
                  required for one buggy and have a common NFT minted to you and
                  other participants of that particular buggy.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="landing__button-wrapper">
                <button
                  className="button"
                  onClick={() => navigate('/mint-page')}
                >
                  open app
                </button>
              </div>
            </div>
            <div className="landing__images-wrapper">
              <div className="landing__images-wrapper-bg"></div>
              <img src={image1} />
              <img className="landing__images-wrapper-image-2" src={image2} />
            </div>
            <hr className="green-line-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
