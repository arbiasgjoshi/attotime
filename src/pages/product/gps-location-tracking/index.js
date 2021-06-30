import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import CheckList from '@components/molecules/check-list';
import MainTitleCard from '@components/molecules/main-title-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import Cover from '@components/organisms/growth-numbers/cover';
import FeaturesList from '@components/organisms/features-list';
import ListArticle from '@components/organisms/list-article';
import Services from '@components/organisms/services';
import VideoCheckList from '@components/organisms/video-checklist';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Battery from '@images/battery.svg';

import verifyTeamEn from '@images/en/gps-location-tracking/Verify your team are working where they should be@2x.png';
import verifyTeamDe from '@images/de/gps-location-tracking/DE_Verify your team are working where they should be@2x.png';
import verifyTeamFr from '@images/fr/gps-location-tracking/FR_Verify your team are working where they should be@2x.png';
import verifyTeamEs from '@images/es/gps-location-tracking/ES_Verify your team are working where they should be@2x.png';

import reviewImage from '@images/en/gps-location-tracking/Time tracking app review@2x.png';

import movements from '@images/en/gps-location-tracking/Keep track of your team’s daily movements@2x.png';

import icon18 from '@images/location@1x.png';
import icon19 from '@images/profile@1x.png';
import icon20 from '@images/timesheets@1x.png';

import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';

import { teamActivityContainer, learnMoreContainer } from '../product.module.scss';
import { privacyContainer, imageContainer } from './gps-location-tracking.module.scss';

