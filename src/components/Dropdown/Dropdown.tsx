/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import './dropdown.scss';

const Dropdown = ({ setSelectedOption }: { setSelectedOption: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('Full');
  const [secondOption, setSecondOption] = useState<string>('Partial');

  return (
    <div className="select-wrapper" onClick={() => setIsOpen(!isOpen)}>
      <div className="select-option">
        {selected} <i className="arrow down"></i>
      </div>
      {isOpen && (
        <button
          className="select-option"
          onClick={() => {
            const temp = selected;
            setSelected(secondOption);
            setSecondOption(temp);
            setSelectedOption(secondOption);
            setIsOpen(false);
          }}
        >
          {secondOption}
        </button>
      )}
    </div>
  );
};

export default Dropdown;
