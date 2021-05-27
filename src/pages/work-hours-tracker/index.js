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
import TickCardList from '@components/organisms/tick-card-list';
import Workhours from '@images/work-hours-image1.svg';
import Workhours2 from '@images/work-hours-image2.svg';

import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';
import ProductOverviewBanner from '@images/product-overview-banner-image.svg';

import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

const checkList = [
  'Mobile, Web, and Kiosk Time Clock',
  'Clock In/Out Reminders',
  'Managed Clock In/Out',
  'Work Activity Notifications',
];

// import localeData from '@locale/en';

const WorkHoursTracker = () => (
  <div className={`${container}`}>
    <SEO title="TimWorkHoursTracker" />
    <Header />
    <IndustryMainCard
      smallTitle="TIME TRACKING APP"
      title="A highly accurate time tracking solution for any company"
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
    <Title
      title="Turn data from the work hours tracker into insightful reports"
      description="Data from the work hours tracker is used to produce timesheet reports. Use them to see how productive your workers are, reduce the time to administer your payroll, and share them with clients you bill hourly."
      maxWidth={920}
      maxDescriptionWidth={800}
    />
    <Divider className="style2" />
    <ProductOverviewBanner />
    <Divider className="style3" />
    <Workhours />
    <Divider />
    <Workhours2 />
    <Divider />
    <SubscribeBanner
      title="#1 Work Hours Tracker. Free for 14 days"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default WorkHoursTracker;
