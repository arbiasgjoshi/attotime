import React from 'react';
import { card, cardTitle, cardIcon, cardIconWrapper } from './check-card.module.scss';
import checkIcon from '../../../images/green_circle_tick.png';

const CheckCard = ({ title }) => {
  return (
    <div className={card}>
      <div className={cardIconWrapper}>
        <img className={cardIcon} src={checkIcon} />
      </div>
      <h5 className={cardTitle}>{title}</h5>
    </div>
  );
};

export default CheckCard;
