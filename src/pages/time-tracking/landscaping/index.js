import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import MainTitleCard from '@components/molecules/main-title-card';

import SubscribeBanner from '@components/molecules/subscribe-banner';
import { container } from '@styles/main.module.scss';
import authorImage from '@images/authorImage.png';

import { FooterLinks } from '@locale/en.js';

// import localeData from '@locale/en';

const Landscaping = () => (
  <div className={`${container}`}>
    <SEO title="Time Tracking Landscaping" />
    <Header />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"So perfectly simplistic. I work in construction so employees can all be in different places. 
      The ease of tracking hours and productivity via GPS is amazing."`}
      author="Jack Thomas – Vision Building & Development"
    />
    <Divider />
    <SubscribeBanner
      title="What are you waiting for? Time is ticking!"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default Landscaping;
