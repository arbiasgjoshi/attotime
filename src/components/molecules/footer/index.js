import React from 'react';
import PropTypes from 'prop-types';

import Link from '@reach/router';
// import DropDown from '@components/molecules/dropdown';

import { StaticImage } from 'gatsby-plugin-image';
import { leftFooterItems, footerLinksWrapper } from './footer.module.scss';

const Footer = ({ footerLinks }) => (
  <footer>
    <div className={leftFooterItems}>
      <StaticImage src="../../../images/logo@2x.png" quality={90} width={85} />
      <p>A highly accurate time tracking solution for any company</p>
    </div>
    {footerLinks.map((section) => (
      <div className={footerLinksWrapper}>
        <h6>{section.parent}</h6>
        {section.subMenuLinks.map((subMenu) => (
          <Link to={subMenu.path} />
        ))}
      </div>
    ))}
    <p>© Specta Labs, Inc. Terms & Privacy</p>
  </footer>
);

Footer.propTypes = {
  footerLinks: PropTypes.shape(),
};

export default Footer;
