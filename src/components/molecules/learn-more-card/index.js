import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';

import Button from '@components/atoms/button';

import {
  container,
  iconWrapper,
  textWrapper,
  cardTitle,
  paragraphText,
} from './learn-more-card.module.scss';

const LearnMoreCard = ({
  title,
  description,
  btnText,
  icon,
  imageWidth,
  imageHeight,
  path = '/',
}) => (
  <div className={container}>
    <div className={iconWrapper}>
      <img alt={`title${imageWidth}`} width={imageWidth} height={imageHeight} src={icon} />
    </div>
    <div className={textWrapper}>
      <h5 className={cardTitle}>{title}</h5>
      <p className={paragraphText}>{description}</p>
    </div>
    <Link to={path}>
      <Button btnStyle="wide" btnText={btnText || 'Learn more'} />
    </Link>
  </div>
);

LearnMoreCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
};

export default LearnMoreCard;
