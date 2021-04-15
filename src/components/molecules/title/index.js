import React from 'react';
import PropTypes from 'prop-types';
import { container, titleWrapper, descriptionWrapper } from './title.module.scss';

const Title = ({ title, description }) => {
  return (
    <div className={container}>
      <h3 className={titleWrapper}>{title}</h3>
      <h4 className={descriptionWrapper}>{description}</h4>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Title;
