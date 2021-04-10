import React from 'react';
import Header from '@components/molecules/header';
import Video from '@components/molecules/video';
import TimeTrackingCard from '@components/molecules/time-tracking-card';
import CheckList from '@components/molecules/check-list';
import ImageList from '@components/molecules/image-list';
import ImageSlider from '@components/molecules/image-slider';
import WorkCardList from '@components/organisms/work-card-list';
import IconCardList from '@components/organisms/icon-card-list';
import { container } from './time-tracking.module.scss';

import icon from '../../../images/easy-to-use.png';
import icon2 from '../../../images/accurate.png';
import icon3 from '../../../images/trustworthy.png';

import icon4 from '../../../images/clock-in-out.png';
import icon5 from '../../../images/write-notes.png';
import icon6 from '../../../images/track-breaks.png';
import icon7 from '../../../images/manage-overtime.png';
import icon8 from '../../../images/switch-between-jobs.png';
import icon9 from '../../../images/add-time-off.png';
import OverviewAdmin from '../../../components/organisms/overview-admin';

const TimeTracking = () => {
  const firstList = [
    {
      title: 'Easy to use',
      description: `Start tracking in a tap. Emplyees love using Atto because it's simple, intuitive, and requires no technical knowledge to use.`,
      alt: 'Easy to use',
      icon: icon,
    },
    {
      title: 'Accurate',
      description: `No more end-of-week timesheet guesswork. Time gets tracked in real-time as employees work - with entries precise to the nearest second.`,
      alt: 'Accurate',
      icon: icon2,
    },
    {
      title: 'Trustworthy',
      description: `Gain confidence in your time tracking data. TImesheets are verified using location data, so you can trust the validity of every time entry.`,
      alt: 'Trustworthy',
      icon: icon3,
    },
  ];

  const secondList = [
    {
      title: 'Clock-in and out',
      description: `Tap the giant pulsating clock in/out button to start tracking time.`,
      alt: 'Easy to use',
      icon: icon4,
    },
    {
      title: 'Write notes',
      description: `Add notes to your time tracking records, such as a work diary.`,
      alt: 'write notes',
      icon: icon5,
    },
    {
      title: 'Track Breaks',
      description: `Track breaks and categorize them either paid or unpaid`,
      alt: 'track breaks',
      icon: icon6,
    },
    {
      title: 'Manage overtime',
      description: `Decide if overtime should be tracked, and if so, whether it's calculated daily or weekly.`,
      alt: 'Manage overtime',
      icon: icon7,
    },
    {
      title: 'Switch between jobs',
      description: `Use job codes to categorize time tracked towards specific purposes - for example for each client or type of job.`,
      alt: 'Switch between jobs',
      icon: icon8,
    },
    {
      title: 'Add time off',
      description: `Add time off such as vacations and sick leave to help managers understand who's available to work.`,
      alt: 'Time off',
      icon: icon9,
    },
  ];

  const titleList = [
    'Keep track of time wherever your employees are',
    'Reduce payroll costs and increase productivity',
    'Track hours, breaks, time-off, and more',
    'Increase the accuracy of job estimates',
  ];

  return (
    <div className={container}>
      <Header />
      <TimeTrackingCard
        hasParagraph
        showButton
        paragraph={'Time Tracking'}
        title={'Take the pain away from time tracking'}
        subtitle={'An easy-to-use, accurate, and trustworthy time-tracking solution.'}
      />
      <Video />
      <CheckList titleList={titleList} />
      <ImageList />
      <IconCardList cardList={firstList} />
      <TimeTrackingCard
        title={'Start tracking time in a tap'}
        subtitle={
          'Say goodbye to employee estimates. Use the time clock to precisely capture work activity.'
        }
      />
      <IconCardList cardList={secondList} />
      <TimeTrackingCard
        title={'Accurately track time from any location and any device'}
        subtitle={`Time-tracking options to suit your business' needs. In the office, in teams, at a job site, or on the move. Online or offline.`}
      />
      <ImageSlider />
      <WorkCardList />
      <OverviewAdmin />
    </div>
  );
};

export default TimeTracking;
