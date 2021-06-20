import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import VideoCheckList from '@components/organisms/video-checklist';
import MainTitleCard from '@components/molecules/main-title-card';
import FeatureCard from '@components/molecules/feature-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import IconCard from '@components/molecules/icon-card';
import Title from '@components/molecules/title';
import CheckList from '@components/molecules/check-list';
// import ImageSlider from '@components/molecules/image-slider';
import IconCardList from '@components/organisms/icon-card-list';
import FeaturesList from '@components/organisms/features-list';
import GrowthNumbers from '@components/organisms/growth-numbers';
import Services from '@components/organisms/services';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import { container, imageWrapper } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';
import authorImage from '@images/authorImage.png';
import noImage from '@images/no-image.png';

import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Clock from '@images/clock.svg';
import Browser from '@images/browser.svg';
import Darkmode from '@images/darkMode.svg';
import Notes from '@images/notes.svg';
import Overtime from '@images/overtime.svg';

import icon from '@images/easy-to-use.png';
import icon2 from '@images/accurate.png';
import icon3 from '@images/trustworthy.png';
import icon4 from '@images/clock-in-out.png';
import icon5 from '@images/write-notes.png';
import icon6 from '@images/track-breaks.png';
import icon7 from '@images/manage-overtime.png';
import icon8 from '@images/switch-between-jobs.png';
import icon9 from '@images/add-time-off.png';

import icon22 from '@images/employees_forget.png';
import icon23 from '@images/out-of-battery.png';
import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';

import { serviceList, overviewAdminList } from '@data/listed-data';

import {
  timeTrackingContainer,
  learnMoreContainer,
  workListContainer,
  workListItem,
  commonProblemsContainer,
} from './time-tracking.module.scss';

