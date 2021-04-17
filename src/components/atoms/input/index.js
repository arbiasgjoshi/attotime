import React from 'react';
import PropTypes from 'prop-types';

import { defaultInput } from './input.module.scss';

const Input = ({ type = 'text', placeholder = 'Enter here...' }) => (
  <input type={type} placeholder={placeholder} className={defaultInput} />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
