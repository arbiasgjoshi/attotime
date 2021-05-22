import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import Article from '@components/molecules/article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';

import authorImage from '@images/authorImage.png';
import { container } from '@styles/main.module.scss';
import { checkList1 } from '@data/industries/construction.js';

import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-cleaning@2x.png';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

// import localeData from '@locale/en';

const Cleaning = () => (
  <div className={`${container}`}>
    <SEO title="Cleaning Industries" />
    <Header />
    <IndustryMainCard
      smallTitle="ATTO FOR CLEANERS"
      title="Time Tracking for Cleaning Companies"
      list={checkList1}
      image={image2}
    />
    <Title title="Built with Cleaning companies in mind" maxWidth={600} />
    <Divider className="style2" />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
      `}
      author="Robert Bennett - DPA Cleaning Services, Inc."
    />
    <Divider />
    <Title
      title="Keep track of everything happening throughout your cleaners’ workday"
      maxWidth={920}
      maxDescriptionWidth={800}
      description="Atto’s time tracking app is incredibly easy to use and allows you to see what all your cleaners are up to in real-time."
    />
    <Divider />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <Article
      title="Get helpful reminders so your plumbers never forget to clock in!"
      description="When dealing with burst pipes and emergency call-outs, it’s easy to lose track of time. That’s why when your plumbers enter or leave a job site, and at their normal start and end time, we’ll remind them to clock in and out. And if they happen to forget, they can add a manual time entry for you to review later."
      image={image1}
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <Article
      title="Entrust managers to track your cleaners’ time"
      description="Dealing with commercial or industrial cleaning jobs that require lots of cleaners? Instead of having each cleaner track their time individually, your on-the-job manager can clock in and out on your cleaner’s behalf."
      image={image1}
      isSwapped
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <SubscribeBanner
      title="Let’s make it a clean sweep! Keep your time tracking tidy with Atto"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default Cleaning;
