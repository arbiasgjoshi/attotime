import React from 'react';

import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import FeatureCard from '@components/molecules/feature-card';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import Article from '@components/molecules/article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import TickCardList from '@components/organisms/tick-card-list';
import LearnMoreCard from '@components/molecules/learn-more-card';

import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';
import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';

import { container } from '@styles/main.module.scss';
import image1 from '@images/time-clock-mobile@2x.png';
import image2 from '@images/give-managers-power@2x.png';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';

import { workListContainer, learnMoreContainer } from './time-clock.module.scss';

import { FooterLinks } from '@locale/en.js';

const checkList = [
  'Mobile, Web, and Kiosk Time Clock',
  'Clock In/Out Reminders',
  'Managed Clock In/Out',
  'Work Activity Notifications',
  'GPS Stamped Clock In/Out',
  'Manual Time Entries',
];

// import localeData from '@locale/en';

const TimeClock = () => (
  <div className={`${container}`}>
    <SEO title="Time Clock" />
    <Header />
    <IndustryMainCard
      smallTitle="TIME CLOCK"
      title="A simple time clock app for accurate time tracking"
      image={image1}
      description="With Atto’s time clock, you can track time from any device, from absolutely anywhere."
      styling="other"
    />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
    />
    <Divider className="style4" />
    <TickCardList list={checkList} />
    <Divider className="style4" />
    <Title title="Track time from any location, and any device" />
    <div className={workListContainer}>
      <FeatureCard
        isWorkCard
        title="On the Web"
        description="When at the office, track your time using Atto’s web-based time clock."
        logo={<WebTracking />}
        alt="Web time tracking"
        imagePadding=".8rem 2.9rem .797rem .1rem"
      />
      <FeatureCard
        isWorkCard
        title="Via our Mobile App"
        description="Track time on the go with the Atto mobile app available on iOS and Android."
        logo={<MobileTracking />}
        alt="Mobile time tracking"
        imagePadding=".5rem 3.24rem .587rem 0"
      />
      <FeatureCard
        isWorkCard
        title="Via the Time Clock Kiosk"
        description="Set up a time clock kiosk to enable your team to track time from a single device."
        logo={<KioskTracking />}
        alt="Kiosk time tracking"
        imagePadding=".9rem 2.5rem .85rem .4rem"
      />
    </div>
    <Divider className="style2" />
    <Title
      title="An easy way for small businesses to keep track of their employees’s time."
      maxWidth={900}
    />
    <Divider />
    <Article
      title="Add notes, track breaks, assign jobs, and more!"
      description="Get more data on what your employees are up to with Atto’s time clock. Employees can add notes and keep a work diary. Track their breaks and categorize them as paid or unpaid. And, use job codes to categorize time tracked towards specific purposes."
      image={noImage}
    />
    <Divider />
    <Article
      title="Give managers the power to track employee time"
      description="Give managers the power to enforce accurate time-keeping. Using Atto, managers can clock in and out on behalf of employees – perfect for teams that start and finish at similar times. Plus, if a worker forgets their phone or it runs out of battery, managers can add manual time entries that are flagged for review."
      image={image2}
      isSwapped
    />
    <Divider />
    <Article
      title="Ensure employees are ready to work before they clock in"
      description="Increase employee accountability and transparency. Set the location of any job site and restrict workers from clocking in unless their GPS shows they’re within the job site’s perimeter."
      image={noImage}
    />
    <Divider />
    <Article
      title="Get handy notifications of time clock activity"
      description="Real-time notifications help employees keep better track of their time. As soon as an employee enters or leaves a job site, or at their normal start and end time, we’ll send a reminder to clock-in and out. What’s more, with work activity alerts, you’ll be alerted when employees clock in and out every day."
      image={noImage}
      isSwapped
    />
    <Divider />
    <Article
      title="Record time off for complete payroll data"
      description="In addition to work hours, employees can record paid or unpaid time off such as sickness and vacations. This means that you can rely on Atto to provide all the data you need to run your payroll error-free."
      image={noImage}
    />
    <Divider />
    <Article
      title="See what your employees have been up to"
      description="See how productive your employees are. At any time, you can check each employee’s real-time location and status. Additionally, Atto generates a map-based timeline to summarize each worker’s daily movements."
      image={noImage}
      isSwapped
    />
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
      title="Let’s make it a clean sweep! Keep your time tracking tidy with Atto"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default TimeClock;