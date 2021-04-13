import React from 'react';
import Header from '@components/molecules/header';
import Video from '@components/molecules/video';
import TimeTrackingCard from '@components/molecules/time-tracking-card';
import CheckList from '@components/molecules/check-list';
import ImageList from '@components/molecules/image-list';
import ImageSlider from '@components/molecules/image-slider';
import WorkList from '@components/organisms/work-list';
import IconCardList from '@components/organisms/icon-card-list';
import OverviewAdmin from '@components/organisms/overview-admin';
import FeaturesList from '@components/organisms/features-list';
import GrowthNumbers from '@components/organisms/growth-numbers';
import CommonProblems from '@components/organisms/common-problems';
import Services from '@components/organisms/services';
import Story from '@components/organisms/story';

import { container } from './time-tracking.module.scss';
import authorImage from '../../../images/authorImage.png';

import icon from '../../../images/easy-to-use.png';
import icon2 from '../../../images/accurate.png';
import icon3 from '../../../images/trustworthy.png';

import icon4 from '../../../images/clock-in-out.png';
import icon5 from '../../../images/write-notes.png';
import icon6 from '../../../images/track-breaks.png';
import icon7 from '../../../images/manage-overtime.png';
import icon8 from '../../../images/switch-between-jobs.png';
import icon9 from '../../../images/add-time-off.png';

import icon10 from '../../../images/timer.png';
import icon11 from '../../../images/flag.png';
import icon12 from '../../../images/ringbell.png';
import icon13 from '../../../images/m-logo.png';
import icon14 from '../../../images/brightness.png';
import icon15 from '../../../images/notes.png';
import icon16 from '../../../images/overtime.png';
import icon17 from '../../../images/coffe.png';
import icon18 from '../../../images/bookmark.png';
import icon19 from '../../../images/clock.png';
import icon20 from '../../../images/browser.png';
import icon21 from '../../../images/darkMode.png';

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
    { title: 'Keep track of time wherever your employees are' },
    { title: 'Reduce payroll costs and increase productivity' },
    { title: 'Track hours, breaks, time-off, and more' },
    { title: 'Increase the accuracy of job estimates' },
  ];

  const featureList = [
    {
      title: 'Managed Clock-in / Out',
      description:
        'Empower managers to clock-in and out on behalf of their team, instead of tracking time individually.',
      logo: icon10,
      alt: 'Clock in logo',
    },
    {
      title: 'Geofencing',
      description: `Restrict employees from clocking-in until they've arrived at a job site`,
      logo: icon11,
      alt: 'Geofencing Flag',
    },
    {
      title: 'Smart Reminders',
      description: `Remind employees to clock-in and out at their start and end time or when they're at a job site`,
      logo: icon12,
      alt: 'Ringbell reminder logo',
    },
    {
      title: 'Manual Time Entries',
      description: `Allow admins, managers, or employees the ability to add manual time entries to their timesheets.`,
      logo: icon13,
      alt: '',
    },
    {
      title: 'Time Off',
      description: `Add and categorize time off entries, specifying whether time off is paid or unpaid`,
      logo: icon14,
      alt: '',
    },
    {
      title: 'Notes',
      description: `Add notes to provide context to time entries, such as a work diary or job information`,
      logo: icon15,
      alt: '',
    },
    {
      title: 'Overtime Rules',
      description: `Set regular employee working hours per day/week and assign any extra hours to count as overtime.`,
      logo: icon16,
      alt: '',
    },
    {
      title: 'Break Preferences',
      description: `Decide if breaks are paid or unpaid, the amount of time to be deducted, and categorize them.`,
      logo: icon17,
      alt: '',
    },
    {
      title: 'Job Codes',
      description: `Categorize time tracked towards specific purposes such as per client, project, or type of work.`,
      logo: icon18,
      alt: '',
    },
    {
      title: 'Rounded Clock-in / Out Times',
      description: `Set clock-in and out times to be automatically rounded to an increment of your choice.`,
      logo: icon19,
      alt: '',
    },
    {
      title: 'Fixed Time Zones',
      description: `Automatically adjust your team's hours to a set time zone, regardless of their device's time zone.`,
      logo: icon20,
      alt: '',
    },
    {
      title: 'Split Night-Shift Time Entries',
      description: `Split time entries at midnight, with hours tracked after midnight counting for the following day.`,
      logo: icon21,
      alt: '',
    },
  ];

  const serviceList = [
    { title: 'Construction' },
    { title: 'Painting' },
    { title: 'Roofing' },
    { title: 'Cleaning' },
    { title: 'Electric' },
    { title: 'Plumbing' },
    { title: 'Landscaping' },
    { title: 'Healthcare' },
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
      <WorkList />
      <OverviewAdmin />
      <FeaturesList
        mainTitle={'Our full suite of time tracking features at a glance'}
        list={featureList}
      />
      <GrowthNumbers />
      <CommonProblems />
      <Services title="Time Tracking solution for any industry" list={serviceList} />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
    </div>
  );
};

export default TimeTracking;
