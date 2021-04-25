import React from 'react';
import { container, mainTitle, border, padded } from './number-card.module.scss';

const NumberCard = ({ title, description, hasBorder, hasPadding }) => (
  <div className={`${container} ${hasBorder && border} ${hasPadding && padded}`}>
    <h3 className={mainTitle}>{title}</h3>
    <h5>{description}</h5>
  </div>
);

export default NumberCard;
