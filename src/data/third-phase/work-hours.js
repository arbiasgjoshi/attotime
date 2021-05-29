import React from 'react';
import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';
import CrewTracking from '@images/crew-tracking.svg';

export const checkList = [
  'Mobile, Web, Crew, and Kiosk Work Hours Trackers',
  'Real-time GPS Location Tracking',
  'Wage Estimates',
  'Automated Timesheet Reports',
];

export const commonQuestionsList = [
  {
    title: 'Who is the Atto work hours tracker built for?',
    description: 'Lorem Ipsum',
  },
  { title: 'How do I use the work hours tracker?', description: '' },
  {
    title: 'Can I use the work hours tracker while offline?',
    description: '',
  },
  {
    title: 'What if my employees forget to clock in/out of the work hours tracker?',
    description: '',
  },
];

export const featureCardsList = [
  {
    title: 'Time Card App on Mobile',
    description: 'Track time on the go with the Atto mobile app available on iOS and Android.',
    logo: <MobileTracking />,
  },
  {
    title: 'On the Web',
    description: 'When at the office, track your time using Atto’s web-based time clock.',
    logo: <WebTracking />,
  },
  {
    title: 'With Crew Functionality',
    description: 'Entrust managers to clock in and out on all of the team’s behalf.',
    logo: <CrewTracking />,
  },
  {
    title: 'Via the Time Clock Kiosk',
    description:
      'Set up a time clock kiosk to enable your team to track time from a single device.',
    logo: <KioskTracking />,
  },
];

export const cardList = [
  {
    title: 'See a summary of every hour on the clock',
    description: `Atto’s real-time reports include every aspect of time on the job, including; regular time, overtime, time off, break time, and more.`,
    alt: 'Easy to use',
    // icon: icon1,
  },
  {
    title: 'Email a report to coincide with payroll',
    description: `Atto automatically emails you your employees’ time card report based on your payroll period. Alternatively, you can download reports as PDF/CSV files.`,
    alt: 'Easy to use',
  },
];
