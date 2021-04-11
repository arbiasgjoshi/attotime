import React from 'react';
import {
  container,
  workCardContainer,
  logoWrapper,
  textContainer,
} from './feature-card.module.scss';

const FeatureCard = ({ logo, alt, title, description, isWorkCard = false }) => {
  return (
    <div className={`${isWorkCard ? workCardContainer : container}`}>
      <div className={logoWrapper}>
        <img alt={alt} src={logo} />
      </div>
      <div className={textContainer}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
