import React from 'react';
import PropTypes from 'prop-types';

import {
  container,
  workCardContainer,
  logoWrapper,
  textContainer,
  leftAligned,
} from './feature-card.module.scss';

const FeatureCard = ({
  logo,
  alt,
  title,
  description,
  isLeftAligned,
  imagePadding,
  isWorkCard = false,
}) => (
  <div
    className={`${isWorkCard ? workCardContainer : container} ${isLeftAligned ? leftAligned : ''}`}
  >
    <div style={imagePadding && { padding: imagePadding }} className={logoWrapper}>
      {logo}
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
