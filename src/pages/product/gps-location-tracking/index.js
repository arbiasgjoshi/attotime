import React from 'react';

import Header from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Title from '@components/molecules/title';
import MainTitleCard from '@components/molecules/main-title-card';
import IconCardList from '@components/organisms/icon-card-list';
import Video from '@components/molecules/video';
import CheckList from '@components/molecules/check-list';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import CheckListArticle from '@components/organisms/check-list-article';
import { FooterLinks } from '@locale/en.js';
import Footer from '@components/molecules/footer';

import { container } from '@styles/main.module.scss';
import { checkListContainer } from './gps-location-tracking.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import noImage from '@images/no-image.png';
import image1 from '@images/verify-your-team.png';

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
        src="../../../images/track-team-locations.svg"
        alt="location of team"
        width={1140}
        height={312}
      />
      <Divider className="smallest" />
      <IconCardList noImage cardList={cardList} />
      <Divider />
      <CheckListArticle
        title="Keep track of your team's daily movements"
        description="Atto's GPS location tracking generates simple map-based timelines of every employee's daily movements. This helps you visualize their workdays in a clear, simple-to-udnerstand fashion."
        list={checkLists2}
        image={noImage}
      />
      <Divider />
      <CheckListArticle
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
