import React from 'react';

import HeaderComponent from '@components/molecules/header';
import MainTitleCard from '@components/molecules/main-title-card';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
import { StaticImage } from 'gatsby-plugin-image';
import Divider from '@components/atoms/divider';
import EmailForm from '@components/atoms/email-form';
import { FooterLinks } from '@locale/en.js';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import ProductCard from '@components/organisms/product-card';
import GrowthNumbers from '@components/organisms/growth-numbers';
import FooterComponent from '@components/molecules/footer';

import { container, imageFormWrapper, imageWrapper } from '@styles/main.module.scss';
// import ProductOverviewBanner from '@images/product-overview-banner-image.svg';
// import { StaticImage } from 'gatsby-plugin-image';
// import image1 from '@images/time-tracking-fingertips@2x.png';
// import image2 from '@images/know-where-is-team.png';
// import image3 from '@images/stay-in-loop.png';
// import image4 from '@images/relax-with-timesheets@2x.png';

import authorImage from '@images/en/overview/Time tracking app review@2x.png';

import icon from '@images/easy-to-use.png';
import icon2 from '@images/All_in_one@2x.png';
import icon3 from '@images/Time_saving@2x.png';

import imgLocaleOneEn from '@images/en/overview/Atto - time and location tracking app generating timesheets@2x.png';
import imgLocaleOneDe from '@images/de/overview/DE_Atto - time and location tracking app generating timesheet@2x.png';
import imgLocaleOneEs from '@images/es/overview/ES_Atto - time and location tracking app generating timesheets@2x.png';
import imgLocaleOneFr from '@images/fr/overview/FR_Atto - time and location tracking app generating timesheets@2x.png';

import imgLocaleTwoEn from '@images/en/overview/Know where your team is in real-time@2x.png';
import imgLocaleTwoDe from '@images/de/overview/DE_Know where your team is in real-time@2x.png';
import imgLocaleTwoEs from '@images/es/overview/ES_Know where your team is in real-time@2x.png';
import imgLocaleTwoFr from '@images/fr/overview/FR_Know where your team is in real-time@2x.png';

import imgLocaleThreeEn from '@images/en/overview/Stay in the loop as work happens@2x.png';
import imgLocaleThreeDe from '@images/de/overview/DE_Stay in the loop as work happens@2x.png';
import imgLocaleThreeEs from '@images/es/overview/ES_Stay in the loop as work happens@2x.png';
import imgLocaleThreeFr from '@images/fr/overview/FR_Stay in the loop as work happens@2x.png';

import imgLocaleFourEn from '@images/en/overview/Relax with timesheets on time, every time@2x.png';
import imgLocaleFourDe from '@images/de/overview/DE_Relax with timesheets on time, every time@2x.png';
import imgLocaleFourEs from '@images/es/overview/ES_Relax with timesheets on time, every time@2x.png';
import imgLocaleFourFr from '@images/fr/overview/FR_Relax with timesheets on time, every time@2x.png';

import { productContainer } from './product.module.scss';

