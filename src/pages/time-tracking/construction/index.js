import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import MainTitleCard from '@components/molecules/main-title-card';

import SubscribeBanner from '@components/molecules/subscribe-banner';
import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';

// import localeData from '@locale/en';

const Construction = () => (
  <div className={`${container}`}>
    <SEO title="Time Tracking Construction" />
    <Header />

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
