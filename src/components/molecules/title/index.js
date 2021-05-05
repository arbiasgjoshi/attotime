import React from 'react';
import PropTypes from 'prop-types';
import { container, titleWrapper, descriptionWrapper, leftAligned } from './title.module.scss';

const Title = ({ title, description, leftAlign = false, maxWidth, maxDescriptionWidth }) => (
  <div className={`${container} ${leftAlign && leftAligned}`}>
    <h2 style={maxWidth && { maxWidth }} className={titleWrapper}>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  leftAlign: PropTypes.bool,
  maxWidth: PropTypes.string,
  maxDescriptionWidth: PropTypes.string,
};

export default Title;
