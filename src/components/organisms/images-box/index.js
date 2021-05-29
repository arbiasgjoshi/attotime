import React from 'react';

import * as styles from './images-box.module.scss';

import Shield from '../../../images/verifiedShield.svg';

const ImagesBox = ({
  title = 'Trusted by thousands of construction businesses across 50+ countries',
  image1,
  image2,
  image3,
  image4,
  image5,
  styling = '',
}) => {
  return (
    <div className={`${styles.container} ${styles[styling]}`}>
      <div className={styles.textContainer}>
        <div className={styles.iconWrapper}>
          <Shield />
        </div>
        <div className={styles.textWrapper}>
          <h4>{title}</h4>
        </div>
      </div>
      <div className={styles.topImage}>
        <img src={image4} />
      </div>
      <div className={styles.secondtopImage}>
        <img src={image5} />
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.imageBox1}>
          <img src={image1} />
        </div>
        <div className={styles.imageBox2}>
          <img src={image2} />
        </div>
        <div className={styles.imageBox3}>
          <img src={image3} />
        </div>
      </div>
    </div>
  );
};

export default ImagesBox;
