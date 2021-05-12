import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby-plugin-intl';

import { StaticImage } from 'gatsby-plugin-image';
import {
  leftFooterItems,
  footerLinksWrapper,
  pageFooter,
  footerTop,
  footerBottom,
  footerSitemap,
  hasLine,
  parentPath,
  downloadApp,
} from './footer.module.scss';
import CustomSelect from '../../atoms/custom-select';

const Footer = ({ FooterLinks }) => (
  <footer className={pageFooter}>
    <div className={footerTop}>
      <div className={leftFooterItems}>
        <StaticImage src="../../../images/logo@2x.png" alt="footer-logo" quality={90} width={85} />
        <p>A highly accurate time tracking solution for any company</p>

        <div>
          {/* TODO Dropdown here */}
          <CustomSelect />
        </div>
      </div>
      <div className={footerSitemap}>
        {FooterLinks.map((section) => (
          <div className={footerLinksWrapper} key={section.id}>
            <Link className={parentPath} to={`${section.parentPath}`}>
              {section.parent}
            </Link>
            {section.subMenuLinks.map((subMenu) => (
              <Link
                to={`${subMenu.path}`}
                className={subMenu.hasLine ? hasLine : null}
                key={subMenu.id}
              >
                {subMenu.name}
              </Link>
            ))}
            {section.downloadApp && (
              <div className={downloadApp}>
                {section.downloadApp.map((app) => (
                  <a href={app.href} target="_blank" rel="noreferrer" key={app.id}>
                    <img src={app.src} alt="Mobile" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <p className={footerBottom}>© Specta Labs, Inc. Terms & Privacy</p>
  </footer>
);

Footer.propTypes = {
  FooterLinks: PropTypes.shape({}),
};

export default Footer;
