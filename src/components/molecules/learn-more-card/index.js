import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/atoms/button';
import {
  container,
  iconWrapper,
  textWrapper,
  cardTitle,
  paragraphText,
} from './learn-more-card.module.scss';

const LearnMoreCard = ({ title, description, btnText, icon }) => {
  return (
    <div className={container}>
      <div className={iconWrapper}>
        <img src={icon} />
      </div>
      <div className={textWrapper}>
        <h5 className={cardTitle}>{title}</h5>
        <p className={paragraphText}>{description}</p>
      </div>
      <Button btnStyle="wide" btnText={btnText || 'Learn more'} />
    </div>
  );
};

LearnMoreCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  icon: PropTypes.string,
};

export default LearnMoreCard;
