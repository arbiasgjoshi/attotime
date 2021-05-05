import React from 'react';

import PropTypes from 'prop-types';

import FeatureCard from '@components/molecules/feature-card';
import { container, featuresContainer } from './features-list.module.scss';

const FeaturesList = ({ list, isLeftAligned }) => (
  <div className={container}>
    <div className={featuresContainer}>
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

FeaturesList.propTypes = {
  list: PropTypes.shape(),
  isLeftAligned: PropTypes.bool,
};

export default FeaturesList;
