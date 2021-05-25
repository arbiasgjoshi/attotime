import React from 'react';

import {
  container,
  textContainer,
  iconWrapper,
  textWrapper,
  imagesContainer,
  imageBox1,
  imageBox2,
  imageBox3,
  topImage,
} from './images-box.module.scss';

import Shield from '../../../images/verifiedShield.svg';

const ImagesBox = ({ title, image1, image2, image3, image4 }) => {
  return (
    <div className={container}>
      <div className={textContainer}>
        <div className={iconWrapper}>
          <Shield />
        </div>
        <div className={textWrapper}>
          <h4>Trusted by thousands of construction businesses across 50+ countries</h4>
        </div>
      </div>
      <div className={topImage}>
        <img src={image4} />
      </div>
      <div className={imagesContainer}>
        <div className={imageBox1}>
          <img src={image1} />
        </div>
        <div className={imageBox2}>
          <img src={image2} />
        </div>
        <div className={imageBox3}>
          <img src={image3} />
        </div>
      </div>
    </div>
  );
};

export default ImagesBox;
