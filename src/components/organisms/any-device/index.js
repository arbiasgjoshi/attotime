import React from 'react';

import FeatureCard from '@components/molecules/feature-card';

import * as styles from './any-device.module.scss';

const AnyDevice = ({ title, description, image, bigDescStyle = false, list, styling }) => (
  <div className={`${styles.container} ${styling && styles[styling]}`}>
    <div className={styles.firstRow}>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <p className={bigDescStyle && styles.bigStyle}>{description}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
    </div>
    <div className={styles.secondRow}>
      {list.map(({ title, description, logo, comingSoon = false }, idx) => (
        <FeatureCard
          logo={logo}
          isWorkCard
          higherMargin
          title={title}
          comingSoon={comingSoon}
          description={description}
          key={idx}
        />
      ))}
    </div>
  </div>
);

export default AnyDevice;
