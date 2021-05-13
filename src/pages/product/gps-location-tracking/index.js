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
import LearnMoreCard from '@components/molecules/learn-more-card';
import CheckList from '@components/molecules/check-list';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import FeaturesList from '@components/organisms/features-list';
import ListArticle from '@components/organisms/list-article';
import Services from '@components/organisms/services';
import { FooterLinks } from '@locale/en.js';
import Footer from '@components/molecules/footer';

import { container } from '@styles/main.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import noImage from '@images/no-image.png';
import image1 from '@images/verify-your-team.png';
import DailyMovements from '@images/daily-movements.svg'; // TODO change svg when png is provided
import authorImage from '@images/authorImage.png';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Battery from '@images/battery.svg';

import icon18 from '@images/location@1x.png';
import icon19 from '@images/profile@1x.png';
import icon20 from '@images/timesheets@1x.png';

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';
import {
  checkListContainer,
  privacyContainer,
  imageContainer,
  learnMoreContainer,
} from './gps-location-tracking.module.scss';

const LocationTracking = () => {
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

  const checkList1 = [
    { title: `View any employee's status and location in a few taps` },
    { title: 'Increase team visibility, transparency, and accountability' },
    { title: `See clear daily timelines of every employee's activity` },
    { title: 'Make team management easier and less time-consuming' },
  ];

  const checkLists2 = [
    { title: `Gain a better understanding of your employees’ workdays` },
    { title: 'Trace the routes taken and stops made while on the clock' },
    { title: `Check how efficient employees are at completing jobs` },
    { title: `Identify different activities easily with color-coded routes` },
  ];

  const checkLists3 = [
    { title: `Ensure only hours worked are accounted for` },
    { title: 'Encourage your team to never turn up late for a job' },
    { title: `Prevent employees from “buddy punching”` },
    { title: `Save payroll costs and reduce time wastage` },
  ];

  const checkList4 = [
    {
      title: `Decide who’s locations are tracked, and who’s aren’t`,
      description: `Location tracking is completely optional. Don’t need it? Disable it! Atto gives you the power to decide which specific employees or teams require it.`,
    },
    {
      title: `Choose which type of location tracking to enable`,
      description:
        'You get to choose whether you require real-time location tracking, or alternatively, just the locations of where employees clock in and out.',
    },
    {
      title: `When work ends, so does location tracking`,
      description:
        'Atto never tracks more than is absolutely necessary. Whenever employees clock out, location tracking is turned off completely.',
    },
  ];

  const featuresList = [
    {
      title: 'Real-time Location Updates',
      description: 'See the location of your entire team of employees as they work in real-time.',
      logo: <Timer />,
    },
    {
      title: 'Clock in/out Location History',
      description: 'View GPS time stamps of your employees’ clock in and clock out locations.',
      logo: <Flag />,
    },
    {
      title: 'Named Job Sites',
      description:
        'Provide names for specific locations you operate from to make reporting easier.',
      logo: <Ringbell />,
    },
    {
      title: 'Location History Tracking',
      description: `View your employees’ location history throughout their entire day.`,
      logo: <MLogo />,
    },
    {
      title: 'Customizable GPS Tracking',
      description:
        'Choose the specific employees and teams that require location tracking for their job.',
      logo: <Brightness />,
    },
    {
      title: 'Geofencing',
      description: `Restrict employees from clocking in until they’ve arrived at a job site.`,
      logo: <Flag />,
    },
    {
      title: 'Built-in Battery Efficiency',
      description:
        'Never worry about your battery life being drained with battery-efficient GPS tracking technology.',
      logo: <Battery />,
    },
    {
      title: 'Compatible with most mobiles',
      description:
        'Use location tracking with most Apple and Android devices – no special equipment necessary.',
      logo: <Coffe />,
    },
    {
      title: 'Privacy Controls',
      description:
        'Stay in control of what gets tracked – real-time positions, clock in/out locations, or nothing at all.',
      logo: <Bookmark />,
    },
  ];

  const cardList = [
    {
      title: 'Boost Productivity',
      description: `See who’s nearest to a job site, and quickly deploy them – boosting efficiency and reducing costs.`,
    },
    {
      title: 'Increase Visibility',
      description: `Always know where your team is, and what they’re working on without any back and forth phone calls.`,
    },
    {
      title: 'Improve Safety',
      description: `Get peace of mind and help improve your team’s safety as they work in the field and move from job site to job site.`,
    },
  ];

  return (
    <div className={container}>
      <SEO title="GPS Location Tracking" />
      <Header />
      <MainTitleCard
        title="Be in the right place, at the right time"
        subtitle="Increase the accountability and transparency of your team with real-time updates on their location."
        hasParagraph
        showButton
        paragraph="GPS LOCATION TRACKING"
      />
      <Divider className="style2" />
      <Video />
      <Divider className="style2" />
      <div className={checkListContainer}>
        <CheckList list={checkList1} cardStyle="centerAligned" />
      </div>
      <Divider />
      <Title maxWidth={920} title="Track the locations of your entire team in real-time" />
      <Divider className="style5" />
      <StaticImage
        src="../../../images/track-team-locations@2x.png"
        alt="location of team"
        width={1139}
        height={340}
        quality={95}
      />
      <Divider className="style2" />
      <IconCardList noImage cardList={cardList} />
      <Divider />
      <ListArticle
        title="Keep track of your team's daily movements"
        description="Atto’s GPS location tracking generates simple map-based timelines of every employee’s daily movements. This helps you visualize their workdays in a clear, simple-to-understand fashion."
        list={checkLists2}
        image={<DailyMovements />}
      />
      <Divider />
      <ListArticle
        title="Verify your team is working at the right job site"
        description="Increase your team’s accountability by using geofencing to restrict them from clocking in until they’re at a job site."
        description2="Clock in/out locations are GPS stamped and job sites can be named so it’s easy to read reports and check activity."
        list={checkLists3}
        image={image1}
        isSwapped
        imageWidth={500}
        imageHeight={600}
      />
      <Divider />
      <Title
        title="Your privacy, our priority."
        description="You always stay in complete control of location tracking, providing peace of mind to your employees."
        maxDescriptionWidth={1040}
      />
      <Divider className="style3" />
      <div className={privacyContainer}>
        <CheckList list={checkList4} hasDescription />
        <div className={imageContainer}>
          <StaticImage
            src="../../../images/privacy-priority@2x.png"
            width={455}
            height={500}
            alt="Your privacy,our priority"
          />
        </div>
      </div>
      <Divider />
      <Title title="Our full suite of location tracking features at a glance" maxWidth={880} />
      <Divider className="style7" />
      <FeaturesList list={featuresList} />
      <Divider />
      <Cover isSwapped />
      <Divider className="style10" />
      <Title
        title="GPS location tracking for any industry"
        description="Atto helps all types of businesses across the world to manage their employees’ time."
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services list={serviceList} />
      <Divider />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennett - DPA Cleaning Services, Inc."
      />
      <Divider />
      <Title
        title={`It doesn't end here!`}
        description="Learn more about what Atto can do for you"
      />
      <Divider className="style6" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title="Time Tracking"
          description="See exactly where your employees’ time is going. Track work hours, breaks, overtime, time off, and more!."
          icon={icon18}
          path="/product/time-tracking"
          imageWidth={30}
          imageHeight={34}
        />
        <LearnMoreCard
          title="Team Activity"
          description="Stay in the loop with what’s happening – without having to pick up the phone."
          icon={icon19}
          path="/product/team-activity"
          imageWidth={42}
          imageHeight={44}
        />
        <LearnMoreCard
          title="Timesheets"
          description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
          icon={icon20}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
        />
      </div>
      <Divider className="style3" />
      <SubscribeBanner
        title="Near or far, stay in control of your team, wherever they are."
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
