import React from 'react';
import Header from '@components/molecules/header';
import Video from '@components/molecules/video';
import TimeTrackingCard from '@components/molecules/time-tracking-card';
import CheckList from '@components/molecules/checklist';
import ImageList from '@components/molecules/imageList';
import IconCard from '@components/molecules/iconCard';
import { container } from './time-tracking.module.scss';
import icon from '../../../images/easy-to-use.png';

const TimeTracking = () => {
  return (
    <div className={container}>
      <Header />
      <TimeTrackingCard />
      <Video />
      <CheckList />
      <ImageList />
      <div>
        {/* <IconCard
          title={'Accurate'}
          description={
            'No more end-of-week timesheet guesswork. Time gets tracked in real-time as employees work - with entries precise to the nearest second.'
          }
          alt={'Accurate'}
          icon={'../../../images/accurate.svg'}
        /> */}
        <IconCard
          title={'Easy to use'}
          description={`Start tracking in a tap. Emplyees love using Atto because it's simple, intuitive, and requires no technical knowledge to use.`}
          alt={'Easy to use'}
          icon={icon}
        />
        {/* <IconCard
          title={'Trustworthy'}
          description={
            'Gain confidence in your time tracking data. TImesheets are verified using location data, so you can trust the validity of every time entry.'
          }
          alt={'Trustworthy'}
          icon={'../../../images/trusworthy.svg'}
        /> */}
      </div>
    </div>
  );
};

export default TimeTracking;
