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
import { background } from './electrician.module.scss';

import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-electricians@2x.png';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';
import { checkList1, accordionList1, accordionList2 } from '@data/industries/electrician.js';
import { oldList, newList, steps } from '@data/industries';

// import localeData from '@locale/en';

const Electrician = () => (
  <>
    <div className={background}></div>
    <div className={`${container}`}>
      <SEO title="Electrician Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR ELECTRICIANS"
        title="Time Tracking for Electricians"
        list={checkList1}
        image={image2}
      />
      <Divider className="style3" />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
      `}
        author="Robert Bennett - DPA Electrician Services, Inc."
      />
      <Divider />
      <Title
        title="Track all of your electricians throughout their workday"
        maxWidth={920}
        maxDescriptionWidth={800}
        description="With real-time activity tracking, you can check if your electricians are working, on a break, or enjoying some time off."
      />
      <Divider />
      <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
      <Divider />
      <Article
        title="Buzz your electricians with helpful reminders so they don’t forget to clock in!"
        description="Handling electricity requires full focus and concentration, so it’s easy to lose track of time. That’s why whenever your electricians enter or leave a job site, and at their normal start and end time, we’ll remind them to clock in and out. 
        And if they do happen to forget, they can add a manual time entry for you to review later."
        image={image1}
        maxWidth={500}
        imagePadding="7.3rem 4.5rem"
        imageWidth={400}
        imageHeight={354}
      />
      <Article
        title="Give on-site supervisors the power to track your electricians’ time"
        description="Wiring an entire building? Dealing with a commercial job that requires multiple electricians on-site? Instead of having each of them track their time individually, your on-site supervisor can clock-in and out on all of your electricians’ behalf."
        image={image1}
        isSwapped
        maxWidth={500}
        imagePadding="7.3rem 4.5rem"
        imageWidth={400}
        imageHeight={354}
      />
      <Divider className="style3" />
      <AccordionArticle
        title="Keep track of your electricians as they make their way to different call-outs throughout the day"
        list={accordionList1}
      />
      <Divider />
      <AccordionArticle
        title="Everything you need to keep electrical jobs on schedule and on budget"
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
      <Title
        title="Get everything set up in 3 simple steps"
        description="Atto is designed to be the easiest time-tracking app to use.
         There’s absolutely no technical knowledge required."
        maxWidth={932}
        maxDescriptionWidth={750}
      />
      <Divider className="style5" />
      <Steps list={steps} />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <SubscribeBanner
        title="Keep track of all your electricians in the field with Atto"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Electrician;
