import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Story from '@components/organisms/story';

import authorImage from '@images/authorImage.png';
import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';

// import localeData from '@locale/en';

const Construction = () => (
  <div className={`${container}`}>
    <SEO title="Construction Industries" />
    <Header />
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
