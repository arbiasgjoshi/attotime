import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';

import MainTitleCard from '@components/molecules/main-title-card';

import Faq from '@components/organisms/faq';
import FooterComponent from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import { FooterLinks, faqList } from '@locale/en.js';

import { container } from '@styles/main.module.scss';

const AllFeaturesPage = () => {
  const someVar = null;
  return (
    <div className={container}>
      <SEO title="All features" />
      <HeaderComponent headerStyle="pricingHeader" />
      <MainTitleCard
        title="All features, at a glance"
        maxParagraphWidth={620}
        subtitle="Combining everything you need to manage your team in one place."
      />
      <Divider />
      <h3>Time Tracking Features</h3>
      <Divider />
      <h3>Location Tracking Features</h3>
      <Divider />
      <h3>Team Activity Features</h3>
      <Divider />
      <h3>Timesheets Features</h3>
      <SubscribeBanner
        bannerImage
        title="There’s no time to waste!"
        subtitle="Try Atto, free for 14 days"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
        style="pricing"
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default AllFeaturesPage;
