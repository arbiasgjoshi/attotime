import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import { StaticImage } from 'gatsby-plugin-image';
import Button from '@components/atoms/button';
import { headerContainer, leftNav, menuLinks, rightNavButtons } from './header.module.scss';

const HeaderComponent = ({ centered, logoType }) => (
  <header className={headerContainer}>
    <div className={leftNav}>
      <StaticImage />
    </div>
    <div className={menuLinks}>
      <Link to="/product">Product</Link>
      <Link to="/why-atto">Why Atto?</Link>
      <Link to="/industries">Industries</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/resources">Resources</Link>
    </div>
    <div className={rightNavButtons}>
      <Link to="/login">Log In</Link>
      <Link to="/try-for-free">
        <Button btnText="Try for Free" btnStyle="teal" />
      </Link>
    </div>
  </header>
);
export default HeaderComponent;
