import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Story from '@components/organisms/story';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Steps from '@components/organisms/steps';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import ReviewCards from '@components/organisms/review-cards';
import ImagesBox from '@components/organisms/images-box';

import authorImage from '@images/construction-minds@2x.png';
import image2 from '@images/time-tracking-construction@2x.png';
import image3 from '@images/still_want_to_use_it@2x.png';
import image4 from '@images/guarante-on-site@2x.png';
import image5 from '@images/wage-estimates@2x.png';

import boxImage1 from '@images/construction-daily-timeline@2x.png';
import boxImage2 from '@images/construction-location@2x.png';
import boxImage3 from '@images/construction-timesheets@2x.png';
import boxImage4 from '@images/construction-time-tracking@2x.png';

import { background, topImage, bottomImage } from './construction.module.scss';
import { container } from '@styles/main.module.scss';
import {
  checkList1,
  accordionList1,
  accordionList2,
  accordionList3,
} from '@data/industries/construction.js';

import { steps, oldList, newList } from '@data/industries';

import { FooterLinks } from '@locale/en.js';

// import localeData from '@locale/en';

const Construction = () => (
  <>
    <div className={background}>
      <StaticImage className={topImage} src="../../../images/upper_shape.svg" />
      <StaticImage className={bottomImage} src="../../../images/lower_shape.svg" />
    </div>
    <div className={`${container}`}>
      <SEO title="Construction Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR CONSTRUCTION"
        title="Time Tracking for Construction Companies"
        list={checkList1}
        image={image2}
      />
      <Divider className="style4" />
      <ReviewCards />
      <Divider className="style12" />
      <Title
        title="Say goodbye to paper timesheets"
        description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for construction companies"
        maxWidth={1040}
        maxDescriptionWidth={900}
      />
      <Divider className="style3" />
      <StaticImage src="../../../images/paper_timesheets@2x.png" />
      <Divider className="style3" />
      <ImagesBox image1={boxImage1} image2={boxImage2} image3={boxImage3} image4={boxImage4} />
      <Divider />
      <AccordionArticle
        title="Keep track of everything happening in the field"
        list={accordionList1}
        image={image3}
        imagePadding="6.1rem 0"
      />
      <Divider className="style4" />
      <AccordionArticle
        title="Increase the safety and accountability of your crew with real-time GPS location tracking"
        list={accordionList2}
        image={image4}
        isSwapped
        imagePadding="2.1rem 0 10.1rem 0"
      />
      <Divider className="style4" />
      <AccordionArticle
        title="All the reports you need to keep construction jobs on schedule and on budget"
        list={accordionList3}
        image={image5}
        imagePadding="6.8rem 0"
      />
      <Divider className="style3" />
      <OldVsNew oldList={oldList} newList={newList} />
      <Divider className="style4" />
      <Title title="Built with construction companies in mind" maxWidth={600} />
      <Divider className="style2" />
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
        title="Ready to put Atto to work on your construction sites?"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Construction;
