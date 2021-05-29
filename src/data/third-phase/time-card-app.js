import React from 'react';
import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';
import CrewTracking from '@images/crew-tracking.svg';

export const checkList = [
  'Mobile, Web, and Kiosk Time Clock',
  'Time Card Reports',
  'Real-Time Wage Estimates',
  'Employee, Team, and Job Category Summaries',
  'Daily Map-Based Timelines',
  'Manual Time Cards',
];

export const commonQuestionsList = [
  {
    title: 'Can I prevent employees from editing their time card entries?',
    description: 'Lorem Ipsum',
  },
  { title: 'Can I setup time card rounding?', description: '' },
  {
    title: 'What happens if an employee forgets to punch out from their time card?',
    description: '',
  },
];

export const featureCardsList = [
  {
    title: 'Time Card App on Mobile',
    description:
      'Download the Atto app on either Android or iOS to track time and update your time card on the go.',
    logo: <MobileTracking />,
  },
  {
    title: 'On the Web',
    description: 'When at the office, update your time card using Atto’s web-based time tracking.',
    logo: <WebTracking />,
  },
  {
    title: 'With Crew Functionality',
    description: 'Entrust managers to update all of the team’s time cards on the their behalf.',
    logo: <CrewTracking />,
  },
  {
    title: 'Via the Time Clock Kiosk',
    description:
      'Set up a time clock kiosk to enable your team to update their time cards from a single device.',
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
  {
    title: 'Get alerted about manual time entries',
    description: `If an employee forgets to clock in/out and adds a manual time card entry, it is flagged for you to review and approve.`,
    alt: 'Easy to use',
  },
];