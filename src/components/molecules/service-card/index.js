import React from 'react';
import {
  container,
  textContainer,
  cardTitle,
  cardNumber,
  imageWrapper,
} from './service-card.module.scss';

const ServiceCard = ({ index, title, img }) => {
  return (
    <div className={container}>
      <div className={textContainer}>
        <span className={cardNumber}>{'0' + index}</span>
        <h4 className={cardTitle}>{title}</h4>
      </div>
      <div className={imageWrapper}>
        <img src={img} />
      </div>
    </div>
  );
};

export default ServiceCard;
