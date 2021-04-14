import React from 'react';
import PropTypes from 'prop-types';

import {
  container,
  workCardContainer,
  logoWrapper,
  textContainer,
} from './feature-card.module.scss';

const FeatureCard = ({ logo, alt, title, description, isWorkCard = false }) => (
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

FeatureCard.propTypes = {
  logo: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isWorkCard: PropTypes.bool,
};

export default FeatureCard;
