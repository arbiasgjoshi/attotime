import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconClass, hasStyle, fSize }) => (
  <i className={`atto attoicon-${iconClass}`} style={{ fontSize: `${fSize}rem`, hasStyle }} />
);

Icon.propTypes = {
  iconClass: PropTypes.string,
  hasStyle: PropTypes.string,
  fSize: PropTypes.number,
};

export default Icon;
