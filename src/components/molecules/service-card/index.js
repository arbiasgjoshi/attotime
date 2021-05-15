import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/icon';

import {
  container,
  iconWrapper,
  textContainer,
  cardTitle,
  arrowContainer,
} from './service-card.module.scss';

const ServiceCard = ({ title, icon }) => (
  <div className={container}>
    <div className={iconWrapper}>{icon}</div>
    <div className={textContainer}>
      <h5 className={cardTitle}>{title}</h5>
    </div>
    <div className={arrowContainer}>
      <Icon fSize={3} iconClass="long-arrow" />
    </div>
  </div>
);

ServiceCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.shape({}),
};

export default ServiceCard;
