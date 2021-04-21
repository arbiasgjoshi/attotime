import React from 'react';
import PropTypes from 'prop-types';
import { container, titleWrapper, descriptionWrapper, leftAligned } from './title.module.scss';

const Title = ({ title, description, leftAlign = false }) => (
  <div className={`${container} ${leftAlign && leftAligned}`}>
    <h2 className={titleWrapper}>{title}</h2>
    <h4 className={descriptionWrapper}>{description}</h4>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  leftAlign: PropTypes.bool,
};

export default Title;
