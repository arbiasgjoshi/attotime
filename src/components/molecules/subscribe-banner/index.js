import React from 'react';
import PropTypes from 'prop-types';

import { StaticImage } from 'gatsby-plugin-image';
import { bannerWrapper, textWrapper, hasImage, imgWrap } from './subscribe.module.scss';
import EmailForm from '../../atoms/email-form';

const SubscribeBanner = ({
  title,
  subtitle,
  placeholder,
  bannerImage,
  checkItemOne,
  checkItemTwo,
  checkItemThree,
  style = '',
}) => (
  <div className={`${bannerWrapper} ${bannerImage && hasImage}`}>
    {bannerImage && (
      <div className={imgWrap}>
        <StaticImage
          src="../../../images/subscribe-banner@2x.png"
          alt="three phones"
          width={1140}
          height={470}
          quality={95}
        />
      </div>
    )}
    <div className={textWrapper}>
      {style === 'pricing' ? <h2>{title}</h2> : <h3>{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
    </div>
    <EmailForm
      placeholder={placeholder}
      checkItemOne={checkItemOne}
      checkItemTwo={checkItemTwo}
      checkItemThree={checkItemThree}
    />
  </div>
);

SubscribeBanner.propTypes = {
  title: PropTypes.string,
  bannerImage: PropTypes.bool,
  placeholder: PropTypes.string,
  checkItemOne: PropTypes.string,
  checkItemTwo: PropTypes.string,
  checkItemThree: PropTypes.string,
};

export default SubscribeBanner;
