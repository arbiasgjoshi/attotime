import React from 'react';

import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Button from '@components/atoms/button';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import IndustryMainCard from '@components/organisms/industry-main-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import TickCardList from '@components/organisms/tick-card-list';
import AnyDevice from '@components/organisms/any-device';

import Workhours from '@images/work-hours-image1.svg';
import Workhours2 from '@images/work-hours-image2.svg';
import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';
import image2 from '@images/time-tracking-any-device.png';
import ProductOverviewBanner from '@images/product-overview-banner-image.svg';
import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';
import CrewTracking from '@images/crew-tracking.svg';
import CommonQuestions from '@components/organisms/common-questions';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';

import { container } from '@styles/main.module.scss';
import { buttonContainer, learnMoreContainer } from './work-hours-tracker.module.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

const checkList = [
  'Mobile, Web, Crew, and Kiosk Work Hours Trackers',
  'Real-time GPS Location Tracking',
  'Wage Estimates',
  'Automated Timesheet Reports',
];

const commonQuestionsList = [
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

const featureCardsList = [
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

const cardList = [
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

// import localeData from '@locale/en';

const WorkHoursTracker = () => (
  <div className={`${container}`}>
    <SEO title="Work Hours Tracker" />
    <Header />
    <IndustryMainCard
      smallTitle="WORK HOURS TRACKER"
      title="Keep track of your employees with our work hours tracker"
      description="With time tracking, location tracking, wage estimates, and instantly available timesheet reports."
      image={noImage}
      styling="other"
    />
    <Divider className="style3" />
    <TickCardList list={checkList} />
    <Divider />
    <Title
      title="Track your work hours, breaks, time off, overtime, and more!"
      description="Whether your employees are working or enjoying some well-earned rest, you’ll always be aware of their work status."
      maxWidth={920}
      maxDescriptionWidth={800}
    />
    <Divider className="style3" />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
    />
    <Divider />
    <AnyDevice
      title="Time tracking from any device – offline, online, or on the go"
      description="Whether you’re in the office or on the move, Atto has a time tracking solution for your needs."
      image={image2}
      list={featureCardsList}
      styling="moreCards"
    />
    <Divider />
    <Title
      title="Turn data from the work hours tracker into insightful reports"
      description="Data from the work hours tracker is used to produce timesheet reports. Use them to see how productive your workers are, reduce the time to administer your payroll, and share them with clients you bill hourly."
      maxWidth={920}
      maxDescriptionWidth={800}
    />
    <Divider className="style2" />
    <ProductOverviewBanner />
    <Divider className="style2" />
    <IconCardList cardList={cardList} style="twoCards" />
    <Divider className="style4" />
    <div className={buttonContainer}>
      <Button btnText="Find out more" />
    </div>
    <Divider className="style3" />
    <Workhours />
    <Divider />
    <CommonQuestions isSwapped list={commonQuestionsList} />
    <Divider />
    <Workhours2 />
    <Divider />
    <Title title="It doesn't end here!" description="Learn more about what Atto can do for you" />
    <div className={learnMoreContainer}>
      <LearnMoreCard
        title="GPS Location Tracking"
        description="Increase the safety and accountability of your team with real-time updates on their location."
        icon={icon32}
        path="/product/gps-location-tracking"
        imageWidth={27}
        imageHeight={32}
        styling="smaller"
      />
      <LearnMoreCard
        title="Team Activity"
        description="Stay in the loop with what's happening - without needing to pick up the phone"
        icon={icon33}
        path="/product/team-activity"
        imageWidth={42}
        imageHeight={44}
        styling="smaller"
      />
      <LearnMoreCard
        title="Timesheets"
        description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
        icon={icon34}
        path="/product/timesheets"
        imageWidth={30}
        imageHeight={33}
        styling="smaller"
      />
      <LearnMoreCard
        title="Timesheets"
        description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
        icon={icon34}
        path="/product/timesheets"
        imageWidth={30}
        imageHeight={33}
        styling="smaller"
      />
    </div>
    <Divider className="style4" />
    <SubscribeBanner
      title="#1 Work Hours Tracker. Free for 14 days"
      subtitle="Keep track of your employees’ time, real-time location, and estimated wages"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default WorkHoursTracker;
