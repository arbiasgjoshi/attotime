import React from 'react';
import { container, mainTitle, border } from './number-card.module.scss';

const NumberCard = ({ title, description, hasBorder }) => (
  <div className={`${container} ${hasBorder && border}`}>
    <h3 className={mainTitle}>{title}</h3>
    <h5>{description}</h5>
  </div>
);

export default NumberCard;
