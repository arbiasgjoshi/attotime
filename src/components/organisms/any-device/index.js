import React from 'react';

import FeatureCard from '@components/molecules/feature-card';

import {
  container,
  firstRow,
  textContainer,
  imageContainer,
  secondRow,
} from './any-device.module.scss';

const AnyDevice = ({ title, description, image, list }) => {
  return (
    <div className={container}>
      <div className={firstRow}>
        <div className={textContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={imageContainer}>
          <img src={image} />
        </div>
      </div>
      <div className={secondRow}>
        {list.map(({ title, description, logo }) => (
          <FeatureCard logo={logo} isWorkCard title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default AnyDevice;
