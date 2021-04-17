import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/icon';

import {
  card,
  cardTitle,
  hasDescr,
  cardIconWrapper,
  textWrapper,
  smallCardStyle,
  paragraph,
} from './check-card.module.scss';

const CheckCard = ({ title, hasDescription, description, smallStyle }) => (
  <div className={`${card} ${smallStyle && smallCardStyle}`}>
    <div className={cardIconWrapper}>
      <Icon iconClass="tick" />
    </div>
    <div className={textWrapper}>
      <h5 className={`${cardTitle} ${hasDescription && hasDescr}`}>{title}</h5>
      {hasDescription && <p className={paragraph}>{description}</p>}
    </div>
  </div>
);

CheckCard.propTypes = {
  title: PropTypes.string,
  hasDescription: PropTypes.bool,
  description: PropTypes.string,
  smallStyle: PropTypes.bool,
};

export default CheckCard;
