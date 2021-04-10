import React from 'react';
import Button from '@components/atoms/button';
import {
  container,
  headerContainer,
  mainTitle,
  smallParagraph,
} from './time-tracking-card.module.scss';

const TimeTrackingCard = ({
  title,
  subtitle,
  paragraph,
  hasParagraph = false,
  showButton = false,
}) => {
  return (
    <div className={container}>
      <div className={headerContainer}>
        {hasParagraph && <p className={smallParagraph}>{paragraph}</p>}
        <h3 className={mainTitle}>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      {showButton && <Button btnText={'Start a Free Trial'} />}
    </div>
  );
};

export default TimeTrackingCard;
