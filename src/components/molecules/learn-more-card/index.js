import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/atoms/button';
import { Link } from 'gatsby-plugin-intl';
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
}) => {
  return (
    <div className={container}>
      <div className={iconWrapper}>
        <img width={imageWidth} height={imageHeight} src={icon} />
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
};

LearnMoreCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string,
};

export default LearnMoreCard;
