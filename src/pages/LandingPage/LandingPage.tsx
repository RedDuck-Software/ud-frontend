import './landingPage.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../config/routes';
import image1 from '../../images/image-1.png';
import image2 from '../../images/image-2.png';

const LandingPage = () => {
  return (
    <div className="landing__wrapper">
      <button className="landing__top-button">
        Multipy your donation by x3
      </button>
      <div className="landing__background-photo">
        <div className="landing__dark-bg">
          <div className="container">
            <div className="landing__button-wrapper">
              <Link to={ROUTES.MintPage}>
                <button className="button">shut up and take my money!</button>
              </Link>
            </div>
          </div>
          <hr className="green-line" />
          <div className="landing__text-wrapper">
            <p className="landing__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <hr className="green-line" />
          <div className="container">
            <div className="landing__button-wrapper">
              <Link to={ROUTES.MintPage}>
                <button className="button">open app</button>
              </Link>
            </div>
          </div>
          <div className="landing__images-wrapper">
            <div className="landing__images-wrapper-bg"></div>
            <img src={image1} />
            <img src={image2} />
          </div>
          <hr className="green-line-2" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
