import React from 'react';

import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCard from '@components/molecules/icon-card';
import IconCardList from '@components/organisms/icon-card-list';
import LearnMoreCard from '@components/molecules/learn-more-card';
import TickCardList from '@components/organisms/tick-card-list';
import Article from '@components/molecules/article';
import OldVsNew from '@components/organisms/old-vs-new';

import { oldList, newList } from '@data/industries';

import authorImage from '@images/construction-minds@2x.png';
import image1 from '@images/time-clock-mobile@2x.png';
import noImage from '@images/no-image.png';
import ProductOverviewBanner from '@images/product-overview-banner-image.svg';
import FieldWorkers from '@images/field-workers2.svg';
import AnyIndustry from '@images/timesheets-image2.svg';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';

import { container } from '@styles/main.module.scss';
import { learnMoreContainer, roundImagesContainer } from './timesheets.module.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';
import { StaticImage } from 'gatsby-plugin-image';

// import localeData from '@locale/en';

const checkList = [
  'Mobile, Web, and Kiosk Time Clock',
  'Clock In/Out Reminders',
  'Managed Clock In/Out',
  'Work Activity Notifications',
  'GPS Stamped Clock In/Out',
  'Manual Time Entries',
];

const Timesheets = () => (
  <div className={`${container}`}>
    <SEO title="Time Clock" />
    <Header />
    <IndustryMainCard
      smallTitle="EMPLOYEE TIMESHEET APP"
      title="Streamline your payroll with our simple employee timesheet app"
      description="Get accurate timesheet reports, including regular time, overtime, breaks, time off, and more."
      image={image1}
      styling="other"
    />

    <Divider />
    <TickCardList list={checkList} />
    <Divider className="style2" />
    <Title
      title="Record your work hours, breaks, time off, overtime, and more!"
      description="Atto is an easy to use time-tracking solution that generates accurate, reasy-to-read timesheet reports."
      maxWidth={920}
      maxDescriptionWidth={800}
    />
    <Divider className="style2" />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
    />
    <Divider />
    <Title
      title="Turn time tracking data into insightful timesheet reports"
      description="Your employees’ hours are instantly transformed into timesheet reports. View every hour worked from regular time to overtime. Create reports based on specific employees, teams, or job codes. And download and share them in a few clicks."
      maxWidth={920}
      maxDescriptionWidth={800}
    />
    <Divider className="style2" />
    <ProductOverviewBanner />
    <Divider />
    <Article
      title="See timesheet summaries per employee, team, or job code"
      description="Get insights into how productive each part of your business is. In a few taps, Atto generates timesheet reports that show all the work done by each employee, team, or towards a specific job."
      image={noImage}
    />
    <Divider />
    <Article
      title="View timesheets as a daily map-based timeline"
      description="If your employees work in the field, it can be useful to see how long they spend at each job, and the routes they take throughout their day. Atto uses GPS tracking in conjunction with your employees’ timesheets to provide you a visual timeline of their daily movements."
      image={noImage}
      isSwapped
    />
    <Divider />
    <Title
      title="From timesheets to payroll in no time at all"
      description="Using Atto can dramatically speed up the payroll process – no matter the payroll system you’re using."
    />
    <Divider className="style2" />
    <div className={roundImagesContainer}>
      <IconCard
        bigImage
        isRound
        imageWidth={250}
        imageHeight={250}
        icon={noImage}
        alt="Employees forget"
        title="Automatic email reports"
        description="Atto automatically emails you your employees’ timesheets to coincide with your payroll period. Send it directly to your accountant or input the data into your payroll system."
      />
      <IconCard
        isRound
        bigImage
        icon={noImage}
        imageWidth={250}
        imageHeight={250}
        alt="Out of battery"
        title="Export timesheets and timesheet data"
        description="Download and export any timesheets and data as a PDF/CSV file – perfect for sharing with your admin team or importing into payroll software."
      />
      <IconCard
        bigImage
        isRound
        imageWidth={250}
        imageHeight={250}
        icon={noImage}
        alt="Not sure if employees"
        title="Accounting integrations"
        description="Atto integrates with Xero and QuickBooks Online to automatically sync timesheet data to your favorite payroll software."
      />
    </div>
    <Divider />
    <FieldWorkers />
    <Divider />
    <Title
      title="Using paper timesheets? See the difference!"
      description="Atto’s employee timesheet app is an easier and more accurate time tracking solution for your business."
    />
    <Divider />
    <OldVsNew oldList={oldList} newList={newList} />
    <Divider />
    <AnyIndustry />
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
      title="#1 Time Tracker. Free for 14 days"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default Timesheets;
