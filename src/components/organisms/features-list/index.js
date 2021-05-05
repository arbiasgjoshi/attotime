import React from 'react';
import FeatureCard from '@components/molecules/feature-card';
import * as styles from './features-list.module.scss';

const FeaturesList = ({ list, isLeftAligned, style = '' }) => (
  <div className={styles.container}>
    <div className={`${styles.featuresContainer} ${styles[style]}`}>
      {list?.map(({ title, description, alt, logo }, index) => (
        <FeatureCard
          isLeftAligned={isLeftAligned}
          key={index}
          title={title}
          logo={logo}
          description={description}
          alt={alt}
        />
      ))}
    </div>
  </div>
);

export default FeaturesList;
