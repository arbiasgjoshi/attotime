import React from 'react';
import PropTypes from 'prop-types';

import {
  defaultBtn,
  tealStyle,
  trialStyle,
  wideStyle,
  roundStyle,
  pricingStyle,
  activeStyle,
  bigStyle,
} from './button.module.scss';

const Button = ({ btnText, disabled, btnStyle, pricing, activeClass, onBtnClick }) => {
  const checkBtnStyle = () => {
    let className = '';
    if (btnStyle === 'teal') {
      className += ` ${tealStyle}`;
    }
    if (btnStyle === 'trial') {
      className += ` ${trialStyle}`;
    }
    if (btnStyle === 'wide') {
      className += ` ${wideStyle}`;
    }
    if (btnStyle === 'round') {
      className += ` ${roundStyle}`;
    }
    if (btnStyle === 'big') {
      className += ` ${bigStyle}`;
    }
    if (pricing) {
      className += ` ${pricingStyle}`;
    }
    if (activeClass) {
      className += ` ${activeStyle}`;
    }
    return className;
  };
  return (
    <button
      className={`${defaultBtn} ${checkBtnStyle()}`}
      type="submit"
      disabled={disabled}
      onClick={() => onBtnClick && onBtnClick()}
    >
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  disabled: PropTypes.bool,
  pricing: PropTypes.bool,
  btnStyle: PropTypes.string,
  onBtnClick: PropTypes.func,
  activeClass: PropTypes.bool,
};
export default Button;
