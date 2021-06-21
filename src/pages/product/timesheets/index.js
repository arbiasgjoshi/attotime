import React from 'react';
import { FooterLinks } from '@locale/en.js';
import { container, imageFormWrapper } from '@styles/main.module.scss';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import IconCard from '@components/molecules/icon-card';
import MainTitleCard from '@components/molecules/main-title-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Story from '@components/organisms/story';
import FeaturesList from '@components/organisms/features-list';
import ListArticle from '@components/organisms/list-article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import GrowthNumbers from '@components/organisms/growth-numbers';
import VideoCheckList from '@components/organisms/video-checklist';
import Services from '@components/organisms/services';
import ProductOverviewBanner from '@images/product-overview-banner-image.svg';

import authorImage from '@images/authorImage.png';
import noImage from '@images/no-image.png';
import roundImage2 from '@images/syncWithPayroll2x.png';
import roundImage3 from '@images/timesheets-inbox2x.png';

import icon from '@images/accurate.png';
import icon2 from '@images/trustworthy.png';
import icon3 from '@images/instantly-available@2x.png';

import AllTimesheets from '@images/All_featres_TimesheetsAndroid.svg';
import AllFeatureEmail from '@images/All_featres_emailAndroid.svg';
import AvoidGuess from '@images/avoid_guesstimation.svg';
import Wages from '@images/wages.svg';
import Share from '@images/share.svg';
import AllFeatresRounding from '@images/featres_rounding.svg';
import ChangeHistory from '@images/change_history.svg';
import ArchivedMembers from '@images/Archived_membersSVG.svg';
import WageEstimate from '@images/Wage_estimatesSVG.svg';

import icon20 from '@images/time-tracking-clock@1x.png';
import icon21 from '@images/location@1x.png';
import icon22 from '@images/profile@1x.png';

import Activity from '@images/activitySVG.svg'; // TODO change svg when png is provided

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';
import photo1 from '../../../images/boost_productivity.png';
import {
  teamActivityContainer,
  roundImagesContainer,
  learnMoreContainer,
  readyMadeTitle,
} from './timesheets.module.scss';

