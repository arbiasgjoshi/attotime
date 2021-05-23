import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import IndustryMainCard from '@components/organisms/industry-main-card';
import ReviewCards from '@components/organisms/review-cards';
import Steps from '@components/organisms/steps';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import SubscribeBanner from '@components/molecules/subscribe-banner';

import { container } from '@styles/main.module.scss';
import authorImage from '@images/authorImage.png';
import image2 from '@images/time-tracking-landscaping@2x.png';

import { FooterLinks } from '@locale/en.js';
import {
  checkList1,
  accordionList1,
  accordionList2,
  accordionList3,
  oldList,
  newList,
  steps,
} from '@data/industries/landscaping.js';

import { background, topImage, bottomImage } from './landscaping.module.scss';

// import localeData from '@locale/en';

const Landscaping = () => (
  <>
    <div className={background}>
      <StaticImage className={topImage} src="../../../images/upper_shape.svg" />
      <StaticImage className={bottomImage} src="../../../images/lower_shape.svg" />
    </div>
    <div className={`${container}`}>
      <SEO title="Landscaping Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR LANDSCAPING"
        title="Time Tracking for Landscaping Companies"
        list={checkList1}
        image={image2}
      />
      <Divider className="style4" />
      <ReviewCards />
      <Divider className="style12" />
      <Title
        title="The grass is always greener with Atto"
        description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for landscaping companies"
        maxWidth={1040}
        maxDescriptionWidth={900}
      />
      <Divider className="style3" />
      <StaticImage src="../../../images/paper_timesheets@2x.png" />
      <Divider className="style2" />
      <AccordionArticle title="Keep track of everything happening outdoors" list={accordionList1} />
      <Divider />
      <AccordionArticle
        title="Increase the safety and accountability of your landscaping crew with real-time GPS location tracking"
        list={accordionList2}
        isSwapped
      />
      <Divider />
      <AccordionArticle
        title="All the reports you need to keep landscaping jobs on schedule and on budget"
        list={accordionList3}
      />
      <Divider className="style2" />
      <Title title="Built with landscaping companies in mind" maxWidth={600} />
      <Divider className="style2" />
      <OldVsNew oldList={oldList} newList={newList} />
      <Divider />
      <Story
        img={authorImage}
        paragraph={`"So perfectly simplistic. I work in construction so employees can all be in different places. 
      The ease of tracking hours and productivity via GPS is amazing."`}
        author="Jack Thomas – Vision Building & Development"
      />
      <Divider />
      <Title
        title="Get everything set up in 3 simple steps"
        description="Atto is designed to be the easiest time-tracking app to use.
         There’s absolutely no technical knowledge required."
        maxWidth={932}
        maxDescriptionWidth={750}
      />
      <Divider className="style1" />
      <Steps list={steps} />
      <Divider className="style4" />
      <SubscribeBanner
        title="Help your business blossom with accurate time tracking from Atto"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Landscaping;
