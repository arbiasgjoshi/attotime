import React from 'react';
import { container } from './iconCardList.module.scss';
import IconCard from '@components/molecules/iconCard';
import icon from '../../../images/easy-to-use.png';
import icon2 from '../../../images/trustworthy.png';
import icon3 from '../../../images/accurate.png';

const IconCardList = () => {
  return (
    <div className={container}>
      <IconCard
        title={'Easy to use'}
        description={`Start tracking in a tap. Emplyees love using Atto because it's simple, intuitive, and requires no technical knowledge to use.`}
        alt={'Easy to use'}
        icon={icon}
      />
      <IconCard
        title={'Accurate'}
        description={
          'No more end-of-week timesheet guesswork. Time gets tracked in real-time as employees work - with entries precise to the nearest second.'
        }
        alt={'Accurate'}
        icon={icon3}
      />
      <IconCard
        title={'Trustworthy'}
        description={
          'Gain confidence in your time tracking data. TImesheets are verified using location data, so you can trust the validity of every time entry.'
        }
        alt={'Trustworthy'}
        icon={icon2}
      />
    </div>
  );
};

export default IconCardList;
