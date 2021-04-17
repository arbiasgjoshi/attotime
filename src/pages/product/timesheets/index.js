import React from 'react';
import { container, roundImagesContainer, learnMoreContainer } from './timesheets.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { FooterLinks } from '@locale/en.js';

import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import MainTitleCard from '@components/molecules/main-title-card';
import IconCard from '@components/molecules/icon-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Video from '@components/molecules/video';
import Title from '@components/molecules/title';
import CheckList from '@components/molecules/check-list';
import FeaturesList from '@components/organisms/features-list';
import CheckListArticle from '@components/organisms/check-list-article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import GrowthNumbers from '@components/organisms/growth-numbers';
import Story from '@components/organisms/story';

import photo1 from '../../../images/boost_productivity.png';
import authorImage from '@images/authorImage.png';
import noImage from '@images/no-image.png';
import roundImage2 from '@images/syncWithPayroll2x.png';
import roundImage3 from '@images/timesheets-inbox2x.png';

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

  const checkLists3 = [
    { title: "Gain a better understanding of your employees' workdays" },
    { title: 'See how long employees spend on breaks, jobs, and on the clock.' },
    { title: 'Review timesheets quicker for faster approval and payroll' },
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
        description="Your employees' hours are instantly transformed into timesheet reports. View every hour worked from regular time to overtime. Create reports based on specific employees, teams, or job codes. And download and share them in a few clicks."
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
        image={photo1}
      />
      <Divider />
      <CheckListArticle
        title="Gain a clear understanding of your employyes' activity"
        description="Atto uses employee' timesheet data to generate clear, simple timelines of everyone's daily activity. Now it's much easier to understand their working patterns, and far quicker to review timesheets."
        list={checkLists3}
        image={photo1}
        isSwapped
      />
      <Divider />
      <Title title="Our full suite of timesheet features at a glance" />
      <FeaturesList list={featureList} />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Title
        title="Streamline the entrie payroll process"
        description="Go from timesheets to payroll in no time at all. With Atto, you'll enjoy a streamlined payroll process that will save hours of admin every payday."
      />
      <div className={roundImagesContainer}>
        <IconCard
          isRound
          icon={noImage}
          alt="Estimate emp"
          title="Estimate your Employees' Wages"
          description={`Avoid unexpected wage bills. Assign pay rates to your employees and their estimated pay will be added to their timesheets.`}
        />
        <IconCard
          isRound
          icon={roundImage2}
          alt="Sync"
          title="Sync with Payroll and Accounting Software"
          description="Integrate with Xero and QuickBooks Online to automatically sync timesheet data to your favorite payroll software."
        />
        <IconCard
          isRound
          icon={roundImage3}
          alt="Timesheets on-time"
          title={`Timesheets on-time and in your Inbox`}
          description={`Schedule your employees' timesheets to be automatically emailed to you in line with your payroll schedule.`}
        />
      </div>
      <Divider />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
      <Divider />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title="GPS Location Tracking"
          description="Increase the safety and accountability of your team with real-time updates on their location."
        />
        <LearnMoreCard
          title="Team Activity"
          description="Stay in the loop with what's happening - without needing to pick up the phone"
        />
        <LearnMoreCard
          title="Timesheets"
          description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
        />
      </div>
      <Divider className="smallest" />
      <SubscribeBanner
        title="Sit back and relax with timesheets on-time, every time"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  );
};

export default Timesheets;
