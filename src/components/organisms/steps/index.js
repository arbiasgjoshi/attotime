import React from 'react';

import Divider from '@components/atoms/divider';
import Button from '@components/atoms/button';
import StepCard from '@components/molecules/step-card';

import { container, listContainer } from './steps.module.scss';

import noImage from '@images/no-image.png';

const Steps = ({ list }) => (
  <div className={container}>
    <div className={listContainer}>
      {list?.map(({ image, title, description }) => (
        <StepCard image={noImage} title={title} description={description} />
      ))}
    </div>
    <Divider className="style3" />
    <Button btnStyle="teal" btnText="Get started now" />
  </div>
);

export default Steps;