import React from 'react';
import PropTypes from 'prop-types';
import {
  container,
  titleWrapper,
  descriptionWrapper,
  leftAligned,
  smallTitleStyle,
  lighterTitle,
} from './title.module.scss';

const Title = ({
  smallTitle,
  title,
  description,
  leftAlign = false,
  maxWidth = '',
  marginBottom = '',
  maxDescriptionWidth,
}) => (
  <div className={`${container} ${leftAlign && leftAligned}`}>
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
};

export default Title;