const LocationTracking = () => {
  const Intl = useIntl();

  const checkList1 = [
    { title: Intl.formatMessage({ id: 'pages.productLocationTracking.checkListItemZero' }) },
    { title: Intl.formatMessage({ id: 'pages.productLocationTracking.checkListItemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productLocationTracking.checkListItemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productLocationTracking.checkListItemThree' }) },
  ];

  const cardList = [
    {
      title: Intl.formatMessage({ id: 'pages.productLocationTracking.additionalFeatureOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.additionalFeatureOneDesc',
      }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productLocationTracking.additionalFeatureTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.additionalFeatureTwoDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.additionalFeatureThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.additionalFeatureThreeDesc',
      }),
    },
  ];

  const checkLists2 = [
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.locationTrackingFeatureOneCheckItemOne',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.locationTrackingFeatureOneCheckItemTwo',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.locationTrackingFeatureOneCheckItemThree',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.locationTrackingFeatureOneCheckItemFour',
      }),
    },
  ];

  const checkLists3 = [
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.locationTrackingFeatureTwoCheckItemOne',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.locationTrackingFeatureTwoCheckItemTwo',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.locationTrackingFeatureTwoCheckItemThree',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.locationTrackingFeatureTwoCheckItemFour',
      }),
    },
  ];

  const checkList4 = [
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.thirdSectionCheckItemOneTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.thirdSectionCheckItemOneDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.thirdSectionCheckItemTwoTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.thirdSectionCheckItemTwoDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.thirdSectionCheckItemThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.thirdSectionCheckItemThreeDesc',
      }),
    },
  ];

  const featuresList = [
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureOneTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureOneDesc',
      }),
      logo: <Timer />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureTwoTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureTwoDesc',
      }),
      logo: <Flag />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureThreeDesc',
      }),
      logo: <Ringbell />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureFourTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureFourDesc',
      }),
      logo: <MLogo />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureFiveTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureFiveDesc',
      }),
      logo: <Brightness />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureSixTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureSixDesc',
      }),
      logo: <Flag />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureSevenTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureSevenDesc',
      }),
      logo: <Battery />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureEightTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureEightDesc',
      }),
      logo: <Coffe />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureNineTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureNineDesc',
      }),
      logo: <Bookmark />,
    },
  ];

  const imageTwoLocale = (loc) => {
    if (loc === 'en') {
      return verifyTeamEn;
    }
    if (loc === 'de') {
      return verifyTeamDe;
    }
    if (loc === 'fr') {
      return verifyTeamFr;
    }
    if (loc === 'es') {
      return verifyTeamEs;
    }
  };

  const imageOneLocale = (loc) => {
    if (loc === 'en') {
      return (
        <StaticImage
          src="../../../images/en/gps-location-tracking/Track the locations of your entire team in real-time@2x.png"
          alt={Intl.formatMessage({ id: 'pages.productLocationTracking.secondSectionTitle' })}
          width={1140}
          height={340}
          quality={95}
          placeholder="none"
        />
      );
    }
    if (loc === 'de') {
      return (
        <StaticImage
          src="../../../images/de/gps-location-tracking/DE_Track the locations of your entire team in real-time@2x.png"
          alt={Intl.formatMessage({ id: 'pages.productLocationTracking.secondSectionTitle' })}
          width={1140}
          height={340}
          quality={95}
          placeholder="none"
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          src="../../../images/fr/gps-location-tracking/FR_Track the locations of your entire team in real-time@2x.png"
          alt={Intl.formatMessage({ id: 'pages.productLocationTracking.secondSectionTitle' })}
          width={1140}
          height={340}
          quality={95}
          placeholder="none"
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          src="../../../images/es/gps-location-tracking/ES_Track the locations of your entire team in real-time@2x.png"
          alt={Intl.formatMessage({ id: 'pages.productLocationTracking.secondSectionTitle' })}
          width={1140}
          height={340}
          quality={95}
          placeholder="none"
        />
      );
    }
  };

  return (
    <div className={`${container} ${teamActivityContainer}`}>
      <Seo
        title={Intl.formatMessage({ id: 'pages.productLocationTracking.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.productLocationTracking.metaDescription' })}
      />
      <Header />
      <MainTitleCard
        paragraph={Intl.formatMessage({ id: 'pages.productLocationTracking.name' })}
        title={Intl.formatMessage({ id: 'pages.productLocationTracking.bannerTitle' })}
        subtitle={Intl.formatMessage({ id: 'pages.productLocationTracking.bannerDescription' })}
        hasParagraph
        showButton
      />
      <Divider className="style2" />
      <VideoCheckList list={checkList1} cardStyle="centerAligned" />
      <Divider />
      <Title
        maxWidth={920}
        title={Intl.formatMessage({ id: 'pages.productLocationTracking.secondSectionTitle' })}
      />
      <Divider className="style5" />
      {imageOneLocale(Intl.locale)}
      <Divider className="style2" />
      <IconCardList noImage cardList={cardList} />
      <Divider />
      <ListArticle
        title={Intl.formatMessage({
          id: 'pages.productLocationTracking.locationTrackingFeatureOneTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productLocationTracking.locationTrackingFeatureOneDesc',
        })}
        list={checkLists2}
        imageWidth="500"
        imageHeight="600"
        image={movements}
      />
      <Divider />
      <ListArticle
        title={Intl.formatMessage({
          id: 'pages.productLocationTracking.locationTrackingFeatureTwoTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productLocationTracking.locationTrackingFeatureTwoDescOne',
        })}
        description2={Intl.formatMessage({
          id: 'pages.productLocationTracking.locationTrackingFeatureTwoDescTwo',
        })}
        list={checkLists3}
        image={imageTwoLocale(Intl.locale)}
        isSwapped
        imageWidth={500}
        imageHeight={600}
      />
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productLocationTracking.thirdSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productLocationTracking.thirdSectionDesc',
        })}
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
            quality={90}
            placeholder="none"
            title={Intl.formatMessage({
              id: 'pages.productLocationTracking.thirdSectionTitle',
            })}
          />
        </div>
      </div>
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productLocationTracking.fourthSectionTitle',
        })}
        maxWidth={880}
      />
      <Divider className="style7" />
      <FeaturesList list={featuresList} />
      <Divider />
      <Cover
        isSwapped
        titleValue={Intl.formatMessage({ id: 'pages.miscellaneous.trustedGlobally' })}
      />
      <Divider className="style10" />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productLocationTracking.fifthSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productTimeTracking.seventhSectionDesc',
        })}
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services />
      <Divider />
      <Story
        img={reviewImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennett - DPA Cleaning Services, Inc."
      />
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionDesc',
        })}
        smallerMargin
      />
      <Divider className="style6" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureOneDesc',
          })}
          icon={icon18}
          path="/product/time-tracking"
          imageWidth={30}
          imageHeight={34}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureTwoTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureTwoDesc',
          })}
          icon={icon19}
          path="/product/team-activity"
          imageWidth={42}
          imageHeight={44}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureThreeDesc',
          })}
          icon={icon20}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
        />
      </div>
      <Divider className="style3" />
      <SubscribeBanner
        title={Intl.formatMessage({
          id: 'pages.productLocationTracking.subscribeBannerTitle',
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

export default LocationTracking;
