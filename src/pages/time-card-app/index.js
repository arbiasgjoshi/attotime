import React from 'react';

import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import Article from '@components/molecules/article';

import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';

import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

// import localeData from '@locale/en';

const TimeCardApp = () => (
  <div className={`${container}`}>
    <SEO title="Time Clock" />
    <Header />
    <IndustryMainCard
      smallTitle="TIME CARD APP"
      title="Track your employees hours with our simple time card app"
      image={noImage}
      styling="other"
    />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
    />
    <Divider />
    <Article
      title="Get wage estimates from your employees’ time cards"
      description="Keep your company’s finances on track. After adding your employees’ pay rates, Atto automatically estimates your wage bill based on the hours on their time cards. What’s more, you can add more than one pay rate per employee so that your estimates remain accurate even if their rate changes."
      image={noImage}
    />
    <Divider />
    <Article
      title="See time card summaries per employee, team, or job code"
      description="Get insights into how productive each part of your business is. In a few taps, Atto produces time card summaries to show all the work done by each employee, team, or towards a specific category of job."
      image={noImage}
      isSwapped
    />
    <Divider />
    <Article
      title="View time card data as a daily map-based timeline"
      description="If your employees work in the field, it can be useful to see how long they spend at each job, and the routes they take throughout their day. Atto uses GPS tracking in conjunction with data from your employees’ time cards to produce visual timelines of their daily movements."
      image={noImage}
    />
    <Divider />
    <SubscribeBanner
      title="#1 Time Tracker. Free for 14 days"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default TimeCardApp;
