import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Video from '@components/molecules/video';
import MainTitleCard from '@components/molecules/main-title-card';
import FeatureCard from '@components/molecules/feature-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import IconCard from '@components/molecules/icon-card';
import Title from '@components/molecules/title';
import CheckList from '@components/molecules/check-list';
import ImageSlider from '@components/molecules/image-slider';
import IconCardList from '@components/organisms/icon-card-list';
import FeaturesList from '@components/organisms/features-list';
import GrowthNumbers from '@components/organisms/growth-numbers';
import Services from '@components/organisms/services';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';

import { FooterLinks } from '@locale/en.js';
import authorImage from '@images/authorImage.png';
import noImage from '@images/no-image.png';

import logo1 from '@images/web-time-tracking.png';
import logo2 from '@images/mobile-time-tracking.png';
import logo3 from '@images/kiosk-time-tracking.png';

import icon from '@images/easy-to-use.png';
import icon2 from '@images/accurate.png';
import icon3 from '@images/trustworthy.png';

import icon4 from '@images/clock-in-out.png';
import icon5 from '@images/write-notes.png';
import icon6 from '@images/track-breaks.png';
import icon7 from '@images/manage-overtime.png';
import icon8 from '@images/switch-between-jobs.png';
import icon9 from '@images/add-time-off.png';

import icon10 from '@images/timer.png';
import icon11 from '@images/flag.png';
import icon12 from '@images/ringbell.png';
import icon13 from '@images/m-logo.png';
import icon14 from '@images/brightness.png';
import icon15 from '@images/notes.png';
import icon16 from '@images/overtime.png';
import icon17 from '@images/coffe.png';
import icon18 from '@images/bookmark.png';
import icon19 from '@images/clock.png';
import icon20 from '@images/browser.png';
import icon21 from '@images/darkMode.png';
import icon22 from '@images/employees_forget.png';
import icon23 from '@images/out-of-battery.png';

import {
  container,
  learnMoreContainer,
  workListContainer,
  commonProblemsContainer,
} from './time-tracking.module.scss';

// import localeData from '@locale/en';

