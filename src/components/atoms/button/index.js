import React from 'react';
import { buttonWrapper } from './button.module.scss';

const Button = ({ btnText, disabled }) => {
  return (
    <button className={buttonWrapper} type="submit" disabled={disabled}>
      {btnText}
    </button>
  );
};

export default Button;
