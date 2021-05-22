import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Article from '@components/molecules/article';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';

import SubscribeBanner from '@components/molecules/subscribe-banner';
import { container } from '@styles/main.module.scss';
import authorImage from '@images/authorImage.png';

import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-painting@2x.png';

import { checkList1 } from '@data/industries/construction.js';
import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

// import localeData from '@locale/en';

const Painting = () => (
  <div className={`${container}`}>
    <SEO title="Painting Industries" />
    <Header />
    <IndustryMainCard
      smallTitle="ATTO FOR PAINTERS AND DECORATORS"
      title="Time Tracking for Painting and Decorating Companies"
      list={checkList1}
      image={image2}
    />
    <Divider />
    <Title title="Built with Painting companies in mind" maxWidth={600} />
    <Divider className="style2" />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
      `}
      author="Robert Bennett - DPA Cleaning Services, Inc."
    />
    <Divider />
    <Title
      title="Track all of your painters and decorators throughout their workday"
      description="With real-time activity tracking, you can check if your crew is working, on a break, or enjoying some time off."
    />
    <Divider />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <Article
      title="Allow your supervisor to track your painting crew’s time"
      description="Painting large properties or doing a commercial renovation requires your crew to work together. Instead of having each painter or decorator track their time individually, your on-the-job supervisor can use Atto to clock in and out on their behalf."
      image={image1}
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <Article
      title="Entrust your supervisor to track your painting crew’s time"
      description="Tiling large buildings or doing commercial and industrial painting jobs require lots of your roofers to work together. Instead of having each contractor track their time individually, your on-the-job supervisor can use Atto to clock-in and out on their behalf."
      image={image1}
      isSwapped
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <SubscribeBanner
      title="Using paper timesheets is like watching paint dry. Try Atto instead!"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default Painting;