const TimeTracking = () => {
  const Intl = useIntl();

  const firstList = [
    {
      title: 'Easy to use',
      description: `Start tracking in a tap. Emplyees love using Atto because it's simple, intuitive, and requires no technical knowledge to use.`,
      alt: 'Easy to use',
      icon,
    },
    {
      title: 'Accurate',
      description: `No more end-of-week timesheet guesswork. Time gets tracked in real-time as employees work - with entries precise to the nearest second.`,
      alt: 'Accurate',
      icon: icon2,
    },
    {
      title: 'Trustworthy',
      description: `Gain confidence in your time tracking data. TImesheets are verified using location data, so you can trust the validity of every time entry.`,
      alt: 'Trustworthy',
      icon: icon3,
    },
  ];

  const secondList = [
    {
      title: 'Clock-in and out',
      description: `Tap the giant pulsating clock in/out button to start tracking time.`,
      alt: 'Easy to use',
      icon: icon4,
    },
    {
      title: 'Write notes',
      description: `Add notes to your time tracking records, such as a work diary.`,
      alt: 'write notes',
      icon: icon5,
    },
    {
      title: 'Track Breaks',
      description: `Track breaks and categorize them either paid or unpaid`,
      alt: 'track breaks',
      icon: icon6,
    },
    {
      title: 'Manage overtime',
      description: `Decide if overtime should be tracked, and if so, whether it's calculated daily or weekly.`,
      alt: 'Manage overtime',
      icon: icon7,
    },
    {
      title: 'Switch between jobs',
      description: `Use job codes to categorize time tracked towards specific purposes - for example for each client or type of job.`,
      alt: 'Switch between jobs',
      icon: icon8,
    },
    {
      title: 'Add time off',
      description: `Add time off such as vacations and sick leave to help managers understand who's available to work.`,
      alt: 'Time off',
      icon: icon9,
    },
  ];

  const titleList = [
    { title: 'Keep track of time wherever your employees are', id: '1asdd1a' },
    { title: 'Reduce payroll costs and increase productivity', id: '1asdd1b' },
    { title: 'Track hours, breaks, time-off, and more', id: '1asdd1c' },
    { title: 'Increase the accuracy of job estimates', id: '1asdd1d' },
  ];

  const overviewAdminList = [
    {
      title: 'Save time and focus on productive work',
      description:
        'Atto takes care of time-draining tasks like chasing down timesheets. Now your employees can spend less time on admin, and more time on real work.',
    },
    {
      title: 'Win more bussiness with precise job estimates',
      description:
        'Using time tracking data from previous jobs, you can ensure that any bids you submit for similar jobs in the future are both profitable and competitive.',
    },
    {
      title: 'Reduce payroll costs',
      description:
        'With precise time-tracking that captures activity to the nearest second, you only pay for hours actually spent on the job',
    },
    {
      title: 'Increase employee productivity',
      description:
        'When you track hours and the clock is ticking, your employees naturally become more productive and aware of their time.',
    },
  ];

  const featureList = [
    {
      title: 'Managed Clock-in / Out',
      description:
        'Empower managers to clock-in and out on behalf of their team, instead of tracking time individually.',
      logo: icon10,
      alt: 'Clock in logo',
    },
    {
      title: 'Geofencing',
      description: `Restrict employees from clocking-in until they've arrived at a job site`,
      logo: icon11,
      alt: 'Geofencing Flag',
    },
    {
      title: 'Smart Reminders',
      description: `Remind employees to clock-in and out at their start and end time or when they're at a job site`,
      logo: icon12,
      alt: 'Ringbell reminder logo',
    },
    {
      title: 'Manual Time Entries',
      description: `Allow admins, managers, or employees the ability to add manual time entries to their timesheets.`,
      logo: icon13,
      alt: '',
    },
    {
      title: 'Time Off',
      description: `Add and categorize time off entries, specifying whether time off is paid or unpaid`,
      logo: icon14,
      alt: '',
    },
    {
      title: 'Notes',
      description: `Add notes to provide context to time entries, such as a work diary or job information`,
      logo: icon15,
      alt: '',
    },
    {
      title: 'Overtime Rules',
      description: `Set regular employee working hours per day/week and assign any extra hours to count as overtime.`,
      logo: icon16,
      alt: '',
    },
    {
      title: 'Break Preferences',
      description: `Decide if breaks are paid or unpaid, the amount of time to be deducted, and categorize them.`,
      logo: icon17,
      alt: '',
    },
    {
      title: 'Job Codes',
      description: `Categorize time tracked towards specific purposes such as per client, project, or type of work.`,
      logo: icon18,
      alt: '',
    },
    {
      title: 'Rounded Clock-in / Out Times',
      description: `Set clock-in and out times to be automatically rounded to an increment of your choice.`,
      logo: icon19,
      alt: '',
    },
    {
      title: 'Fixed Time Zones',
      description: `Automatically adjust your team's hours to a set time zone, regardless of their device's time zone.`,
      logo: icon20,
      alt: '',
    },
    {
      title: 'Split Night-Shift Time Entries',
      description: `Split time entries at midnight, with hours tracked after midnight counting for the following day.`,
      logo: icon21,
      alt: '',
    },
  ];

  const serviceList = [
    { title: 'Construction', icon: 'construction', size: 6.5 },
    { title: 'Painting', icon: 'painting', size: 7.4 },
    { title: 'Roofing', icon: 'roofing', size: 7.5 },
    { title: 'Cleaning', icon: 'cleaning', size: 8 },
    { title: 'Electric', icon: 'electric', size: 7.5 },
    { title: 'Plumbing', icon: '', size: 5 },
    { title: 'Landscaping', icon: 'landscaping', size: 6.7 },
    { title: 'Healthcare', icon: 'healthcare', size: 7.5 },
  ];

  return (
    <div className={container}>
      <SEO title="Product - Time Tracking" />
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph="Time Tracking"
        title="Take the pain away from time tracking"
        subtitle="An easy-to-use, accurate, and trustworthy time-tracking solution."
      />
      <Video />
      <CheckList list={titleList} />
      <Divider />
      <div>
        <StaticImage
          alt="Clock In"
          height={474}
          quality={90}
          src="../../../images/banner-image-2@2x.png"
        />
      </div>
      <Divider className="medium" />
      <IconCardList cardList={firstList} />
      <Divider />
      <Title
        title="Start tracking time in a tap"
        description="Say goodbye to employee estimates. Use the time clock to precisely capture work activity."
      />
      <IconCardList cardList={secondList} hasBigImages />
      <Divider />
      <Title
        title="Accurately track time from any location and any device"
        description={`Time-tracking options to suit your business' needs. In the office, in teams, at a job site, or on the move. Online or offline.`}
      />
      <ImageSlider />
      <div className={workListContainer}>
        <FeatureCard
          isWorkCard
          title="Work in the office via the Web Dashboard"
          description="Log in to the Atto Dashboard and use the web-based time clock from your computer"
          logo={logo1}
          alt="Web time tracking"
        />
        <FeatureCard
          isWorkCard
          title="Work in go icon"
          description="Log in to the Atto Dashboard and use the web-based time clock from your computer"
          logo={logo2}
          alt="Mobile time tracking"
        />
        <FeatureCard
          isWorkCard
          title="Work in job sites icon"
          description="With the Time CLock Kiosk, employees can log in with a PIN, and track time with a single device"
          logo={logo3}
          alt="Kiosk time tracking"
        />
      </div>
      <Divider />
      <Title title="Lower costs, higher productivity. Less admin, more bussiness" />
      <StaticImage
        src="../../../images/admin-panel.png"
        alt="admin-panel-image"
        width={1140}
        height={616}
      />
      <Divider className="medium" />
      <CheckList list={overviewAdminList} hasDescription />
      <Divider />
      <Title title="Our full suite of time tracking features at a glance" />
      <FeaturesList list={featureList} />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Title title="Common problems, solved." />
      <div className={commonProblemsContainer}>
        <IconCard
          bigImage
          isRound
          icon={icon22}
          alt="Employees forget"
          title="Employees forget to track their time?"
          description={`Not any more! With smart reminders, your employees are encouraged to clock-in/out when they're at a job site, and at their regular start and end time.`}
        />
        <IconCard
          isRound
          bigImage
          icon={icon23}
          alt="Out of battery"
          title="What if phone ran out of battery"
          description="Not a problem! If an employee forgets their phone, or it runs out of battery, either they or a manager can add a manual time entry for your approval."
        />
        <IconCard
          bigImage
          isRound
          icon={noImage}
          alt="Not sure if employees"
          title={`Not sure if employees are where they're supposed to?`}
          description={`Always be in the know! With geofencing, you can restrict employees from clocking-in until they're at a job site - increasing accountability and preventing innacurate time entries`}
        />
      </div>
      <Divider />
      <Services title="Time Tracking solution for any industry" list={serviceList} />
      <Divider />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
      <Divider />
      <Title
        title={`It doesn't end here!`}
        description="Learn more about what Atto can do for you"
      />
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
      <Divider />
      <SubscribeBanner
        title="What are you waiting for? Time is ticking!"
        placeholder="Type your email"
        bannerImage
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  );
};

export default TimeTracking;
