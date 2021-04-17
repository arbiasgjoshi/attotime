import React from 'react';
import { container, learnMoreContainer } from './team-activity.module.scss';

import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import MainTitleCard from '@components/molecules/main-title-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Video from '@components/molecules/video';
import CheckList from '@components/molecules/check-list';
import Article from '@components/molecules/article';
import FeaturesList from '@components/organisms/features-list';
import Services from '@components/organisms/services';
import Story from '@components/organisms/story';

import authorImage from '@images/authorImage.png';
import image1 from '@images/team-management-departments.png';
import image2 from '@images/find-out.png';
import image3 from '@images/eliminate-checks.png';

import icon1 from '@images/timer.png';
import icon2 from '@images/flag.png';
import icon3 from '@images/ringbell.png';
import icon4 from '@images/m-logo.png';
import icon5 from '@images/brightness.png';

const TeamActivity = () => {
  const titleList = [
    { title: `View any employee's status and location in a few taps` },
    { title: 'Increase team visibility, transparency, and accountability' },
    { title: `See clear daily timelines of every employee's activity` },
    { title: 'Make team management easier and less time-consuming' },
  ];

  const featureList = [
    {
      title: 'Employee Status Overview',
      description: `Stay in control of your team's daily activity with real-time updates on their status and location.`,
      logo: icon1,
      alt: 'Employee status logo',
    },
    {
      title: 'Daily Timeline',
      description: `See a clear, simple timeline view of every employee's daily activity.`,
      logo: icon2,
      alt: 'Geofencing Flag',
    },
    {
      title: 'Departments',
      description: `Organize employees into departments based on their location, job site, or role.`,
      logo: icon3,
      alt: 'Ringbell reminder logo',
    },
    {
      title: 'Filter and Search',
      description: `Filter teams based on their status, department, or simply search for their name`,
      logo: icon4,
      alt: '',
    },
    {
      title: 'Smart Notifications',
      description: `Get notified whenever an employee clock in or out, takes a break, or edits a time entry.`,
      logo: icon5,
      alt: '',
    },
    {
      title: 'Messaging*',
      description: `Allow employees to send messages and share photos 1-1 or in group chats`,
      logo: icon2,
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
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph="Team Activity"
        title="Stay in the loop with everything happening in real-time"
      />
      <Video />
      <CheckList list={titleList} />
      <Divider />
      <Title title="See where your team is, and what they're working on" />
      <Article
        title="Never feel in the dark again with team activity updates"
        description="Find out what's going on in a few taps. Get real-time updates on your team's status and location. See who's on the clock, on break, or enjoying some time off."
        image={image1}
      />
      <Article
        title="Simplify team management with departments"
        description="Organize employees into departments to make them easier to manage. GRoup them based on their location, job site, or role to see all their statuses at once. Easily keep track of everyone regardless of your company size."
        image={image1}
        isSwapped
      />
      <Article
        title="Find out what any employee is up to in seconds"
        description="Stay in control of what's happening. Filter your team based on their current status, the department they're in, or by searching for their name. Make day-to-day decisions faster with all the information you need at your fingertips."
        image={image2}
      />
      <Article
        title="Eliminate back and forth phone calls and constant check-ins"
        description="See your team's progress at the end of each day"
        image={image3}
        isSwapped
      />
      <Article
        title="See your team's progress at the end of each day"
        description="Check on your team's progress and productivity with clear timelines of everyone's daily activity. See how long they spend on breaks, jobs, and on the clock. Gain greater insight into their workdays, and use it to speed-up timesheet approvals."
        image={image1}
      />
      <Divider />
      <Title title="Our full suite of team activity features at a glance" />
      <FeaturesList list={featureList} />
      <Divider />
      {/* here comes a photo  */}
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
          title="Time Tracking"
          description="See exactly where your employees's time is going. Track work hours, breaks, overtime, time off, and more!"
        />
        <LearnMoreCard
          title="GPS Location Tracking"
          description="Increase the safety and accountability of your team with real-time updates on their location."
        />
        <LearnMoreCard
          title="Timesheets"
          description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
        />
      </div>
    </div>
  );
};

export default TeamActivity;
