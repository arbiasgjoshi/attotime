import React from 'react';
import PropTypes from 'prop-types';

import { defaultBtn, tealStyle, trialStyle, wideStyle, roundStyle } from './button.module.scss';

const Button = ({ btnText, disabled, btnStyle }) => {
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
    return className;
  };
  return (
    <button className={`${defaultBtn} ${checkBtnStyle()}`} type="submit" disabled={disabled}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  disabled: PropTypes.bool,
  btnStyle: PropTypes.string,
};
export default Button;
