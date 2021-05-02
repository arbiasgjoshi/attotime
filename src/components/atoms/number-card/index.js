import React from 'react';
import { container, border, padded } from './number-card.module.scss';

const NumberCard = ({ title, description, hasBorder, hasPadding }) => (
  <div className={`${container} ${hasBorder && border} ${hasPadding && padded}`}>
    <h3>{title}</h3>
    <h5>{description}</h5>
  </div>
);

export default NumberCard;
