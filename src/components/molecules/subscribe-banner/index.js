import React from 'react';
import PropTypes from 'prop-types';

import { StaticImage } from 'gatsby-plugin-image';
import SubscribeForm from '@components/molecules/subscribe-form';
import Icon from '@components/atoms/icon';
import {
  bannerWrapper,
  textWrapper,
  checkItems,
  itemWrapper,
  hasImage,
  imgWrap,
} from './subscribe.module.scss';

const SubscribeBanner = ({
  title,
  subtitle,
  placeholder,
  bannerImage,
  checkItemOne,
  checkItemTwo,
  checkItemThree,
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
      <h3>{title}</h3>
      {subtitle && <h5>{subtitle}</h5>}
    </div>
    <SubscribeForm placeholder={placeholder} />
    <div className={checkItems}>
      <div className={itemWrapper}>
        <Icon iconClass="tick" />
        <span>{checkItemOne}</span>
      </div>
      <div className={itemWrapper}>
        <Icon iconClass="tick" />
        <span>{checkItemTwo}</span>
      </div>
      <div className={itemWrapper}>
        <Icon iconClass="tick" />
        <span>{checkItemThree}</span>
      </div>
    </div>
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