const Product = () => {
  const Intl = useIntl();

  const firstList = [
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.featureItemTitleOne' }),
      description: Intl.formatMessage({ id: 'pages.productOverview.featureItemDescOne' }),
      alt: Intl.formatMessage({ id: 'pages.productOverview.featureItemTitleOne' }),
      icon,
      imageWidth: 59,
      imageHeight: 97,
      imagePadding: '.8rem 3.1rem 1.5rem 3rem',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.featureItemTitleTwo' }),
      description: Intl.formatMessage({ id: 'pages.productOverview.featureItemDescTwo' }),
      alt: Intl.formatMessage({ id: 'pages.productOverview.featureItemTitleTwo' }),
      icon: icon2,
      imageWidth: 80,
      imageHeight: 75,
      imagePadding: '2.3rem 2rem 2.2rem 2rem',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.featureItemTitleThree' }),
      description: Intl.formatMessage({ id: 'pages.productOverview.featureItemDescThree' }),
      alt: Intl.formatMessage({ id: 'pages.productOverview.featureItemTitleThree' }),
      icon: icon3,
      imageWidth: 85,
      imageHeight: 96,
      imagePadding: '1.2rem 1.72rem 1.269rem 1.8rem',
    },
  ];

  const productList1 = [
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.mainFeatureOneCheckItemOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productOverview.mainFeatureOneCheckItemOneDesc',
      }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.mainFeatureOneCheckItemTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productOverview.mainFeatureOneCheckItemTwoDesc',
      }),
    },
  ];

  const productList2 = [
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.mainFeatureTwoCheckItemOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productOverview.mainFeatureTwoCheckItemOneDesc',
      }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.mainFeatureTwoCheckItemTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productOverview.mainFeatureTwoCheckItemTwoDesc',
      }),
    },
  ];

  const productList3 = [
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.mainFeatureThreeCheckItemOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productOverview.mainFeatureThreeCheckItemOneDesc',
      }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.mainFeatureThreeCheckItemTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productOverview.mainFeatureThreeCheckItemTwoDesc',
      }),
    },
  ];

  const productList4 = [
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.mainFeatureFourCheckItemOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productOverview.mainFeatureFourCheckItemOneDesc',
      }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productOverview.mainFeatureFourCheckItemTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productOverview.mainFeatureFourCheckItemTwoDesc',
      }),
    },
  ];

  const imageLocaleOne = (loc) => {
    if (loc === 'en') {
      //
      return imgLocaleOneEn;
    }
    if (loc === 'es') {
      //
      return imgLocaleOneEs;
    }
    if (loc === 'fr') {
      //
      return imgLocaleOneFr;
    }
    if (loc === 'de') {
      //
      return imgLocaleOneDe;
    }
  };

  const imageLocaleTwo = (loc) => {
    if (loc === 'en') {
      //
      return imgLocaleTwoEn;
    }
    if (loc === 'es') {
      //
      return imgLocaleTwoEs;
    }
    if (loc === 'fr') {
      //
      return imgLocaleTwoFr;
    }
    if (loc === 'de') {
      //
      return imgLocaleTwoDe;
    }
  };

  const imageLocaleThree = (loc) => {
    if (loc === 'en') {
      //
      return imgLocaleThreeEn;
    }
    if (loc === 'es') {
      //
      return imgLocaleThreeEs;
    }
    if (loc === 'fr') {
      //
      return imgLocaleThreeFr;
    }
    if (loc === 'de') {
      //
      return imgLocaleThreeDe;
    }
  };

  const imageLocaleFour = (loc) => {
    if (loc === 'en') {
      //
      return imgLocaleFourEn;
    }
    if (loc === 'es') {
      //
      return imgLocaleFourEs;
    }
    if (loc === 'fr') {
      //
      return imgLocaleFourFr;
    }
    if (loc === 'de') {
      //
      return imgLocaleFourDe;
    }
  };

  const bannerImage = (loc) => {
    if (loc === 'en') {
      return (
        <StaticImage
          src="../../../images/en/timesheets/Everything you need to keep track of your employees’ time@2x.png"
          alt="admin-panel-image"
          width={1220}
          quality={100}
          placeholder="none"
        />
      );
    }
    if (loc === 'de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_Everything you need to keep track of your employees’ time@2x.png"
          alt="admin-panel-image"
          width={1220}
          quality={100}
          placeholder="none"
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_Everything you need to keep track of your employees’ time@2x.png"
          alt="admin-panel-image"
          width={1220}
          quality={100}
          placeholder="none"
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          src="../../../images/fr/timesheets/FR_Everything you need to keep track of your employees’ time@2x.png"
          alt="admin-panel-image"
          width={1220}
          quality={100}
          placeholder="none"
        />
      );
    }
  };

  return (
    <div className={`${container} ${productContainer}`}>
      <Seo
        title={Intl.formatMessage({ id: 'pages.productOverview.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.productOverview.metaDescription' })}
      />
      <HeaderComponent />
      <MainTitleCard
        maxParagraphWidth={760}
        title={Intl.formatMessage({ id: 'pages.productOverview.bannerTitle' })}
        subtitle={Intl.formatMessage({ id: 'pages.productOverview.bannerDescription' })}
      />
      <div className={imageFormWrapper}>
        <EmailForm
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
          style="productPage"
        />
        <Divider className="style0" />
        {/* <ProductOverviewBanner /> */}
      </div>
      <div className={imageWrapper} style={{ width: 'calc(100% + 70px)' }}>
        {bannerImage(Intl.locale)}
      </div>
      <Divider className="style31" />
      <IconCardList cardList={firstList} style="smallTimesheetImages" />
      <Divider />
      <ProductCard
        productName={Intl.formatMessage({ id: 'header.menu.timeTrackingLabel' })}
        title={Intl.formatMessage({ id: 'pages.productOverview.mainFeatureTitleOne' })}
        description={Intl.formatMessage({ id: 'pages.productOverview.mainFeatureDescOne' })}
        list={productList1}
        image={imageLocaleOne(Intl.locale)}
        imagePadding="3.5rem 3.1rem"
        path="/product/time-tracking"
        imageWidth={437}
        imageHeight={580}
        insideTitle
      />
      <Divider />
      <ProductCard
        productName={Intl.formatMessage({ id: 'pages.productTimeTracking.bottomFeatureOneTitle' })}
        title={Intl.formatMessage({ id: 'pages.productOverview.mainFeatureTitleTwo' })}
        description={Intl.formatMessage({ id: 'pages.productOverview.mainFeatureDescTwo' })}
        list={productList2}
        image={imageLocaleTwo(Intl.locale)}
        isSwapped
        path="/product/gps-location-tracking"
        imageWidth={500}
        imageHeight={650}
        insideTitle
      />
      <Divider />
      <ProductCard
        productName={Intl.formatMessage({ id: 'header.menu.teamActivityTrackingLabel' })}
        title={Intl.formatMessage({ id: 'pages.productOverview.mainFeatureTitleThree' })}
        description={Intl.formatMessage({ id: 'pages.productOverview.mainFeatureDescThree' })}
        list={productList3}
        image={imageLocaleThree(Intl.locale)}
        imagePadding="3.5rem 1.87rem 3.5rem 1.8rem"
        path="/product/team-activity"
        imageWidth={463}
        imageHeight={580}
        insideTitle
      />
      <Divider />
      <ProductCard
        productName={Intl.formatMessage({ id: 'header.menu.timesheetsTrackingLabel' })}
        title={Intl.formatMessage({ id: 'pages.productOverview.mainFeatureTitleFour' })}
        description={Intl.formatMessage({ id: 'pages.productOverview.mainFeatureDescFour' })}
        list={productList4}
        image={imageLocaleFour(Intl.locale)}
        isSwapped
        imagePadding="5.6rem 3.9rem 3.5rem 3.9rem"
        path="/product/timesheets"
        imageWidth={408}
        imageHeight={580}
        insideTitle
      />
      <Divider />
      <GrowthNumbers title={Intl.formatMessage({ id: 'pages.miscellaneous.trustedGlobally' })} />
      <Divider />
      <Story
        img={authorImage}
        paragraph={`“So perfectly simplistic. I work in construction so employees can all be in different places. 
        The ease of tracking hours and productivity via GPS is amazing.”`}
        author="Jack Thomas – Vision Building & Development"
      />
      <Divider />
      <SubscribeBanner
        bannerImage
        title={Intl.formatMessage({ id: 'pages.productOverview.subscribeBannertitle' })}
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default Product;