const TimeTracking = () => {
  const Intl = useIntl();

  const timeTrackingTitleList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListItemZero' }),
      id: '1asdd1a',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListItemOne' }),
      id: '1asdd1b',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListItemTwo' }),
      id: '1asdd1c',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListItemThree' }),
      id: '1asdd1d',
    },
  ];

  const timeTrackingFeatures = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleOne' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemDescOne' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleOne' }),
      icon,
      imagePadding: '.8rem 3.1rem 1.5rem 3rem',
      imageWidth: 59,
      imageHeight: 97,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleTwo' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemDescTwo' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleTwo' }),
      icon: icon2,
      imagePadding: '.8rem .6rem 1.9rem 2rem',
      imageWidth: 94,
      imageHeight: 93,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleThree' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemDescThree' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleThree' }),
      icon: icon3,
      imagePadding: '1.2rem 1rem',
      imageWidth: 100,
      imageHeight: 96,
    },
  ];

  const timeTrackingOtherFeatures = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleOne' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescOne' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleOne' }),
      icon: icon4,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleTwo' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescTwo' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleTwo' }),
      icon: icon5,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleThree' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescThree' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleThree' }),
      icon: icon6,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleFour' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescFour' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleFour' }),
      icon: icon7,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleFive' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescFive' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleFive' }),
      icon: icon8,
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleSix' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescSix' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleSix' }),
      icon: icon9,
      imageWidth: 350,
      imageHeight: 244,
    },
  ];

  const overviewAdminList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureOneTitle' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureOneDesc' }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureTwoTitle' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureTwoDesc' }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.checkListFeatureThreeDesc',
      }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureFourTitle' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureFourDesc' }),
    },
  ];

  const timeTrackingFeatureList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesOneDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesOneTitle' }),
      logo: <Timer />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwoDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwoTitle' }),
      logo: <Flag />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesThreeDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesThreeTitle' }),
      logo: <Ringbell />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFourTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesFourDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFourTitle' }),
      logo: <MLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFiveTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesFiveDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFiveTitle' }),
      logo: <Brightness />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSixTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesSixDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSixTitle' }),
      logo: <Notes />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSevenTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesSevenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSevenTitle' }),
      logo: <Overtime />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesEightTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesEightDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesEightTitle' }),
      logo: <Coffe />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesNineTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesNineDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesNineTitle' }),
      logo: <Bookmark />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTenTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTenTitle' }),
      logo: <Clock />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesElevenTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesElevenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesElevenTitle' }),
      logo: <Browser />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveTitle' }),
      logo: <Darkmode />,
    },
  ];

  return (
    <div className={`${container} ${timeTrackingContainer}`}>
      <Seo title={Intl.formatMessage({ id: 'pages.productTimeTracking.name' })} />
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph={Intl.formatMessage({ id: 'pages.productTimeTracking.name' })}
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.bannerTitle' })}
        subtitle={Intl.formatMessage({ id: 'pages.productTimeTracking.bannerDescription' })}
      />
      <Divider className="style2" />
      <VideoCheckList
        list={timeTrackingTitleList}
        cardStyle="centerAligned"
        videoUrl="https://www.youtube.com/watch?v=DTvS9lvRxZ8"
      />
      <Divider />
      <StaticImage
        alt="Clock In"
        height={502}
        quality={95}
        placeholder="none"
        src="../../../images/banner-image-2@2x.png"
      />
      <Divider className="style3" />
      <IconCardList middleAligned cardList={timeTrackingFeatures} />
      <Divider />
      <Title
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.secondSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.secondSectionDesc' })}
        maxDescriptionWidth={800}
      />
      <Divider className="style7" />
      <IconCardList cardList={timeTrackingOtherFeatures} hasBigImages style="smallerMargin" />
      <Divider />
      <Title
        maxWidth={950}
        maxDescriptionWidth={800}
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.thirdSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.thirdSectionDesc' })}
      />
      <Divider className="style7" />
      <div className={workListContainer}>
        <div>
          <StaticImage
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
            height={378}
            width={380}
            quality={95}
            placeholder="none"
            src="../../../images/time-tracking-on-web@2x.png"
          />
          <FeatureCard
            isWorkCard
            title={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
            description={Intl.formatMessage({
              id: 'pages.productTimeTracking.imageIconFeatureDescOne',
            })}
            logo={<WebTracking />}
            imagePadding=".8rem 2.9rem .797rem .1rem"
          />
        </div>
        <div className={workListItem}>
          <StaticImage
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleTwo' })}
            height={378}
            width={380}
            quality={95}
            placeholder="none"
            src="../../../images/time-tracking-mobile-app@2x.png"
          />
          <FeatureCard
            isWorkCard
            title={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleTwo' })}
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleTwo' })}
            description={Intl.formatMessage({
              id: 'pages.productTimeTracking.imageIconFeatureDescTwo',
            })}
            logo={<MobileTracking />}
            imagePadding=".5rem 3.24rem .587rem 0"
          />
        </div>
        <div className={workListItem}>
          <StaticImage
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleThree' })}
            height={378}
            width={380}
            quality={95}
            placeholder="none"
            src="../../../images/time-clock-kiosk@2x.png"
          />
          <FeatureCard
            isWorkCard
            title={Intl.formatMessage({
              id: 'pages.productTimeTracking.imageIconFeatureTitleThree',
            })}
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleThree' })}
            description={Intl.formatMessage({
              id: 'pages.productTimeTracking.imageIconFeatureDescThree',
            })}
            logo={<KioskTracking />}
            imagePadding=".9rem 2.5rem .85rem .4rem"
            comingSoon
          />
        </div>
      </div>
      <Divider />
      <Title
        maxWidth={860}
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.fourthSectionTitle' })}
      />
      <Divider className="style7" />
      <div className={imageWrapper}>
        <StaticImage
          src="../../../images/admin-panel.png"
          alt="admin-panel-image"
          width={1170}
          quality={96}
          placeholder="none"
        />
      </div>
      <Divider className="style3" />
      <CheckList list={overviewAdminList} hasDescription cardStyle="big" />
      <Divider />
      <Title
        maxWidth={880}
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.fifthSectionTitle' })}
      />
      <Divider className="style3" />
      <FeaturesList list={timeTrackingFeatureList} />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Title title={Intl.formatMessage({ id: 'pages.productTimeTracking.sixthSectionTitle' })} />
      <Divider className="style7" />
      <div className={commonProblemsContainer}>
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={icon22}
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureOneTitle',
          })}
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.commonProblemFeatureOneTitle' })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureOneDesc',
          })}
        />
        <IconCard
          isRound
          bigImage
          icon={icon23}
          imageWidth={250}
          imageHeight={250}
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureTwoTitle',
          })}
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.commonProblemFeatureTwoTitle' })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureTwoDesc',
          })}
        />
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={noImage}
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureThreeTitle',
          })}
          alt={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureThreeDesc',
          })}
        />
      </div>
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.seventhSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productTimeTracking.seventhSectionDesc',
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
        smallerMargin
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionDesc',
        })}
      />
      <Divider className="style6" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneDesc',
          })}
          icon={icon32}
          path="/product/gps-location-tracking"
          imageWidth={27}
          imageHeight={32}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureTwoTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureTwoDesc',
          })}
          icon={icon33}
          path="/product/team-activity"
          imageWidth={42}
          imageHeight={44}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureThreeDesc',
          })}
          icon={icon34}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
        />
      </div>
      <Divider />
      <SubscribeBanner
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.subscribeBannerTitle',
        })}
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        bannerImage
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  );
};

export default TimeTracking;
