import React from 'react';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import { FooterLinks } from '@locale/en.js';
import FooterComponent from '@components/molecules/footer';
import Divider from '@components/atoms/divider';
import Title from '@components/molecules/title';
import MainTitle from '@components/molecules/main-title-card';
import EmailForm from '@components/atoms/email-form';
import FeatureTabs from '@components/organisms/feature-tabs';
import { container } from '@styles/main.module.scss';

import { StaticImage } from 'gatsby-plugin-image';
import CommentCard from '@components/molecules/comment-card';

const Home = () => (
  <div className={container}>
    <SEO title="Attotime - Landing Page" />
    <HeaderComponent />
    <MainTitle
      title="Time tracking, simplified."
      subtitle="Atto is a simple all-in-one time-tracking and timesheet solution. Spend less time managing your business and more time getting work done."
    />
    <EmailForm
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
      style="homepage"
    />
    <Divider className="smallest" />
    <StaticImage
      src={'../images/banner-image-2@2x.png'}
      alt="Home banner image"
      width={1140}
      height={485}
    />
    <Divider className="medium" />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <CommentCard
        title={`Amazing for my business!`}
        description={`Super convenient and easy to use, so happy I've found Atto! Highly reccomend`}
        date="23 Jul"
        author="Nita Ora"
      />
      <CommentCard
        title={`Amazing for my business!`}
        description={`Super convenient and easy to use, so happy I've found Atto! Highly reccomend`}
        date="23 Jul"
        author="Nita Ora"
      />
      <CommentCard
        title={`Amazing for my business!`}
        description={`Super convenient and easy to use, so happy I've found Atto! Highly reccomend`}
        date="23 Jul"
        author="Nita Ora"
      />
    </div>
    <Divider className="medium" />
    {/* SLIDER */}
    <FeatureTabs />
    <FooterComponent FooterLinks={FooterLinks} />
  </div>
);

export default Home;
