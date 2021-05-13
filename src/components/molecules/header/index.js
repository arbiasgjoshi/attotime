import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby-plugin-intl';

import { StaticImage } from 'gatsby-plugin-image';
import Button from '@components/atoms/button';
import Divider from '@components/atoms/divider';
import Icon from '@components/atoms/icon';

import ProductIcon from '@images/product-overview-logo.svg';
import TimeTrackingIcon from '@images/time-tracking.svg';
import LocationTrackingIcon from '@images/location-tracking-logo.svg';
import TeamActivityLogo from '@images/team-activity-logo.svg';
import TimesheetsLogo from '@images/timesheets-logo.svg';

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';

import HelpCenterLogo from '@images/help-center-logo.svg';
import BlogLogo from '@images/blog-menu-logo.svg';
import ContactLogo from '@images/contact-menu-logo.svg';

import {
  headerWrapper,
  container,
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
  menuItems,
  menuItem,
  menuItemWrapper,
  resourcesMenu,
  menuIcon,
  menuItemDesc,
} from './header.module.scss';

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const [overMenu, setOverMenu] = useState(false);
  const [aboveMainMenu, setAbove] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // FIXME There is a need for three states: opened menu, you're over the menu, you've left both the menu and main links;

  const viewMenuSections = (val) => {
    switch (val) {
      case 'product':
        return (
          <div className={menuSection}>
            <div className={`${leftItems} ${contentPadding}`}>
              <div className={mainItem}>
                <Link className={`${menuItem} ${menuItemWrapper}`} to="/product">
                  <div className={menuIcon}>
                    <ProductIcon />
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
              <Divider className="style7" />
              <div className={subItems}>
                <Link className={menuItem} to="/product/time-tracking">
                  <div className={menuIcon}>
                    <TimeTrackingIcon />
                  </div>
                  <div className={menuItemDesc}>
                    <h6>Time Tracking</h6>
                    <p>Accurate time tracking from any location and any device</p>
                  </div>
                </Link>
                <Link className={menuItem} to="/product/gps-location-tracking">
                  <div className={menuIcon}>
                    <LocationTrackingIcon />
                  </div>
                  <div className={menuItemDesc}>
                    <h6>GPS Location Tracking</h6>
                    <p>Real-time updates on your team’s locations and movements</p>
                  </div>
                </Link>
                <Link className={menuItem} to="/product/team-activity">
                  <div className={menuIcon}>
                    <TeamActivityLogo />
                  </div>
                  <div className={menuItemDesc}>
                    <h6>Team Activity</h6>
                    <p>Stay in the loop of your team’s progress as work happens</p>
                  </div>
                </Link>
                <Link className={menuItem} to="/product/timesheets">
                  <div className={menuIcon}>
                    <TimesheetsLogo />
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
              <ul>
                <li>
                  <Link to="/">
                    <Icon iconClass="arrow-right" />
                    Mobile Time Tracking
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Icon iconClass="arrow-right" />
                    Time Clock
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Icon iconClass="arrow-right" />
                    Time Card App
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Icon iconClass="arrow-right" />
                    Work Hours Tracker
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Icon iconClass="arrow-right" />
                    Accurate Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'industries':
        return (
          <div className={`${menuSection} ${contentPadding}`}>
            <div className={menuItems}>
              <Link className={menuItem} to="/industries/construction">
                <div className={menuIcon}>
                  <ConstructionLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Construction</h6>
                  <p>Track your entire crew’s time and location in real-time.</p>
                </div>
              </Link>
              <Link className={menuItem} to="/industries/painting-and-decorating">
                <div className={menuIcon}>
                  <PaintingLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Painting & Decorating</h6>
                  <p>Using paper timesheets is like watching paint dry.</p>
                </div>
              </Link>
              <Link className={menuItem} to="/industries/healtchare-and-medical">
                <div className={menuIcon}>
                  <HealthcareLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Healthcare & Medical</h6>
                  <p>Keep accurate time records while providing care.</p>
                </div>
              </Link>
              <Link className={menuItem} to="/industries/plumbing-and-heating">
                <div className={menuIcon}>
                  <PlumbingLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Plumbing & Heating</h6>
                  <p>All cisterns go! Get to work with accurate time tracking from Atto.</p>
                </div>
              </Link>
              <Link className={menuItem} to="/industries/electrical">
                <div className={menuIcon}>
                  <ElectrianLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Electrical</h6>
                  <p>Avoid a nasty shock by tracking work hours in real-time</p>
                </div>
              </Link>
              <Link className={menuItem} to="/industries/landscaping">
                <div className={menuIcon}>
                  <LandscapingLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Landscaping</h6>
                  <p>The grass is always greener for landscapers that use Atto.</p>
                </div>
              </Link>
              <Link className={menuItem} to="/industries/roofing">
                <div className={menuIcon}>
                  <RoofingLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Roofing</h6>
                  <p>Keep accurate time records while working outdoors.</p>
                </div>
              </Link>
              <Link className={menuItem} to="/industries/cleaning-and-maintenance">
                <div className={menuIcon}>
                  <CleaningLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Cleaning & Maintenance</h6>
                  <p>Let’s make it a clean sweep! Keep your time tracking tidy.</p>
                </div>
              </Link>
              <Link className={menuItem} to="/industries/more">
                <div className={menuIcon}>
                  <ThreeDots />
                </div>
                <div className={menuItemDesc}>
                  <h6>More industries</h6>
                  <p>Security, Logistics, Government, Consulting, and many more…</p>
                </div>
              </Link>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className={`${menuSection} ${resourcesMenu} ${contentPadding}`}>
            <div className={menuItems}>
              <Link className={menuItem} to="/help-center">
                <div className={menuIcon}>
                  <HelpCenterLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Help Center</h6>
                  <p>Get answers to all of your questions in an instant</p>
                </div>
              </Link>
              <Link className={menuItem} to="/blog">
                <div className={menuIcon}>
                  <BlogLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Blog</h6>
                  <p>Get helpful productivity tips from our blog</p>
                </div>
              </Link>
              <Link className={menuItem} to="/contact">
                <div className={menuIcon}>
                  <ContactLogo />
                </div>
                <div className={menuItemDesc}>
                  <h6>Contact</h6>
                  <p>Reach out to our support team to get answers to your questions</p>
                </div>
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const leftMenu = () => {
    if (!overMenu) {
      setTimeout(() => {
        setOpen(false);
        setActiveItem(null);
      }, 500);
    }
  };

  const hasLeftMenu = () => {
    setTimeout(() => {
      setOverMenu(false);
      leftMenu();
    }, 500);
  };

  const menuClasses = (val) => {
    let menuClass = menu;
    if (val === 'resources') {
      menuClass += ` ${resourcesMenu}`;
    }

    return menuClass;
  };

  const showMenu = (val) => {
    setOpen(true);
    setActiveItem(val);
  };

  return (
    <header className={headerWrapper}>
      <div className={container}>
        <div className={leftNav}>
          <StaticImage src="../../../images/logo@2x.png" quality={100} width={85} />
        </div>
        <div
          className={menuLinks}
          onMouseEnter={() => setAbove(true)}
          onMouseLeave={() => leftMenu()}
        >
          <Link to="/product" onMouseEnter={() => showMenu('product')}>
            Product
          </Link>
          {/* <Link to="/why-atto">Why Atto?</Link> */}
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
        {open && (
          <div
            className={menuClasses(activeItem)}
            onMouseEnter={() => setOverMenu(true)}
            onMouseLeave={() => hasLeftMenu()}
          >
            {viewMenuSections(activeItem)}
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
