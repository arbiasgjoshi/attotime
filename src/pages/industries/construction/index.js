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

import { reviewCards } from './construction.module.scss';
import { container } from '@styles/main.module.scss';
import { checkList1 } from '@data/industries/construction.js';

import { FooterLinks } from '@locale/en.js';
import ReviewCard from '../../../components/molecules/review-box';

// import localeData from '@locale/en';

const Construction = () => (
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
    <SubscribeBanner
      title="Ready to put Atto to work on your construction sites?"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default Construction;
