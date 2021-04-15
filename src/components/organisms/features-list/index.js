import React from 'react';
import FeatureCard from '@components/molecules/feature-card';
import { container, featuresContainer } from './features-list.module.scss';

const FeaturesList = ({ list }) => {
  return (
    <div className={container}>
      <div className={featuresContainer}>
        {list?.map(({ title, description, alt, logo }, index) => (
          <FeatureCard key={index} title={title} logo={logo} description={description} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
