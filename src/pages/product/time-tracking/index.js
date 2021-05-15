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
import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';
import authorImage from '@images/authorImage.png';
import noImage from '@images/no-image.png';

import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';

import icon from '@images/easy-to-use.png';
import icon2 from '@images/accurate.png';
import icon3 from '@images/trustworthy.png';

import icon4 from '@images/clock-in-out.png';
import icon5 from '@images/write-notes.png';
import icon6 from '@images/track-breaks.png';
import icon7 from '@images/manage-overtime.png';
import icon8 from '@images/switch-between-jobs.png';
import icon9 from '@images/add-time-off.png';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Notes from '@images/notes.svg';
import Overtime from '@images/overtime.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Clock from '@images/clock.svg';
import Browser from '@images/browser.svg';
import Darkmode from '@images/darkMode.svg';
import icon22 from '@images/employees_forget.png';
import icon23 from '@images/out-of-battery.png';
import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';

import {
  timeTrackingContainer,
  checkListContainer,
  learnMoreContainer,
  workListContainer,
  commonProblemsContainer,
  mobileImage,
  desktopImage,
} from './time-tracking.module.scss';

// import localeData from '@locale/en';

const TimeTracking = () => {
  const Intl = useIntl();

  const firstList = [
    {
      title: 'Easy to use',
      description: `Start tracking in a tap. Employees love using Atto because it’s simple, intuitive, and requires no technical knowledge to use.`,
      alt: 'Easy to use',
      icon,
      imagePadding: '.8rem 3.1rem 1.5rem 3rem',
      imageWidth: 59,
      imageHeight: 97,
    },
    {
      title: 'Accurate',
      description: `No more end-of-week timesheet guesswork. Time gets tracked in real-time as employees work – with entries precise to the nearest second.`,
      alt: 'Accurate',
      icon: icon2,
      imagePadding: '.8rem .6rem 1.9rem 2rem',
      imageWidth: 94,
      imageHeight: 93,
    },
    {
      title: 'Trustworthy',
      description: `Gain confidence in your time tracking data. Timesheets are verified using location data, so you can trust the validity of every time entry.`,
      alt: 'Trustworthy',
      icon: icon3,
      imagePadding: '1.2rem 1rem',
      imageWidth: 100,
      imageHeight: 96,
    },
  ];

  const secondList = [
    {
      title: 'Clock in and out',
      description: `Tap the giant pulsating clock in/out button to start tracking time.`,
      alt: 'Easy to use',
      icon: icon4,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: 'Write notes',
      description: `Add notes to your time tracking records, such as a work diary.`,
      alt: 'write notes',
      icon: icon5,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: 'Track Breaks',
      description: `Track breaks and categorize them as either paid or unpaid.`,
      alt: 'track breaks',
      icon: icon6,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: 'Manage overtime',
      description: `Decide if overtime should be tracked, and if so, whether it’s calculated weekly, daily or daily double.`,
      alt: 'Manage overtime',
      icon: icon7,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: 'Switch between jobs',
      description: `Use job codes to categorize time tracked towards specific purposes – for example for each client or type of job.`,
      alt: 'Switch between jobs',
      icon: icon8,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: 'Add time off',
      description: `Add time off such as vacations and sick leave to help managers understand who’s available to work.`,
      alt: 'Time off',
      icon: icon9,
      imageWidth: 350,
      imageHeight: 244,
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
        'With precise time tracking that captures activity to the nearest second, you only pay for hours actually spent on the job.',
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
        'Empower managers to clock in and out on behalf of their team, instead of tracking time individually.',
      logo: <Timer />,
      alt: 'Clock in logo',
    },
    {
      title: 'Geofencing',
      description: `Restrict employees from clocking in until they’ve arrived at a job site.`,
      logo: <Flag />,
      alt: 'Geofencing Flag',
    },
    {
      title: 'Smart Reminders',
      description: `Remind employees to clock in and out at their start and end time or when they’re at a job site.`,
      logo: <Ringbell />,
      alt: 'Ringbell reminder logo',
    },
    {
      title: 'Manual Time Entries',
      description: `Allow admins, managers, or employees the option to add manual time entries to their timesheets.`,
      logo: <MLogo />,
      alt: 'Manual time entries',
    },
    {
      title: 'Time Off',
      description: `Add and categorize time off entries, specifying whether time off is paid or unpaid.`,
      logo: <Brightness />,
      alt: 'time off',
    },
    {
      title: 'Notes',
      description: `Add notes to provide context to time entries, such as a work diary or job information.`,
      logo: <Notes />,
      alt: 'notes ',
    },
    {
      title: 'Overtime Rules',
      description: `Set regular employee working hours per day/week and assign any extra hours to count as overtime.`,
      logo: <Overtime />,
      alt: 'overtime',
    },
    {
      title: 'Break Preferences',
      description: `Decide if breaks are paid or unpaid, the amount of time to be deducted, and categorize them.      `,
      logo: <Coffe />,
      alt: 'break coffe',
    },
    {
      title: 'Job Codes',
      description: `Categorize time tracked towards specific purposes such as per client, project, or type of work.`,
      logo: <Bookmark />,
      alt: 'job codes',
    },
    {
      title: 'Rounded Clock-in / Out Times',
      description: `Set clock in and out times to be automatically rounded to an increment of your choice.`,
      logo: <Clock />,
      alt: 'rounded clock in',
    },
    {
      title: 'Fixed Time Zones',
      description: `Automatically adjust your team’s hours to a set time zone, regardless of their device’s time zone.`,
      logo: <Browser />,
      alt: 'fixed time zone',
    },
    {
      title: 'Split Night-Shift Time Entries',
      description: `Split time entries at midnight, with hours tracked after midnight counting for the following day.`,
      logo: <Darkmode />,
      alt: 'split night shift',
    },
  ];

  const serviceList = [
    { title: 'Construction', icon: <ConstructionLogo /> },
    { title: 'Landscaping & Gardening', icon: <LandscapingLogo /> },
    { title: 'Roofing', icon: <RoofingLogo /> },
    { title: 'Painting & Decorating', icon: <PaintingLogo /> },
    { title: 'Cleaning & Maintenance', icon: <CleaningLogo /> },
    { title: 'Healthcare & Medical', icon: <HealthcareLogo /> },
    { title: 'Electrical', icon: <ElectrianLogo /> },
    { title: 'Plumbing & Heating', icon: <PlumbingLogo /> },
    { title: 'Other industries', icon: <ThreeDots /> },
  ];

  return (
    <div className={`${container} ${timeTrackingContainer}`}>
      <SEO title="Product - Time Tracking" />
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph="TIME TRACKING"
        title="Take the pain away from time tracking"
        subtitle="An easy-to-use, accurate, and trustworthy time-tracking solution."
      />
      <Divider className="style2" />
      <Video />
      <Divider className="style2" />
      <div className={checkListContainer}>
        <CheckList list={titleList} cardStyle="centerAligned" />
      </div>
      <StaticImage
        src="../images/time-tracking-fingertips@2x.png"
        alt="Home banner image"
        height={505}
        quality={95}
        className={mobileImage}
      />
      <Divider />
      <div>
        <StaticImage
          alt="Clock In"
          height={502}
          quality={90}
          src="../../../images/banner-image-2@2x.png"
          className={desktopImage}
        />
      </div>
      <Divider className="style3" />
      <IconCardList cardList={firstList} />
      <Divider />
      <Title
        title="Start tracking time in a tap"
        maxDescriptionWidth={800}
        description="Say goodbye to employee estimates. Use the time clock to precisely capture work activity."
      />
      <Divider className="style7" />
      <IconCardList cardList={secondList} hasBigImages style="smallerMargin" />
      <Divider />
      <Title
        maxWidth={950}
        maxDescriptionWidth={800}
        title="Accurately track time from any location and any device"
        description="Time tracking options to suit your business’ needs. In the office, in teams, at a job site, or on the move. Online or offline."
      />
      <Divider className="style7" />
      <ImageSlider />
      <div className={workListContainer}>
        <FeatureCard
          isWorkCard
          title="Work in the office via the Web Dashboard"
          description="When at the office, track your time using Atto’s web-based time clock."
          logo={<WebTracking />}
          alt="Web time tracking"
          imagePadding=".8rem 2.9rem .797rem .1rem"
        />
        <FeatureCard
          isWorkCard
          title="Work on the go via the Mobile App"
          description="Track time on the go with the Atto mobile app available on iOS and Android."
          logo={<MobileTracking />}
          alt="Mobile time tracking"
          imagePadding=".5rem 3.24rem .587rem 0"
        />
        <FeatureCard
          isWorkCard
          title="Work at job sites via the Time Clock Kiosk"
          description="Set up a time clock kiosk to enable your team to track time from a single device."
          logo={<KioskTracking />}
          alt="Kiosk time tracking"
          imagePadding=".9rem 2.5rem .85rem .4rem"
        />
      </div>
      <Divider />
      <Title maxWidth={860} title="Lower costs, higher productivity. Less admin, more business." />
      <Divider className="style7" />
      <StaticImage
        src="../../../images/admin-panel.png"
        alt="admin-panel-image"
        width={1140}
        height={616}
        quality={96}
      />
      <Divider className="style3" />
      <CheckList list={overviewAdminList} hasDescription cardStyle="big" />
      <Divider />
      <Title maxWidth={880} title="Our full suite of time tracking features at a glance" />
      <Divider className="style3" />
      <FeaturesList list={featureList} />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Title title="Common problems, solved." />
      <Divider className="style7" />
      <div className={commonProblemsContainer}>
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={icon22}
          alt="Employees forget"
          title="Employees forget to track their time?"
          description="Not any more! With smart reminders, your employees are encouraged to clock in/out when they’re at a job site, and at their regular start and end time."
        />
        <IconCard
          isRound
          bigImage
          icon={icon23}
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
          title={`Not sure if employees are where they’re supposed to?`}
          description={`Always be in the know! With geofencing, you can restrict employees from clocking in until they’re at a job site – increasing accountability and preventing inaccurate time entries.`}
        />
      </div>
      <Divider />
      <Title
        title="Time tracking solutions for any industry"
        description="Atto helps all types of businesses across the world to manage their employees’ time."
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services list={serviceList} />
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
        marginBottom="4px"
      />
      <Divider className="style6" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title="GPS Location Tracking"
          description="Increase the safety and accountability of your team with real-time updates on their location."
          icon={icon32}
          path="/product/gps-location-tracking"
          imageWidth={27}
          imageHeight={32}
        />
        <LearnMoreCard
          title="Team Activity"
          description="Stay in the loop with what's happening - without needing to pick up the phone"
          icon={icon33}
          path="/product/team-activity"
          imageWidth={42}
          imageHeight={44}
        />
        <LearnMoreCard
          title="Timesheets"
          description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
          icon={icon34}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
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
