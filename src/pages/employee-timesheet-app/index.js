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
import IconCard from '@components/molecules/icon-card';
import OldVsNew from '@components/organisms/old-vs-new';

import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';

import { container } from '@styles/main.module.scss';
import * as styles from './employee-timesheet-app.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';
import { oldList, newList } from '@data/industries';

// import localeData from '@locale/en';

const EmployeeTimesheetApp = () => (
  <div className={`${container}`}>
    <SEO title="Time Clock" />
    <Header />
    <IndustryMainCard
      smallTitle="EMPLOYEE TIMESHEET APP"
      title="Streamline your payroll with our simple employee timesheet app"
      image={noImage}
      styling="other"
    />
    <Divider />
    <Title
      title="Record your work hours, breaks, time off, overtime, and more!"
      description="Atto is an easy to use time-tracking solution that generates accurate, reasy-to-read timesheet reports."
      maxDescriptionWidth={800}
      maxWidth={920}
    />
    <Divider />
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
      maxDescriptionWidth={800}
      maxWidth={920}
    />
    <Divider />
    <Article
      title="Get wage estimates from your employees’ timesheets"
      description="Add your employees’ pay rates, and Atto will estimate your payroll costs based on the hours tracked. What’s more, you can add more than one pay rate per employee so that your estimates remain accurate even if their rate changes."
      image={noImage}
    />
    <Divider />
    <Article
      title="See timesheet summaries per employee, team, or job code"
      description="Get insights into how productive each part of your business is. In a few taps, Atto generates timesheet reports that show all the work done by each employee, team, or towards a specific job."
      image={noImage}
      isSwapped
    />
    <Divider />
    <Article
      title="View timesheets as a daily map-based timeline"
      description="If your employees work in the field, it can be useful to see how long they spend at each job, and the routes they take throughout their day. Atto uses GPS tracking in conjunction with your employees’ timesheets to provide you a visual timeline of their daily movements."
      image={noImage}
    />
    <Divider />
    <Title
      title="From timesheets to payroll in no time at all"
      description="Using Atto can dramatically speed up the payroll process – no matter the payroll system you’re using."
    />
    <Divider />
    <div className={styles.roundImagesContainer}>
      <IconCard
        bigImage
        isRound
        imageWidth={250}
        imageHeight={250}
        icon={noImage}
        alt="Employees forget"
        title="Employees forget to track their time?"
        description="Not any more! With smart reminders, your employees are encouraged to clock in/out when they’re at a job site, and at their regular start and end time."
      />
      <IconCard
        isRound
        bigImage
        icon={noImage}
        imageWidth={250}
        imageHeight={250}
        alt="Out of battery"
        title="What if phone ran out of battery?"
        description="Not a problem! If an employee forgets their phone, or it runs out of battery, either they or a manager can add a manual time entry for your approval."
      />
      <IconCard
        bigImage
        isRound
        imageWidth={250}
        imageHeight={250}
        icon={noImage}
        alt="Not sure if employees"
        title="Not sure if employees are where they’re supposed to?"
        description="Always be in the know! With geofencing, you can restrict employees from clocking in until they’re at a job site – increasing accountability and preventing inaccurate time entries."
      />
    </div>
    <Divider />
    <Title
      title="Using paper timesheets? See the difference!"
      description="Atto’s employee timesheet app is an easier and more accurate time tracking solution for your business."
      maxDescriptionWidth={800}
    />
    <Divider />
    <OldVsNew oldList={oldList} newList={newList} />
    <Divider />
    <SubscribeBanner
      title="Try Atto, completely free for 14 days"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default EmployeeTimesheetApp;
