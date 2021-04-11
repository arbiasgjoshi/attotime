import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { container, leftBox, iconWrapper, imageWrapper } from './cover.module.scss';
const Cover = () => (
  <div className={container}>
    <div className={leftBox}>
      <div className={iconWrapper}>
        <StaticImage width={52} height={62} src="../../../../images/verifiedShield.svg" />
      </div>
      <h5>Trusted by thousands of bussinesses across 50+ countries globally.</h5>
    </div>
    <StaticImage
      className={imageWrapper}
      width={746}
      height={400}
      src="../../../../images/bussinessCover.svg"
    />
  </div>
);

export default Cover;
