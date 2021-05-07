import React from 'react';
import { select } from './custom-select.module.scss';
import ArrowDown from '../../../images/arrow-down.svg';

const CustomSelect = () => {
  return (
    <div className={select}>
      <select>
        <option>English</option>
      </select>
      <span>
        <span>English</span>
        {<ArrowDown />}
      </span>
    </div>
  );
};

export default CustomSelect;
