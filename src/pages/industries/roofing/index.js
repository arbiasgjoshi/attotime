import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import Article from '@components/molecules/article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';

import authorImage from '@images/authorImage.png';
import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-roofing@2x.png';

import { container } from '@styles/main.module.scss';
import { background } from './roofing.module.scss';

import {
  checkList1,
  oldList,
  newList,
  firstList,
  accordionList1,
  accordionList2,
  steps,
} from '@data/industries/roofing.js';

import { FooterLinks } from '@locale/en.js';

// import localeData from '@locale/en';

const Roofing = () => (
  <>
    <div className={background}></div>
    <div className={`${container}`}>
      <SEO title="Roofing Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR ROOFING"
        title="Time Tracking for Roofing Companies"
        list={checkList1}
        image={image2}
      />
      <Divider className="style3" />
      <Story
        img={authorImage}
        paragraph="Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
        author="Robert Bennett - DPA Cleaning Services, Inc."
      />
      <Divider />
      <Title
        title="Track all of your roofing contractors throughout their workday"
        maxWidth={920}
        maxDescriptionWidth={800}
        description="With real-time activity tracking, you can check if your roofers are working, on a break, or enjoying some time off."
      />
      <Divider className="style3" />
      <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
      <Divider />
      <Article
        title="Get helpful reminders so your roofers never forget to clock in!"
        description="When your roofers are in the middle of a job, it can be easy to lose track of time. That’s why whenever they enter or leave a job site, and at their normal start and end time, we’ll remind them to clock in and out. And if they happen to forget, they can add a manual time entry for you to review later."
        image={image1}
        maxWidth={500}
        imagePadding="7.3rem 4.5rem"
        imageWidth={400}
        imageHeight={354}
      />
      <Article
        title="Entrust your supervisor to track your roofing crew’s time"
        description="Tiling large buildings or doing commercial and industrial roofing jobs require lots of your roofers to work together. Instead of having each contractor track their time individually, your on-the-job supervisor can use Atto to clock-in and out on their behalf."
        image={image1}
        isSwapped
        maxWidth={500}
        imagePadding="7.3rem 4.5rem"
        imageWidth={400}
        imageHeight={354}
      />
      <Divider className="style3" />
      <AccordionArticle
        title="Keep track of your roofing contractors as they work throughout the day"
        list={accordionList1}
      />
      <Divider />
      <AccordionArticle
        title="Everything you need to keep roofing jobs on schedule and on budget"
        list={accordionList2}
        isSwapped
      />
      <Divider className="style11" />
      <Title
        title="Say goodbye to paper timesheets!"
        description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for roofing companies"
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
        title="Time tracking for roofing companies? We’re on top of it!"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Roofing;
