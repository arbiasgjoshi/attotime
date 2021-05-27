import React from 'react';

import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import Article from '@components/molecules/article';

import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';
import image1 from '@images/time-clock-mobile@2x.png';

import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';
import { StaticImage } from 'gatsby-plugin-image';

// import localeData from '@locale/en';

const TimeTrackingApp = () => (
  <div className={`${container}`}>
    <SEO title="Time Clock" />
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
    />
    <Divider />
    <Title
      title="Time tracking for every part of your workers’ day"
      description="Atto is an easy to use time-tracking solution. There’s absolutely no technical knowledge required."
      maxWidth={920}
      maxDescriptionWidth={800}
    />
    <Divider className="style2" />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <StaticImage quality={90} src="../../images/field_workers.svg" alt="Field Workers" />
    <Divider />
    <Title title="Time tracking from any location, and for any type of worker" maxWidth={800} />
    <Divider />
    <Article
      title="Time tracking for mobile workers"
      description="If your employees are on the go, Atto provides everything you need to ensure they’re accurately tracking time. Using GPS technology, you can restrict workers from clocking in until they’re where they should be. Track your employees’ location in real-time. And view map-based timelines of each worker’s daily movements, compiled using their time tracking data."
      image={noImage}
      isSwapped
    />
    <Divider />
    <Article
      title="Time tracking for teams of employees working together"
      description="If your employees work in teams, Atto makes time tracking quicker and easier. Instead of relying on workers to track time individually, you can allow managers to clock in and out for them. Alternatively, you can install a Time Clock Kiosk so that all employees can track time with their own PIN from a single device in a central location."
      image={noImage}
    />
    <Divider />
    <Article
      title="Time tracking for office workers"
      description="If your employees are office-based, they can track time using the web-based time clock on their desktop device. They get access to the same time tracking features as the app, including; clocking in and out, tracking breaks, categorizing jobs, writing notes, adding time off, and more."
      image={noImage}
      isSwapped
    />
    <Divider />
    <Article
      title="Never forget to start tracking time again!"
      description="As soon as an employee enters or leaves a job site, or at their normal start and end time, Atto sends a reminder to clock-in and out. While with work activity alerts, you’ll be alerted when employees start tracking time every day."
      image={noImage}
    />
    <Divider />
    <StaticImage quality={90} src="../../images/time-tracking-app-image2.svg" alt="Field Workers" />
    <Divider />
    <SubscribeBanner
      title="#1 Time Tracker. Free for 14 days"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default TimeTrackingApp;
