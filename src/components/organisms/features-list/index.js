import React from 'react';
import FeatureCard from '@components/molecules/feature-card';
import { container, featuresContainer, textWrapper } from './features-list.module.scss';

const FeaturesList = ({ mainTitle, list }) => {
  return (
    <div className={container}>
      {mainTitle && <h1 className={textWrapper}>{mainTitle}</h1>}
      <div className={featuresContainer}>
        {list?.map(({ title, description, alt, logo }, index) => (
          <FeatureCard key={index} title={title} logo={logo} description={description} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
