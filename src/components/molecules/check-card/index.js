import React from 'react';
import {
  card,
  cardTitle,
  hasDescr,
  cardIcon,
  cardIconWrapper,
  textWrapper,
  paragraph,
} from './check-card.module.scss';
import checkIcon from '../../../images/green_circle_tick.png';

const CheckCard = ({ title, hasDescription, description }) => {
  return (
    <div className={card}>
      <div className={cardIconWrapper}>
        <img className={cardIcon} src={checkIcon} />
      </div>
      <div className={textWrapper}>
        <h5 className={`${cardTitle} ${hasDescription && hasDescr}`}>{title}</h5>
        {hasDescription && <p className={paragraph}>{description}</p>}
      </div>
    </div>
  );
};

export default CheckCard;
