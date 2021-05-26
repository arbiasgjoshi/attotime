import React from 'react';
import PropTypes from 'prop-types';

import {
  container,
  titleWrapper,
  descriptionWrapper,
  leftAligned,
  smallTitleStyle,
  notMiddleAligned,
  lighterTitle,
} from './title.module.scss';

const Title = ({
  smallTitle,
  title,
  notCentered,
  description,
  leftAlign = false,
  maxWidth = '',
  marginBottom = '',
  maxDescriptionWidth,
}) => (
  <div className={`${container} ${leftAlign && leftAligned} ${notCentered && notMiddleAligned}`}>
    {smallTitle && <p className={smallTitleStyle}>{smallTitle}</p>}
    <h2
      style={{ maxWidth, marginBottom }}
      className={`${titleWrapper} ${smallTitle && lighterTitle}`}
    >
      {title}
    </h2>
    <p
      style={maxDescriptionWidth && { maxWidth: maxDescriptionWidth }}
      className={descriptionWrapper}
    >
      {description}
    </p>
  </div>
);

Title.propTypes = {
  smallTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  leftAlign: PropTypes.bool,
  maxWidth: PropTypes.string,
  maxDescriptionWidth: PropTypes.string,
  marginBottom: PropTypes.string,
};

export default Title;
