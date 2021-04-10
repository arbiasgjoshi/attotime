import React from 'react';
import Button from '@components/atoms/button';
import {
  container,
  headerContainer,
  mainTitle,
  smallParagraph,
} from './time-tracking-card.module.scss';

const TimeTrackingCard = () => {
  return (
    <div className={container}>
      <div className={headerContainer}>
        <p className={smallParagraph}>TIME TRACKING</p>
        <h3 className={mainTitle}>Take the pain away from time tracking</h3>
        <h5>An easy-to-use, accurate, and trustworthy time-tracking solution.</h5>
      </div>
      <Button btnText={'Start a Free Trial'} />
    </div>
  );
};

export default TimeTrackingCard;
