import React from 'react';
import PropTypes from 'prop-types';

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
}) => (
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
      <img src={image4} alt="Box Item One" />
      <img src={image5} alt="Box Item Two" />
    </div>
    <div className={styles.imagesContainer}>
      <div className={styles.imageBox1}>
        <img src={image1} alt="Box Item Three" />
      </div>
      <div className={styles.imageBox2}>
        <img src={image2} alt="Box Item Four" width="350" height="445" />
        <img src={image3} alt="Box Item Five" width="314" height="533" />
      </div>
    </div>
  </div>
);

ImagesBox.propTypes = {
  title: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
  styling: PropTypes.string,
};

export default ImagesBox;
