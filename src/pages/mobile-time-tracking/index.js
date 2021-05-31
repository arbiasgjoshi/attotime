import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Article from '@components/molecules/article';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Story from '@components/organisms/story';
import IndustryMainCard from '@components/organisms/industry-main-card';
import IconCardList from '@components/organisms/icon-card-list';
import CommonQuestions from '@components/organisms/common-questions';
import AnyDevice from '@components/organisms/any-device';
import Services from '@components/organisms/services';
import { StaticImage } from 'gatsby-plugin-image';

import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';
import image1 from '@images/time-clock-mobile@2x.png';
import image2 from '@images/time-tracking-any-device.png';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';
import icon35 from '@images/time-tracking-clock@1x.png';

import { FooterLinks } from '@locale/en.js';

import { container } from '@styles/main.module.scss';
import {
  featureCardsList,
  commonQuestionsList,
  firstList,
  serviceList,
} from '../../data/third-phase/time-tracking-app';
import { learnMoreContainer } from './mobile-time-tracking.module.scss';

// import localeData from '@locale/en';

const TimeTrackingApp = () => (
  <div className={`${container}`}>
    <SEO title="Time Tracking App" />
    <Header />
    <IndustryMainCard
      smallTitle="TIME TRACKING APP"
      title="A highly accurate time tracking solution for any company"
      description="Clock in and out, keep notes, track breaks, assign job codes, add time off, and more!"
      image={image1}
      styling="other"
    />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
      author="Robert Bennett - DPA Cleaning Services, Inc."
    />
    <Divider />
    <Title
      title="Time tracking for every part of your workers’ day"
      description="Atto is an easy to use time-tracking solution. There’s absolutely no technical knowledge required."
      maxWidth={920}
      maxDescriptionWidth={800}
      bodyStyle="secondBodyStyle"
    />
    <Divider className="style2" />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <Title title="A time tracking app for any industry" maxWidth={500} />
    <Divider className="style2" />
    <Services list={serviceList} />
    <Divider />
    <StaticImage quality={95} src="../../images/time-tracking-banner@2x.png" alt="Field Workers" />
    <Divider />
    <AnyDevice
      title="Time tracking from any device – offline, online, or on the go"
      description="Whether you’re in the office or on the move, Atto has a time tracking solution for your needs."
      image={image2}
      list={featureCardsList}
    />
    <Divider />
    <Title title="Time tracking from any location, and for any type of worker" maxWidth={800} />
    <Divider className="style3" />
    <Article
      title="Time tracking for mobile workers"
      description="If your employees are on the go, Atto provides everything you need to ensure they’re accurately tracking time. Using GPS technology, you can restrict workers from clocking in until they’re where they should be. Track your employees’ location in real-time. And view map-based timelines of each worker’s daily movements, compiled using their time tracking data."
      image={noImage}
      isSwapped
      imageHeight="380"
      imagePadding="6rem 1rem 6rem 4rem"
    />
    <Divider className="style3" />
    <Article
      title="Time tracking for teams of employees working together"
      description="If your employees work in teams, Atto makes time tracking quicker and easier. Instead of relying on workers to track time individually, you can allow managers to clock in and out for them. Alternatively, you can install a Time Clock Kiosk so that all employees can track time with their own PIN from a single device in a central location."
      image={noImage}
    />
    <Divider className="style3" />
    <Article
      title="Time tracking for office workers"
      description="If your employees are office-based, they can track time using the web-based time clock on their desktop device. They get access to the same time tracking features as the app, including; clocking in and out, tracking breaks, categorizing jobs, writing notes, adding time off, and more."
      image={noImage}
      isSwapped
    />
    <Divider className="style3" />
    <Article
      title="Never forget to start tracking time again!"
      description="As soon as an employee enters or leaves a job site, or at their normal start and end time, Atto sends a reminder to clock-in and out. While with work activity alerts, you’ll be alerted when employees start tracking time every day."
      image={noImage}
    />
    <Divider />
    <StaticImage
      quality={90}
      src="../../images/time-tracking-banner-image-two@2x.png"
      alt="time-tracking-for-any-industry"
    />
    <Divider />
    <CommonQuestions list={commonQuestionsList} />
    <Divider />
    <Title title="It doesn't end here!" description="Learn more about what Atto can do for you" />
    <div className={learnMoreContainer}>
      <LearnMoreCard
        title="Time Tracking"
        description="With Atto’s time clock, you can track time from any device, from absolutely anywhere."
        icon={icon35}
        path="/product/time-tracking"
        imageWidth={30}
        imageHeight={33}
        styling="smaller"
      />
      <LearnMoreCard
        title="GPS Location Tracking"
        description="Get real-time updates on your team’s location. Ensure everyone is safe and productive."
        icon={icon32}
        path="/product/gps-location-tracking"
        imageWidth={27}
        imageHeight={32}
        styling="smaller"
      />

      <LearnMoreCard
        title="Team Activity"
        description="Find out instantly who’s on the clock, on break, or enjoying some time off."
        icon={icon33}
        path="/product/team-activity"
        imageWidth={42}
        imageHeight={44}
        styling="smaller"
      />
      <LearnMoreCard
        title="Timesheets"
        description="Turn your time tracking data into timesheets, with regular time, overtime, and time off."
        icon={icon34}
        path="/product/timesheets"
        imageWidth={30}
        imageHeight={33}
        styling="smaller"
      />
    </div>
    <Divider />
    <SubscribeBanner
      title="#1 Time Tracker. Free for 14 days"
      subtitle="Clock in & out, write notes, track breaks, assign job codes, and more!"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
      formPadding="10.4rem 8rem"
      style="pricing"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default TimeTrackingApp;