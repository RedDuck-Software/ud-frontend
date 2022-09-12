/* eslint-disable */
import React from 'react';
import './modalWindow.scss';

import cross from '../../images/icons-close.png';
import success from '../../images/success.png';
import failure from '../../images/failure.png';

const ModalWindow = ({
  setIsShown,
  isError,
}: {
  setIsShown: Function;
  isError: boolean;
}) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <img
          src={cross}
          className="cross-icon"
          onClick={() => setIsShown(false)}
        />
        {isError ? (
          <>
            <div className="modal-text">The donation failed or cancelled!</div>
            <img src={failure} className="modal-icon" />
          </>
        ) : (
          <>
            <div className="modal-text">The donation proceeded successfully!</div>
            <img src={success} className="modal-icon" />
          </>
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
