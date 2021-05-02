import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import { StaticImage } from 'gatsby-plugin-image';
import Button from '@components/atoms/button';
import Divider from '@components/atoms/divider';
import Icon from '@components/atoms/icon';
import {
  headerContainer,
  leftNav,
  menuLinks,
  rightNavButtons,
  menu,
  menuSection,
  contentPadding,
  leftItems,
  mainItem,
  subItems,
  rightItems,
  featuredItems,
  featureLink,
  headerItem,
  menuItemWrapper,
  menuIcon,
  menuItemDesc,
} from './header.module.scss';

const HeaderComponent = ({ centered, logoType }) => {
  const [hovered, setHovered] = useState(null);

  const onElementHover = (val) => {
    setHovered(val);
  };

  return (
    <>
      <header className={headerContainer}>
        <div className={leftNav}>
          <StaticImage src="../../../images/logo@2x.png" quality={90} width={85} />
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

        <div className={menu}>
          <div className={menuSection}>
            <div className={`${leftItems} ${contentPadding} `}>
              <div className={mainItem}>
                <Link className={`${headerItem} ${menuItemWrapper}`} to="/product">
                  <div className={menuIcon}>
                    <Icon iconClass="random" />
                  </div>
                  <div className={menuItemDesc}>
                    <h6>Product Overview</h6>
                    <p>
                      Atto is a simple all-in-one time-tracking and timesheet solution. Spend less
                      time managing your business and more time getting work done.
                    </p>
                  </div>
                </Link>
              </div>
              <Divider className="style5" />
              <div className={subItems}></div>
            </div>
            <div className={rightItems}>
              <h6>More Features</h6>
              <ul className={featuredItems}>
                <li>
                  <Link className={featureLink} to="/">
                    <Icon iconClass="long-arrow" />
                    Mobile Time Tracking
                  </Link>
                </li>
                <li>
                  <Link className={featureLink} to="/">
                    <Icon iconClass="long-arrow" />
                    Time Clock
                  </Link>
                </li>
                <li>
                  <Link className={featureLink} to="/">
                    <Icon iconClass="long-arrow" />
                    Time Card App
                  </Link>
                </li>
                <li>
                  <Link className={featureLink} to="/">
                    <Icon iconClass="long-arrow" />
                    Work Hours Tracker
                  </Link>
                </li>
                <li>
                  <Link className={featureLink} to="/">
                    <Icon iconClass="long-arrow" />
                    Accurate Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${menuSection} ${contentPadding}`} />
          <div className={`${menuSection} ${contentPadding}`} />
        </div>
      </header>
    </>
  );
};
export default HeaderComponent;
