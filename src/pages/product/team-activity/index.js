import React from 'react';
import {
  teamActivityContainer,
  learnMoreContainer,
  checkListContainer,
  featuresStyle,
} from './team-activity.module.scss';

import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Title from '@components/molecules/title';
import MainTitleCard from '@components/molecules/main-title-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Video from '@components/molecules/video';
import CheckList from '@components/molecules/check-list';
import Cover from '@components/organisms/growth-numbers/cover';
import Article from '@components/molecules/article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import FeaturesList from '@components/organisms/features-list';
import Services from '@components/organisms/services';
import Story from '@components/organisms/story';
import { container } from '@styles/main.module.scss';

import authorImage from '@images/authorImage.png';
import image1 from '@images/team-management-departments.png';
import image2 from '@images/find-out.png';
import image3 from '@images/eliminate-checks.png';
import image4 from '@images/activity-updates@2x.png';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';

import icon14 from '@images/time-tracking-clock@1x.png';
import icon15 from '@images/location@1x.png';
import icon16 from '@images/timesheets@1x.png';

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';

import { FooterLinks } from '@locale/en.js';

const TeamActivity = () => {
  const titleList = [
    { title: `View any employee’s status and location in a few taps` },
    { title: 'Increase team visibility, transparency, and accountability' },
    { title: `See clear daily timelines of every employee’s activity` },
    { title: 'Make team management easier and less time-consuming' },
  ];

  const featureList = [
    {
      title: 'Employee Status Overview',
      description: `Stay in control of your team’s daily activity with real-time updates on their status and location.`,
      logo: <Timer />,
      alt: 'Employee status logo',
    },
    {
      title: 'Daily Timeline',
      description: `See a clear, simple timeline view of every employee’s daily activity.`,
      logo: <Flag />,
      alt: 'Geofencing Flag',
    },
    {
      title: 'Departments',
      description: `Organize employees into departments based on their location, job site, or role.`,
      logo: <Ringbell />,
      alt: 'Ringbell reminder logo',
    },
    {
      title: 'Filter and Search',
      description: `Filter teams based on their status, department, or simply search for their name.`,
      logo: <MLogo />,
      alt: '',
    },
    {
      title: 'Smart Notifications',
      description: `Get notified whenever an employee clocks in or out, takes a break, or edits a time entry.`,
      logo: <Brightness />,
      alt: '',
    },
    {
      title: 'Messaging*',
      description: `Allow employees to send messages and share photos 1-1 or in group chats.`,
      logo: <Flag />,
      alt: '',
    },
  ];

  const serviceList = [
    { title: 'Construction', icon: <ConstructionLogo /> },
    { title: 'Landscaping & Gardening', icon: <LandscapingLogo /> },
    { title: 'Roofing', icon: <RoofingLogo /> },
    { title: 'Painting & Decorating', icon: <PaintingLogo /> },
    { title: 'Healthcare & Medical', icon: <HealthcareLogo /> },
    { title: 'Electrical', icon: <ElectrianLogo /> },
    { title: 'Plumbing & Heating', icon: <PlumbingLogo /> },
    { title: 'Other industries', icon: <ThreeDots /> },
  ];
  return (
    <div className={`${teamActivityContainer} ${container}`}>
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph="TEAM ACTIVITY"
        title="Stay in the loop with everything happening in real-time"
      />
      <Divider className="style2" />
      <Video />
      <Divider className="style2" />
      <div className={checkListContainer}>
        <CheckList list={titleList} />
      </div>
      <Divider />
      <Title maxWidth={900} title="See where your team is, and what they're working on" />
      <Divider className="style2" />
      <Article
        title="Never feel in the dark again with team activity updates"
        description="Find out what’s going on in a few taps. Get real-time updates on your team’s status and location. See who’s on the clock, on break, or enjoying some time off."
        image={image4}
        maxWidth={500}
        imagePadding="7.3rem 4.5rem"
      />
      <Article
        title="Simplify team management with departments"
        description="Organize employees into departments to make them easier to manage. Group them based on their location, job site, or role to see all their statuses at once. Easily keep track of everyone regardless of your company size."
        image={image1}
        isSwapped
        maxWidth={500}
        imagePadding="4.4rem 5.9rem 4.3rem 5.3rem"
      />
      <Article
        title="Find out what any employee is up to in seconds"
        description="Stay in control of what’s happening. Filter your team based on their current status, the department they’re in, or by searching for their name. Make day-to-day decisions faster with all the information you need at your fingertips."
        image={image2}
        maxWidth={500}
        imagePadding="3.3rem 4.2rem 2.4rem 10.7rem"
      />
      <Article
        title="Eliminate back and forth phone calls and constant check-ins"
        description="Increase team visibility and make team management a breeze. Get notified as soon as an employee clocks in or out, takes a break, or edits a time entry."
        image={image3}
        isSwapped
        maxWidth={500}
        imagePadding="5.6rem 5.5rem"
      />
      <Article
        title="See your team’s progress at the end of each day"
        description="Check on your team’s progress and productivity with clear timelines of everyone’s daily activity. See how long they spend on breaks, jobs, and on the clock. Gain greater insight into their workdays, and use it to speed-up timesheet approvals."
        image={image1}
        maxWidth={500}
        imagePadding="1.8rem 5.5rem"
      />
      <Divider />
      <Title maxWidth={880} title="Our full suite of team activity features at a glance" />
      <Divider className="style3" />
      <div className={featuresStyle}>
        <FeaturesList list={featureList} />
      </div>
      <Divider />
      <Cover isSwapped />
      <Divider className="style10" />
      <Title
        title="A work hours tracker for any industry"
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
      />
      <Divider className="style2" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title="Time Tracking"
          icon={icon14}
          description="See exactly where your employees’ time is going. Track work hours, breaks, overtime, time off, and more!"
          path="/product/time-tracking"
        />
        <LearnMoreCard
          title="GPS Location Tracking"
          description="Increase the safety and accountability of your team with real-time updates on their location."
          icon={icon15}
          path="/product/gps-location-tracking"
        />
        <LearnMoreCard
          title="Timesheets"
          description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
          icon={icon16}
          path="/product/timesheets"
        />
      </div>
      <Divider />
      <SubscribeBanner
        title="Stay in control of what's happening with team activity updates"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  );
};

export default TeamActivity;
