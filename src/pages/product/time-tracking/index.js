import React from 'react';
import Header from '@components/molecules/header';
import Video from '@components/molecules/video';
import TimeTrackingCard from '../../../components/molecules/time-tracking-card';
import CheckList from '../../../components/molecules/checklist';
import { container } from './time-tracking.module.scss';

const TimeTracking = () => {
  return (
    <div className={container}>
      <Header />
      <TimeTrackingCard />
      <Video />
      <CheckList />
    </div>
  );
};

export default TimeTracking;
