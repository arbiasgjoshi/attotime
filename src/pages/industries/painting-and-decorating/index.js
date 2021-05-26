import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Article from '@components/molecules/article';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';
import ImagesBox from '@components/organisms/images-box';

import SubscribeBanner from '@components/molecules/subscribe-banner';
import { container } from '@styles/main.module.scss';
import authorImage from '@images/painting-author@2x.png';
import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-painting@2x.png';
import image3 from '@images/painting-accordion1.png';
import image4 from '@images/painting-accordion2.png';
import image5 from '@images/painting-accordion3.png';
import image6 from '@images/painting-accordion4.png';

import boxImage1 from '@images/painting-box-one@2x.png';
import boxImage2 from '@images/painting-box-two@2x.png';
import boxImage3 from '@images/painting-box-three@2x.png';
import boxImage4 from '@images/painting-box-four@2x.png';

import { checkList1, accordionList1, accordionList2 } from '@data/industries/painting.js';
import { oldList, newList, steps } from '@data/industries';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

import { background } from './painting.module.scss';

// import localeData from '@locale/en';

const Painting = () => (
  <>
    <div className={background}></div>
    <div className={`${container}`}>
      <SEO title="Painting Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR PAINTERS AND DECORATORS"
        title="Time Tracking for Painting and Decorating Companies"
        list={checkList1}
        image={image2}
      />
      <Divider className="style3" />
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
        maxWidth={920}
        maxDescriptionWidth={800}
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
        image={image3}
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
        image={image4}
      />
      <Divider className="style3" />
      <AccordionArticle
        title="Keep track of your painting and decorating crew as they work throughout the day"
        list={accordionList1}
        image={image5}
      />
      <Divider />
      <AccordionArticle
        title="Everything you need to keep painting and decorating jobs on schedule and on budget"
        list={accordionList2}
        image={image6}
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
      <Divider className="style3" />
      <ImagesBox image1={boxImage1} image2={boxImage2} image3={boxImage3} image4={boxImage4} />
      <Divider />
      <Steps list={steps} />
      <Divider />
      <SubscribeBanner
        title="Using paper timesheets is like watching paint dry. Try Atto instead!"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Painting;
