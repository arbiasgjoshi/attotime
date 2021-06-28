import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
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

// import authorImage from '@images/painting-author@2x.png';
// import image1 from '@images/no-image.png';
// import image2 from '@images/time-tracking-painting@2x.png';
// import image3 from '@images/painting-accordion1.png';
// import image4 from '@images/painting-accordion2.png';

// import boxImage1 from '@images/painting-box-one@2x.png';
// import boxImage2 from '@images/painting-box-two@2x.png';
// import boxImage3 from '@images/painting-box-three@2x.png';
// import boxImage4 from '@images/painting-box-four@2x.png';

// Add Industry Images
import image5 from '@images/painting/Respond to absenteeism and last-minute schedule changes@2x.png';
import image6 from '@images/painting/Avoid surprises by forecasting wages ahead of payday@2x.png';

import boxImage1 from '@images/painting/Painting daily timeline@2x.png';
import boxImage2 from '@images/painting/Painting location tracking@2x.png';
import boxImage3 from '@images/painting/Painting timesheets@2x.png';
import boxImage4 from '@images/painting/Painting time tracking@2x.png';

import image2 from '@images/painting/Time Tracking for Painting and Decorating Companies@2x.png';
import image3 from '@images/painting/Get helpful reminders so your painters never forget to clock-in@2x.png';
import image4 from '@images/painting/Allow your supervisor to track your painting crew’s time @2x.png';

import authorImage from '@images/painting/Painting reviews@2x.png';

import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/painting.js';
import { oldList, newList, painterSteps } from '@data/industries';
import { FooterLinks } from '@locale/en.js';
import {
  container,
  industryPadding,
  noPadding,
  background,
  oldVsNewGradient,
} from '@styles/main.module.scss';

const Painting = () => {
  const Intl = useIntl();

  return (
    <>
      <div className={`${container} ${industryPadding}`}>
        <Seo title="Painting Industries" />
        <Header />
        <IndustryMainCard
          smallTitle="ATTO FOR PAINTERS AND DECORATORS"
          title="Time Tracking for Painting and Decorating Companies"
          list={checkList1}
          image={image2}
        />
        <Divider className="style4" />
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
          bodyStyle="secondBodyStyle"
          maxDescriptionWidth={800}
        />
        <Divider className="centenary" />
        <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
        <Divider />
        <Article
          title="Get helpful reminders so your painters never forget to clock in!"
          description="When your workers are in the middle of a paint job, it can be easy to lose track of time. That’s why whenever they enter or leave a job site, and at their normal start and end time, we’ll remind them to clock-in and out. And if they happen to forget, they can add a manual time entry for you to review later."
          maxWidth={500}
          imagePadding="5rem 0"
          imageWidth={550}
          imageHeight={380}
          image={image3}
        />
        <Divider className="style3" />
        <Article
          title="Allow your supervisor to track your painting crew’s time"
          description="Painting large properties or doing a commercial renovation requires your crew to work together. Instead of having each painter or decorator track their time individually, your on-the-job supervisor can use Atto to clock in and out on their behalf."
          isSwapped
          maxWidth={500}
          imagePadding="3rem 0 4rem"
          imageWidth={550}
          image={image4}
        />
        <Divider className="style4" />
        <Title
          title="Keep track of your painting and decorating crew as they work throughout the day"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList1} image={image5} />
        <Divider className="style4" />
        <Title
          title="Everything you need to keep painting and decorating jobs on schedule and on budget"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList2} image={image6} isSwapped />
        <Divider />
        <Title
          title="Say goodbye to paper timesheets!"
          description="Switch to Atto, an easier and more accurate time-tracking solution for painting and decorating companies."
          maxWidth={1040}
          maxDescriptionWidth={900}
        />
      </div>
      <div className={oldVsNewGradient}>
        <div className={`${container} ${noPadding}`}>
          <Divider />
          <OldVsNew oldList={oldList} newList={newList} />
          <Divider />
        </div>
      </div>
      <div className={background}>
        <div className={`${container} ${noPadding}`}>
          <StaticImage src="../../../images/paper_timesheets@2x.png" placeholder="none" />
          <Divider className="style3" />
          <ImagesBox
            image1={boxImage1}
            image2={boxImage2}
            image3={boxImage3}
            image4={boxImage4}
            title="Trusted by thousands of painting and decorating companies."
          />
        </div>
      </div>
      <div className={`${container} ${noPadding}`}>
        <Divider />
        <Title
          title="Get everything set up in 3 simple steps"
          description="Atto is designed to be the easiest time-tracking app to use.
         There’s absolutely no technical knowledge required."
          maxWidth={932}
          maxDescriptionWidth={750}
        />
        <Divider className="style1" />
        <Steps list={painterSteps} />
        <Divider className="style4" />
        <SubscribeBanner
          title="Using paper timesheets is like watching paint dry. Try Atto instead!"
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        />
        <Footer FooterLinks={FooterLinks} />
      </div>
    </>
  );
};

export default Painting;
