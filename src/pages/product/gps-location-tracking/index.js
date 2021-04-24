import React from 'react';

import Header from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Title from '@components/molecules/title';
import MainTitleCard from '@components/molecules/main-title-card';
import IconCardList from '@components/organisms/icon-card-list';
import Video from '@components/molecules/video';
import Story from '@components/organisms/story';
import Cover from '@components/organisms/growth-numbers/cover';
import CheckList from '@components/molecules/check-list';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import FeaturesList from '@components/organisms/features-list';
import ListArticle from '@components/organisms/list-article';
import { FooterLinks } from '@locale/en.js';
import Footer from '@components/molecules/footer';

import { container } from '@styles/main.module.scss';
import {
  checkListContainer,
  privacyContainer,
  imageContainer,
} from './gps-location-tracking.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import noImage from '@images/no-image.png';
import image1 from '@images/verify-your-team.png';
import authorImage from '@images/authorImage.png';

import icon1 from '@images/timer.png';
import icon2 from '@images/flag.png';
import icon3 from '@images/ringbell.png';
import icon4 from '@images/m-logo.png';
import icon5 from '@images/brightness.png';
import icon7 from '@images/battery.png';
import icon8 from '@images/coffe.png';
import icon9 from '@images/bookmark.png';

const LocationTracking = () => {
  const checkList1 = [
    { title: `View any employee's status and location in a few taps` },
    { title: 'Increase team visibility, transparency, and accountability' },
    { title: `See clear daily timelines of every employee's activity` },
    { title: 'Make team management easier and less time-consuming' },
  ];

  const checkLists2 = [
    { title: `Gain a better understanding of your employees's workdays` },
    { title: 'Trace the routes taken and stops made while on the clock' },
    { title: `Check how efficient employees are at completing jobs` },
    { title: `Identify different activities easily with color-coded routes` },
  ];

  const checkLists3 = [
    { title: `Ensure only hours worked are accounted for` },
    { title: 'Encourage your team to never turn up late for a job' },
    { title: `Prevent employees from "buddy punching"` },
    { title: `Save payroll costs and reduce time wastage` },
  ];

  const checkList4 = [
    {
      title: `Decide who's locations are tracked, and who's aren't`,
      description: `Location tracking is completely optional. DOn't need it? Disable it! Atto gives you the power to decide which specific employees or teams require it.`,
    },
    {
      title: `Choose which type of location tracking to enable`,
      description:
        'You get to choose whether you require real-time location tracking, or alternatively, just the locations of where employees clock in and out.',
    },
    {
      title: `When work ends, so does location tracking`,
      description:
        'Atto never tracks more than is absolutely neccesary. Whenever employees clock out, location tracking is turned off completely.',
    },
  ];

  const featuresList = [
    {
      title: 'Real-time Location Updates',
      description: 'See the location of your entire team of employees as they work in real-time.',
      logo: icon1,
    },
    {
      title: 'Clock in/out Location History',
      description: 'View GPS time stamps of your employees clock in and clock out locations.',
      logo: icon2,
    },
    {
      title: 'Named Job Sites',
      description:
        'Provide names for specific locations you operate from to make reporting easier.',
      logo: icon3,
    },
    {
      title: 'Location History Tracking',
      description: `View your employees' location history throughout their entire day.`,
      logo: icon4,
    },
    {
      title: 'Customizable GPS Tracking',
      description:
        'Choose the specific employees and teams that require location tracking for their job.',
      logo: icon5,
    },
    {
      title: 'Geofencing',
      description: `Restrict employees from clocking in until they've arrived at a job site`,
      logo: icon2,
    },
    {
      title: 'Built-in Battery Efficiency',
      description:
        'Never worry about your battery life being drained with battery-efficient GPS tracking technology.',
      logo: icon7,
    },
    {
      title: 'Compatible with most mobiles',
      description:
        'Use location tracking with most Apple and Android devices - no special equipment necessary.',
      logo: icon8,
    },
    {
      title: 'Privacy Controls',
      description:
        'Stay in control of what gets tracked - real-time positions, clock in/out lcoations or nothing at all.',
      logo: icon9,
    },
  ];

  const cardList = [
    {
      title: 'Boost Productivity',
      description: `See who's nearest to a job site, and quickly deploy them - boosting efficiency and reducing costs.`,
    },
    {
      title: 'Increase Visibility',
      description: `Always know where your team is, and what they're working on without any back and forth phone calls.`,
    },
    {
      title: 'Improve Safety',
      description: `Get peace of mind and help improve your team's safety as they work in the field and move from job site to job site.`,
    },
  ];

  return (
    <div className={container}>
      <SEO title="GPS Location Tracking" />
      <Header />
      <MainTitleCard
        title="Be in the right place, at the right time"
        subtitle="Increase the accountability and transparency of your team with real-time updates on their location"
        hasParagraph
        showButton
        paragraph="GPS Location Tracking"
      />
      <Video />
      <div className={checkListContainer}>
        <CheckList list={checkList1} />
      </div>
      <Divider />
      <Title title="Track the locations of your entire team in real-time" />
      <StaticImage
        style={{ marginTop: '-3rem' }}
        src="../../../images/track-team-locations@2x.png"
        alt="location of team"
        width={1056}
        height={316}
        quality={95}
      />
      <Divider className="smallest" />
      <IconCardList noImage cardList={cardList} />
      <Divider />
      <ListArticle
        title="Keep track of your team's daily movements"
        description="Atto's GPS location tracking generates simple map-based timelines of every employee's daily movements. This helps you visualize their workdays in a clear, simple-to-udnerstand fashion."
        list={checkLists2}
        image={noImage}
      />
      <Divider />
      <ListArticle
        title="Verify your team is working at the right job site"
        description="Increase your team's accountability by using geofencing to restrict them from clocking in until they're at a job site."
        description2="Clock in/out locations are GPS stamped and job sites can be named so it's easy to read reports and check activity."
        list={checkLists3}
        image={image1}
        isSwapped
      />
      <Divider />
      <Title
        title="Your privacy, our priority"
        description="You always stay in complete control of location tracking, providing peace of mind your employees"
      />
      <div className={privacyContainer}>
        <CheckList list={checkList4} hasDescription />
        <div className={imageContainer}>
          <StaticImage
            src={'../../../images/privacy-priority@2x.png'}
            width={455}
            height={500}
            alt="Your privacy,our priority"
          />
        </div>
      </div>
      <Divider />
      <FeaturesList list={featuresList} />
      <Divider />
      <Cover isSwapped />
      <Divider />
      <Title
        title="A work hours tracker for any industry"
        description="Atto helps all types of bussinesses across the world to manage their employee's time"
      />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
      <Divider />
      <SubscribeBanner
        title="Stay in control of what's happening with team activity updates!"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  );
};

export default LocationTracking;
