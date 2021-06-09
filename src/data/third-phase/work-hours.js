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
    description:
      'Atto can help businesses of any size keep track of time, from individual tradesmen and solo-freelancers, all the way to large enterprises.',
  },
  {
    title: 'How do I use the work hours tracker?',
    description: `Time tracking is available via the Atto mobile app, via the web, or via the time clock kiosk. To start tracking your work hours on the app: 1. Open the Atto app. 2. Go to Time Clock. 3. Tap on the green "Clock In" button. 4. Your status will change to "On the Clock" and the timer will start running. 5. When you've finished working, tap on the red "Clock Out" button. While on the clock, you can select job codes, take breaks and add notes to your time entry.`,
  },
  {
    title: 'Can I use the work hours tracker while offline?',
    description: `Yes. You can track time with Atto's work hours tracker even if you don't have an active internet connection. When you're offline, a red banner that says "No Internet Connection" will appear at the top of your device's screen. While offline, you can clock in & out, add/change jobs, start a break, and add notes. Once your device reconnects to the internet, all account activity while offline will be synchronized online.`,
  },
  {
    title: 'What if my employees forget to clock in/out of the work hours tracker?',
    description:
      'As soon as an employee enters or leaves a job site, or at their normal start and end time, Atto can send a reminder to clock-in and out. If employees forget to track their time, they can add manual time card entries, which are flagged for review.',
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

export const verticalList = [
  {
    title: 'Job Codes',
    description:
      'Employees use job codes to track time towards specific purposes, such as for each client or type of job – making it much easier to see how productive they are.',
  },
  {
    title: 'Locations',
    description:
      'Track the real-time location of your employees, prevent them from clocking in unless they’re at a job site, and verify that the hours they’re logging are actually being worked.',
  },
  {
    title: 'Wages',
    description:
      'Input your employees’ pay rates into Atto, and get real-time estimates of your upcoming payroll based on the hours being tracked.',
  },
];
