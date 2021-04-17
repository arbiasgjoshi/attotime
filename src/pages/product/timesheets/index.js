import React from 'react';
import { container } from './timesheets.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';

import Header from '@components/molecules/header';
import MainTitleCard from '@components/molecules/main-title-card';
import Video from '@components/molecules/video';
import Title from '@components/molecules/title';
import CheckList from '@components/molecules/check-list';
import FeaturesList from '@components/organisms/features-list';
import CheckListArticle from '@components/organisms/check-list-article';
import IconCardList from '@components/organisms/icon-card-list';

import boostPhoto from '../../../images/boost_productivity.png';

import icon from '@images/accurate.png';
import icon2 from '@images/trustworthy.png';
import icon3 from '@images/easy-to-use.png';
import icon4 from '@images/timer.png';
import icon5 from '@images/flag.png';
import icon6 from '@images/ringbell.png';
import icon7 from '@images/battery.png';
import icon8 from '@images/brightness.png';
import icon9 from '@images/m-logo.png';
import icon10 from '@images/coffe.png';
import icon11 from '@images/bookmark.png';

const Timesheets = () => {
  const checkLists = [
    { title: 'View precise, instantly-generated, and verified timesheets' },
    { title: 'Save countless hours a week from your payroll process' },
    { title: 'Analyze every hour spent on the job' },
    { title: 'See how productive your employees are' },
  ];

  const checkLists2 = [
    { title: 'Compare how long tasks take different employees or teams' },
    { title: 'Spot employees that are struggling at work' },
    { title: 'Identify bottlenecks that are slowing progress' },
    { title: 'See if jobs are running on-time and on-budget' },
  ];

  const firstList = [
    {
      title: 'Highly Accurate',
      description: `Eliminate employee guesswork, time wastage, and additional payroll costs. With accurate timesheets, you only pay for hours spent on the job.`,
      alt: 'Highly Accurate',
      icon,
    },
    {
      title: 'Verified and Trustworthy',
      description: `Gain trust and confidence in your time tracking data. Timesheets are verified using location data, increasing employee accountability and transparency.`,
      alt: 'Verified and trustworthy',
      icon: icon2,
    },
    {
      title: 'Instantly Available',
      description: `No longer wait until the end of the week to see hours worked. TImesheets are instantly generated so you can view them anytime.`,
      alt: 'Instantly Available',
      icon: icon3,
    },
  ];

  const featureList = [
    {
      title: 'Comprehensive Timesheet Reports',
      description: `Get all the data you need including regular time, overtime, breaks, time off, and more.`,
      logo: icon4,
      alt: 'Employee status logo',
    },
    {
      title: 'Scheduled Email Reports',
      description: `Schedule an email with your employees timesheets to coincide with your payroll schedule.`,
      logo: icon5,
      alt: 'Geofencing Flag',
    },
    {
      title: 'Timesheets by Employee , Team, Jobs',
      description: `Generate timesheets based on work done by an employee, team, or toward a category of job.`,
      logo: icon6,
      alt: 'Ringbell reminder logo',
    },
    {
      title: 'Wage Estimates And Pay Rates',
      description: `Assign pay rates to your employees and their estimated pay will be added to their timesheets.`,
      logo: icon7,
      alt: 'Wage estimates',
    },
    {
      title: 'Download and Share',
      description: `Download any timesheet report as a PDF or CSV file in one click.`,
      logo: icon8,
      alt: '',
    },
    {
      title: 'TImesheet Rounding',
      description: `Set a rounding increment and clock in/out times are rounded automatically.`,
      logo: icon5,
      alt: '',
    },
    {
      title: 'Time Entry Change History',
      description: `View any historic changes made to time entries by an employee or admin.`,
      logo: icon9,
      alt: '',
    },
    {
      title: 'Archive Employees',
      description: `View timesheets for employees even after they've left the company - vital for compliance purposes.`,
      logo: icon10,
      alt: '',
    },
    {
      title: 'Payroll Integrations',
      description: `Streamline your payroll with our QuickBooks Online and Xero integrations.`,
      logo: icon11,
      alt: '',
    },
  ];

  return (
    <div className={container}>
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph="Timesheets"
        title="Timesheet reports without the hassle"
        subtitle="Spend more time on the things that matter with timesheets filled painlessly and on-time."
      />
      <Video />
      <CheckList list={checkLists} />
      <Divider />
      <Title
        title="Ready-made professional timesheets"
        description="Say goodbye to employee estimates. Use the time clock to precisely capture work activity."
      />
      <div>
        <StaticImage alt="Clock In" quality={90} src="../../../images/ready-made.svg" />
      </div>
      <Divider className="smallest" />
      <IconCardList cardList={firstList} />
      <Divider />
      <CheckListArticle
        title="Boost productivity with timesheet insights"
        description="Work smarter, not longer. Use timesheet reports to filter all the work done by each employee, team, or towards specific category of job."
        list={checkLists2}
        image={boostPhoto}
      />
      <Divider />
      {/* Here come 2 another small checklist with an image, until I find a solution I'm going to let this here  */}
      <Title title="Our full suite of timesheet features at a glance" />
      <FeaturesList list={featureList} />
      <Divider />
    </div>
  );
};

export default Timesheets;
