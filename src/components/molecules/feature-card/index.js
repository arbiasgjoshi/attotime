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
  title: PropTypes.string,
  description: PropTypes.string,
  isWorkCard: PropTypes.bool,
  isLeftAligned: PropTypes.bool,
  imagePadding: PropTypes.string,
};

export default FeatureCard;
