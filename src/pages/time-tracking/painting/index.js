import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import MainTitleCard from '@components/molecules/main-title-card';

import SubscribeBanner from '@components/molecules/subscribe-banner';
import { container } from '@styles/main.module.scss';
import authorImage from '@images/authorImage.png';

import { FooterLinks } from '@locale/en.js';
import icon1 from '@images/clock-in-out.png';
import icon2 from '@images/write-notes.png';
import icon3 from '@images/track-breaks.png';
import icon4 from '@images/manage-overtime.png';
import icon5 from '@images/switch-between-jobs.png';
import icon6 from '@images/add-time-off.png';

// import localeData from '@locale/en';

const secondList = [
  {
    title: 'Clock in and out',
    description: `Tap the giant pulsating clock in/out button to start tracking time.`,
    alt: 'Easy to use',
    icon: icon1,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Write notes',
    description: `Add notes to your time tracking records, such as a work diary.`,
    alt: 'write notes',
    icon: icon2,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Track Breaks',
    description: `Track breaks and categorize them as either paid or unpaid.`,
    alt: 'track breaks',
    icon: icon3,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Manage overtime',
    description: `Decide if overtime should be tracked, and if so, whether it’s calculated weekly, daily or daily double.`,
    alt: 'Manage overtime',
    icon: icon4,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Switch between jobs',
    description: `Use job codes to categorize time tracked towards specific purposes – for example for each client or type of job.`,
    alt: 'Switch between jobs',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Add time off',
    description: `Add time off such as vacations and sick leave to help managers understand who’s available to work.`,
    alt: 'Time off',
    icon: icon6,
    imageWidth: 350,
    imageHeight: 244,
  },
];

const Painting = () => (
  <div className={`${container}`}>
    <SEO title="Time Tracking Painting" />
    <Header />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
      author="Robert Bennet - DPA Cleaning Services, Inc."
    />
    <Divider />
    <IconCardList cardList={secondList} hasBigImages style="smallerMargin" />
    <Divider />
    <SubscribeBanner
      title="Using paper timesheets is like watching paint dry. Try Atto instead!"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default Painting;
