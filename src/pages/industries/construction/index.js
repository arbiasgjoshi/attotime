import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Story from '@components/organisms/story';
import IndustryMainCard from '@components/organisms/industry-main-card';

import authorImage from '@images/authorImage.png';
import image2 from '@images/time-tracking-construction@2x.png';

import { reviewCards, background, topImage, bottomImage } from './construction.module.scss';
import { container } from '@styles/main.module.scss';
import {
  checkList1,
  accordionList1,
  accordionList2,
  accordionList3,
  oldList,
  newList,
} from '@data/industries/construction.js';

import { FooterLinks } from '@locale/en.js';
import ReviewCard from '../../../components/molecules/review-box';
import { StaticImage } from 'gatsby-plugin-image';
import AccordionArticle from '../../../components/organisms/accordion-article';
import OldVsNew from '../../../components/organisms/old-vs-new';

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
      <div className={reviewCards}>
        <ReviewCard
          title={`"A must-have for your organization"`}
          rating="5 / 5"
          job="Hightlight Construction Group"
        />
        <ReviewCard
          title={`"A must-have for your organization"`}
          rating="5 / 5"
          job="Hightlight Construction Group"
        />
        <ReviewCard
          title={`"A must-have for your organization"`}
          rating="5 / 5"
          job="Hightlight Construction Group"
        />
      </div>
      <Divider className="style12" />
      <Title
        title="Say goodbye to paper timesheets"
        description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for construction companies"
        maxWidth={1040}
        maxDescriptionWidth={900}
      />
      <Divider className="style3" />
      <StaticImage src="../../../images/paper_timesheets@2x.png" />
      <Divider className="style2" />
      <AccordionArticle
        title="Keep track of everything happening in the field"
        list={accordionList1}
      />
      <Divider />
      <AccordionArticle
        title="Increase the safety and accountability of your crew with real-time GPS location tracking"
        list={accordionList2}
        isSwapped
      />
      <Divider />
      <AccordionArticle
        title="All the reports you need to keep construction jobs on schedule and on budget"
        list={accordionList3}
      />
      <Divider className="style2" />
      <Title title="Built with construction companies in mind" maxWidth={600} />
      <Divider className="style2" />
      <OldVsNew oldList={oldList} newList={newList} />
      <Divider className="style2" />
      <Story
        img={authorImage}
        paragraph={`"So perfectly simplistic. I work in construction so employees can all be in different places. 
      The ease of tracking hours and productivity via GPS is amazing."`}
        author="Jack Thomas – Vision Building & Development"
      />
      <Divider />
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
