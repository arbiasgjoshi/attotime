import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

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
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';

import authorImage from '@images/authorImage.png';
import { container } from '@styles/main.module.scss';
import {
  checkList1,
  oldList,
  newList,
  accordionList1,
  accordionList2,
  steps,
} from '@data/industries/plumbing-and-heating.js';

import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-plumbing@2x.png';

import { background } from './plumbing-and-heating.module.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

// import localeData from '@locale/en';

const PlumbingAndHeating = () => (
  <>
    <div className={background}></div>
    <div className={`${container}`}>
      <SEO title="Plumbing And Heating Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR PLUMBERS AND HEATING ENGINEERS"
        title="Time Tracking for Plumbing and Heating Companies"
        list={checkList1}
        image={image2}
      />
      <Divider className="style2" />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
      `}
        author="Robert Bennett - DPA Cleaning Services, Inc."
      />
      <Divider />
      <Title
        title="Track all of your plumbers throughout their workday"
        description="With real-time activity tracking, you can check if your plumbers are working, on a break, or enjoying some time off."
        maxWidth={920}
        maxDescriptionWidth={800}
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
        title="Entrust your on-site manager to track your plumbers’ time"
        description="Dealing with commercial or industrial plumbing jobs that require multiple plumbers on-site? Instead of having each plumber track their time individually, your on-the-job manager can clock in and out on all of your plumbers’ behalf."
        image={image1}
        isSwapped
        maxWidth={500}
        imagePadding="7.3rem 4.5rem"
        imageWidth={400}
        imageHeight={354}
      />
      <Divider className="style3" />
      <AccordionArticle
        title="Keep track of your plumbers as they make their way to different call-outs throughout the day"
        list={accordionList1}
      />
      <Divider />
      <AccordionArticle
        title="Keep track of your plumbers as they make their way to different call-outs throughout the day"
        list={accordionList2}
        isSwapped
      />
      <Divider className="style11" />
      <Title
        title="Say goodbye to paper timesheets!"
        description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for roofing companies"
        maxWidth={1040}
        maxDescriptionWidth={900}
      />
      <Divider className="style5" />
      <OldVsNew oldList={oldList} newList={newList} />
      <Divider />
      <StaticImage src="../../../images/paper_timesheets@2x.png" />
      <Divider className="style1" />
      <Steps list={steps} />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <SubscribeBanner
        title="All cisterns go! Get to work with accurate time tracking from Atto."
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default PlumbingAndHeating;
