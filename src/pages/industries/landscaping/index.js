import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';

import SubscribeBanner from '@components/molecules/subscribe-banner';
import { container } from '@styles/main.module.scss';
import authorImage from '@images/authorImage.png';

import { FooterLinks } from '@locale/en.js';

// import localeData from '@locale/en';

const Landscaping = () => (
  <div className={`${container}`}>
    <SEO title="Landscaping Industries" />
    <Header />
    <Divider />
    <Title title="Built with landscaping companies in mind" maxWidth={600} />
    <Divider className="style2" />
    <Story
      img={authorImage}
      paragraph={`"So perfectly simplistic. I work in construction so employees can all be in different places. 
      The ease of tracking hours and productivity via GPS is amazing."`}
      author="Jack Thomas – Vision Building & Development"
    />
    <Divider />
    <SubscribeBanner
      title="Help your business blossom with accurate time tracking from Atto"
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