const Timesheets = () => {
  const Intl = useIntl();

  const checkLists = [
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.checkListItemZero' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.checkListItemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.checkListItemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.checkListItemThree' }) },
  ];

  const checkLists2 = [
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureCheckitemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureCheckitemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureCheckitemThree' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureCheckitemFour' }) },
  ];

  const checkLists3 = [
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureCheckitemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureCheckitemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureCheckitemThree' }) },
  ];

  const firstList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureOneTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.secondSectionFeatureOneDesc',
      }),
      icon,
      imageWidth: 94,
      imageHeight: 93,
      imagePadding: '.8rem .6rem 1.9rem 2rem',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureTwoTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.secondSectionFeatureTwoDesc',
      }),
      icon: icon2,
      imageWidth: 100,
      imageHeight: 96,
      imagePadding: '1.2rem 1rem',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.secondSectionFeatureThreeDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureThreeTitle' }),
      icon: icon3,
      imageWidth: 120,
      imageHeight: 120,
      imagePadding: '.6rem 0 0 .6rem',
    },
  ];

  const featureList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureOneDesc',
      }),
      logo: <AllTimesheets />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureTwoDesc',
      }),
      logo: <AllFeatureEmail />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureThreeDesc',
      }),
      logo: <AvoidGuess />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureFourTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureFourDesc',
      }),
      logo: <Wages />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureFiveTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureFiveDesc',
      }),
      logo: <Share />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureSixTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureSixDesc',
      }),
      logo: <AllFeatresRounding />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureSevenTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureSevenDesc',
      }),
      logo: <ChangeHistory />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureEightTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureEightDesc',
      }),
      logo: <ArchivedMembers />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureNineTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureNineDesc',
      }),
      logo: <WageEstimate />,
    },
  ];

  const serviceList = [
    { title: 'Construction', url: '/industries/construction', icon: <ConstructionLogo /> },
    { title: 'Landscaping & Gardening', url: '/industries/landscaping', icon: <LandscapingLogo /> },
    { title: 'Roofing', url: '/industries/roofing', icon: <RoofingLogo /> },
    {
      title: 'Painting & Decorating',
      url: '/industries/painting-and-decorating',
      icon: <PaintingLogo />,
    },
    {
      title: 'Cleaning & Maintenance',
      url: '/industries/cleaning-and-maintenance',
      icon: <CleaningLogo />,
    },
    {
      title: 'Healthcare & Medical',
      url: '/industries/healthcare-and-medical',
      icon: <HealthcareLogo />,
    },
    { title: 'Electrical', url: '/industries/electrical', icon: <ElectrianLogo /> },
    {
      title: 'Plumbing & Heating',
      url: '/industries/plumbing-and-heating',
      icon: <PlumbingLogo />,
    },
    { title: 'Other industries', url: '/industries/electrical', icon: <ThreeDots /> },
  ];

  return (
    <div className={`${container} ${teamActivityContainer}`}>
      <Seo title={Intl.formatMessage({ id: 'pages.productTimesheets.name' })} />
      <Header />
      <MainTitleCard
        maxParagraphWidth={760}
        hasParagraph
        showButton
        paragraph={Intl.formatMessage({ id: 'pages.productTimesheets.name' })}
        title={Intl.formatMessage({ id: 'pages.productTimesheets.bannerTitle' })}
        subtitle={Intl.formatMessage({ id: 'pages.productTimesheets.bannerDescription' })}
      />
      <Divider className="style2" />
      <VideoCheckList list={checkLists} cardStyle="centerAligned" />
      <Divider />
      <div className={readyMadeTitle}>
        <Title
          title={Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionDesc' })}
          maxDescriptionWidth={980}
        />
      </div>
      <Divider className="style01" />
      <div className={imageFormWrapper}>
        <ProductOverviewBanner />
      </div>
      <Divider className="style3" />
      <IconCardList cardList={firstList} style="smallTimesheetImages" />
      <Divider />
      <ListArticle
        title={Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureDesc' })}
        list={checkLists2}
        image={photo1}
        textMargin="10.3 0"
      />
      <Divider />
      <ListArticle
        title={Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureDesc' })}
        list={checkLists3}
        image={<Activity />}
        isSwapped
        textMargin="5.8rem 0"
      />
      <Divider />
      <Title
        maxWidth={880}
        title={Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionTitle' })}
      />
      <Divider className="style3" />
      <FeaturesList list={featureList} />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Title
        title={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionDesc' })}
        maxDescriptionWidth={1000}
      />
      <Divider className="style2" />
      <div className={roundImagesContainer}>
        <IconCard
          isRound
          bigImage
          icon={noImage}
          title={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureOneTitle' })}
          alt={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureOneTitle' })}
          description={Intl.formatMessage({
            id: 'pages.productTimesheets.fourthSectionFeatureOneDesc',
          })}
          style="timesheetMargin"
        />
        <IconCard
          isRound
          bigImage
          icon={roundImage2}
          title={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureTwoTitle' })}
          alt={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureTwoTitle' })}
          description={Intl.formatMessage({
            id: 'pages.productTimesheets.fourthSectionFeatureTwoDesc',
          })}
          style="timesheetMargin"
        />
        <IconCard
          isRound
          bigImage
          icon={roundImage3}
          title={Intl.formatMessage({
            id: 'pages.productTimesheets.fourthSectionFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimesheets.fourthSectionFeatureThreeDesc',
          })}
          alt={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureThreeTitle' })}
          style="timesheetMargin"
        />
      </div>
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productTimesheets.fifthSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.homepage.thirdSectionDesc',
        })}
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
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionDesc',
        })}
        marginBottom=".4rem"
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
          icon={icon20}
          path="/product/time-tracking"
        />

        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneDesc',
          })}
          icon={icon21}
          path="/product/gps-location-tracking"
        />

        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureTwoTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureTwoDesc',
          })}
          icon={icon22}
          path="/product/team-activity"
        />
      </div>
      <Divider className="style3" />
      <SubscribeBanner
        title={Intl.formatMessage({
          id: 'pages.productTimesheets.subscribeBanner',
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

export default Timesheets;
