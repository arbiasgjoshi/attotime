import React from 'react';
import PropTypes from 'prop-types';

import { headerContainer, titleStyle } from './header.module.scss';

const HeaderComponent = ({ centered, logoType }) => {
  return (
    <div className={headerContainer}>
      <h1 className={titleStyle}> Header Component</h1>
    </div>
  );
};

export default HeaderComponent;
