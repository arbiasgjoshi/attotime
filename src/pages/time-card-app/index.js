import React from 'react';

import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import LearnMoreCard from '@components/molecules/learn-more-card';
import TickCardList from '@components/organisms/tick-card-list';
import Article from '@components/molecules/article';
import ProductOverviewBanner from '@images/product-overview-banner-image.svg';
import TimeTrackingIndustry from '@images/time-tracking-industrySVG.svg';
import TimeTracking from '@images/time-tracking-field-workers.svg';
import AnyDevice from '@components/organisms/any-device';

import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';
import image1 from '@images/time-clock-mobile@2x.png';
import image2 from '@images/time-tracking-any-device.png';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';
import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';
import CrewTracking from '@images/crew-tracking.svg';

import { container } from '@styles/main.module.scss';

import { learnMoreContainer } from './time-card-app.module.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

// import localeData from '@locale/en';

const checkList = [
  'Mobile, Web, and Kiosk Time Clock',
  'Clock In/Out Reminders',
  'Managed Clock In/Out',
  'Work Activity Notifications',
  'GPS Stamped Clock In/Out',
  'Manual Time Entries',
];

const featureCardsList = [
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

const TimeCardApp = () => (
  <div className={`${container}`}>
    <SEO title="Time Clock" />
    <Header />
    <IndustryMainCard
      smallTitle="TIME CARD APP"
      title="Track your employees hours with our simple time card app"
      image={image1}
      styling="other"
      description="Clock in and out, track time on the job, and turn employee time card data into insightful reports."
    />
    <Divider className="style4" />
    <TickCardList list={checkList} />
    <Divider className="style4" />
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
      title="Get insights into your employees work with automated time card reports"
      description="Your employees’ time card information is automatically turned into real-time reports. Use it to see how your team is spending their time on the clock and reduce the time to administer payroll."
      maxWidth={920}
      maxDescriptionWidth={800}
    />
    <Divider className="style3" />
    <ProductOverviewBanner />
    <Article
      title="Get wage estimates from your employees’ time cards"
      description="Keep your company’s finances on track. After adding your employees’ pay rates, Atto automatically estimates your wage bill based on the hours on their time cards. What’s more, you can add more than one pay rate per employee so that your estimates remain accurate even if their rate changes."
      image={noImage}
    />
    <Divider />
    <Article
      title="See time card summaries per employee, team, or job code"
      description="Get insights into how productive each part of your business is. In a few taps, Atto produces time card summaries to show all the work done by each employee, team, or towards a specific category of job."
      image={noImage}
      isSwapped
    />
    <Divider />
    <Article
      title="View time card data as a daily map-based timeline"
      description="If your employees work in the field, it can be useful to see how long they spend at each job, and the routes they take throughout their day. Atto uses GPS tracking in conjunction with data from your employees’ time cards to produce visual timelines of their daily movements."
      image={noImage}
    />
    <Divider />
    <TimeTrackingIndustry />
    <Divider />
    <TimeTracking />
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
    <Divider />
    <SubscribeBanner
      title="#1 Time Card App. Free for 14 days"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default TimeCardApp;
