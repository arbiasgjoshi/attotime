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
  menuItem,
  menuItemWrapper,
  resourcesMenu,
  menuIcon,
  menuItemDesc,
} from './header.module.scss';

const HeaderComponent = ({ centered, logoType }) => {
  const [hovered, setHovered] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [aboveMainMenu, setAbove] = useState(false);
  const [overMenu, setOverMenu] = useState(false);

  const viewMenuSections = (val) => {
    switch (val) {
      case 'product':
        return (
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
              <div className={subItems}>
                <Link className={menuItem} to="/product/time-tracking">
                  <div className={menuIcon}>
                    <Icon iconClass="random" />
                  </div>
                  <div className={menuItemDesc}>
                    <h6>Time Tracking</h6>
                    <p>Accurate time tracking from any location and any device</p>
                  </div>
                </Link>
                <Link className={menuItem} to="/product/gps-location-tracking">
                  <div className={menuIcon}>
                    <Icon iconClass="random" />
                  </div>
                  <div className={menuItemDesc}>
                    <h6>GPS Location Tracking</h6>
                    <p>Real-time updates on your team’s locations and movements</p>
                  </div>
                </Link>
                <Link className={menuItem} to="/">
                  <div className={menuIcon}>
                    <Icon iconClass="random" />
                  </div>
                  <div className={menuItemDesc}>
                    <h6>Team Activity</h6>
                    <p>Stay in the loop of your team’s progress as work happens</p>
                  </div>
                </Link>
                <Link className={menuItem} to="/">
                  <div className={menuIcon}>
                    <Icon iconClass="random" />
                  </div>
                  <div className={menuItemDesc}>
                    <h6>Timesheets</h6>
                    <p>Accurate timesheet reports without the hassle</p>
                  </div>
                </Link>
              </div>
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
        );
      case 'industries':
        return <div className={`${menuSection} ${contentPadding}`} />;
      case 'resources':
        return <div className={`${menuSection} ${contentPadding}`} />;
      default:
        return null;
    }
  };

  const leaveMenuItem = () => {
    if (!overMenu) {
      console.log('entering first here');
      setTimeout(() => {
        console.log('entering then here');
        setHovered(false);
        setActiveItem(null);
      }, 500);
    }
  };

  const hasLeftMenu = () => {
    console.log('left menu');
    setTimeout(() => {
      setOverMenu(false);
      leaveMenuItem();
    }, 500);
  };

  // const aboveMainMenu = () => {

  // }

  const menuClasses = (val) => {
    let menuClass = menu;
    if (val === 'resources') {
      menuClass += ` ${resourcesMenu}`;
    }

    return menuClass;
  };

  const showMenu = (val) => {
    setHovered(true);
    setActiveItem(val);
  };

  return (
    <>
      <header className={headerContainer}>
        <div className={leftNav}>
          <StaticImage src="../../../images/logo@2x.png" quality={90} width={85} />
        </div>
        <div
          className={menuLinks}
          onMouseEnter={() => setAbove(true)}
          onMouseLeave={() => leaveMenuItem()}
        >
          <Link to="/product" onMouseEnter={() => showMenu('product')}>
            Product
          </Link>
          <Link to="/why-atto">Why Atto?</Link>
          <Link to="/industries" onMouseEnter={() => showMenu('industries')}>
            Industries
          </Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/resources" onMouseEnter={() => showMenu('resources')}>
            Resources
          </Link>
        </div>
        <div className={rightNavButtons}>
          <Link to="/login">Log In</Link>
          <Link to="/try-for-free">
            <Button btnText="Try for Free" btnStyle="teal" />
          </Link>
        </div>
        {hovered && (
          <div
            className={menuClasses(activeItem)}
            onMouseEnter={() => setOverMenu(true)}
            onMouseLeave={() => hasLeftMenu()}
          >
            {viewMenuSections(activeItem)}
          </div>
        )}
      </header>
    </>
  );
};
export default HeaderComponent;
