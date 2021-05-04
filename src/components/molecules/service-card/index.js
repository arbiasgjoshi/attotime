import React from 'react';
import { container, iconWrapper, textContainer, cardTitle } from './service-card.module.scss';

const ServiceCard = ({ title, icon }) => (
  <div className={container}>
    <div className={iconWrapper}>{icon}</div>
    <div className={textContainer}>
      <h5 className={cardTitle}>{title}</h5>
    </div>
  </div>
);

export default ServiceCard;
