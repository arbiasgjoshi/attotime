import React from 'react';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Title from '@components/molecules/title';
import MainTitleCard from '@components/molecules/main-title-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Article from '@components/molecules/article';
import FeaturesList from '@components/organisms/features-list';
import Cover from '@components/organisms/growth-numbers/cover';
import Services from '@components/organisms/services';
import Story from '@components/organisms/story';
import VideoCheckList from '@components/organisms/video-checklist';

import { FooterLinks } from '@locale/en.js';
import authorImage from '@images/authorImage.png';
import image1 from '@images/team-management-departments.png';
import image2 from '@images/find-out.png';
import image3 from '@images/eliminate-checks.png';
import image4 from '@images/activity-updates@2x.png';
import Team from '@images/team.svg';
import Timeline from '@images/timeline.svg';
import Departments from '@images/departments.svg';
import FilterAndSearch from '@images/filter-and-search.svg';
import Notifications from '@images/notifications.svg';
import Messaging from '@images/messaging.svg';

import icon14 from '@images/time-tracking-clock@1x.png';
import icon15 from '@images/location@1x.png';
import icon16 from '@images/timesheets@1x.png';

import { container, articleList } from '@styles/main.module.scss';

import { serviceList } from '@data/listed-data';

import {
  teamActivityContainer,
  learnMoreContainer,
  featuresStyle,
} from './team-activity.module.scss';

const TeamActivity = () => {
  const Intl = useIntl();

  const titleList2 = [
    { title: Intl.formatMessage({ id: 'pages.productTeamActivity.checkListItemZero' }) },
    { title: Intl.formatMessage({ id: 'pages.productTeamActivity.checkListItemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productTeamActivity.checkListItemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productTeamActivity.checkListItemThree' }) },
  ];

  const featureList2 = [
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureOneDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureOneTitle' }),
      logo: <Team />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureTwoDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureTwoTitle' }),
      logo: <Timeline />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureThreeTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureThreeDesc',
      }),
      logo: <Departments />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureFourTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureFourTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureFourDesc',
      }),
      logo: <FilterAndSearch />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureFiveTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureFiveTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureFiveDesc',
      }),
      logo: <Notifications />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureSixTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureSixTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureSixDesc',
      }),
      logo: <Messaging />,
    },
  ];

  return (
    <div className={`${teamActivityContainer} ${container}`}>
      <Seo title={Intl.formatMessage({ id: 'pages.productTeamActivity.name' })} />
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph={Intl.formatMessage({ id: 'pages.productTeamActivity.name' })}
        title={Intl.formatMessage({ id: 'pages.productTeamActivity.bannerTitle' })}
      />
      <Divider className="style2" />
      <VideoCheckList list={titleList2} cardStyle="centerAligned" />
      <Divider />
      <Title
        maxWidth={900}
        title={Intl.formatMessage({ id: 'pages.productTeamActivity.secondSectionTitle' })}
      />
      <Divider className="style2" />
      <div className={articleList}>
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.firstFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.firstFeatureDesc' })}
          image={image4}
          maxWidth={500}
          imagePadding="7.3rem 4.5rem"
          imageWidth={400}
          imageHeight={354}
        />
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.secondFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.secondFeatureDesc' })}
          image={image1}
          isSwapped
          maxWidth={500}
          imagePadding="4.4rem 5.9rem 4.3rem 5.3rem"
          imageWidth={398}
          imageHeight={413}
        />
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.thirdFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.thirdFeatureDesc' })}
          image={image2}
          maxWidth={500}
          imagePadding="3.3rem 4.2rem 2.4rem 10.7rem"
          imageWidth={371}
          imageHeight={443}
        />
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.fourthFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.fourthFeatureDesc' })}
          image={image3}
          isSwapped
          maxWidth={500}
          imagePadding="5.6rem 5.5rem"
          imageWidth={380}
          imageHeight={388}
        />
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.fifthFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.fifthFeatureDesc' })}
          image={image1}
          maxWidth={500}
          imagePadding="1.8rem 5.5rem"
          imageWidth={400}
          imageHeight={464}
        />
      </div>
      <Divider />
      <Title
        maxWidth={880}
        title={Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionTitle' })}
      />
      <Divider className="style3" />
      <div className={featuresStyle}>
        <FeaturesList list={featureList2} />
      </div>
      <Divider />
      <Cover isSwapped />
      <Divider className="style10" />
      <Title
        title={Intl.formatMessage({ id: 'pages.homepage.thirdSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.seventhSectionDesc' })}
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
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.eighthSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.eighthSectionDesc' })}
        smallerMargin
      />
      <Divider className="style2" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureOneDesc',
          })}
          icon={icon14}
          path="/product/time-tracking"
          imageWidth={30}
          imageHeight={34}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneDesc',
          })}
          icon={icon15}
          path="/product/gps-location-tracking"
          imageWidth={27}
          imageHeight={32}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureThreeDesc',
          })}
          icon={icon16}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
        />
      </div>
      <Divider />
      <SubscribeBanner
        title={Intl.formatMessage({
          id: 'pages.productTeamActivity.subscribeBanner',
        })}
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  );
};

export default TeamActivity;
