import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { container, leftBox, iconWrapper, imageWrapper } from './cover.module.scss';
const Cover = () => (
  <div className={container}>
    <div className={leftBox}>
      <div className={iconWrapper}>
        <StaticImage width={48} height={57} src="../../../../images/verifiedShield.svg" />
      </div>
      <h4>Trusted by thousands of bussinesses across 50+ countries globally.</h4>
    </div>
    <StaticImage
      className={imageWrapper}
      width={746}
      height={400}
      quality={90}
      src="../../../../images/trusted-img@2x.png"
    />
  </div>
);

export default Cover;
