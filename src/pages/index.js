import React from 'react';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import { FooterLinks } from '@locale/en.js';
import FooterComponent from '@components/molecules/footer';
import Divider from '@components/atoms/divider';
import Title from '@components/molecules/title';
import Video from '@components/molecules/video';
import Story from '@components/organisms/story';
import Number from '@components/atoms/number-card';
import CheckList from '@components/molecules/check-list';
import MainTitle from '@components/molecules/main-title-card';
import EmailForm from '@components/atoms/email-form';
import FeatureTabs from '@components/organisms/feature-tabs';
import { container } from '@styles/main.module.scss';

import { StaticImage } from 'gatsby-plugin-image';
import CommentCard from '@components/molecules/comment-card';

import { slider, checkListContainer, numbers } from './homepage.module.scss';
import authorImage from '@images/no-image.png';

const titleList = [
  { title: 'No longer chasing timesheets.', id: '1asdd1a' },
  { title: 'Cutting payroll costs with accurate time entries.', id: '1asdd1b' },
  { title: 'Staying in the loop without constan check-ins', id: '1asdd1c' },
  { title: 'Saving hours of admin with instanly-generated timesheets.', id: '1asdd1d' },
];

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
    <Divider className="large" />
    <div className={slider}>
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
    <Divider className="large" />
    <FeatureTabs />
    <Divider />
    <Title
      title="Thousands of businesses have saved time using Atto"
      description="And it's not just time saved, but money and stress too."
    />
    <Video />
    <div className={checkListContainer}>
      <CheckList list={titleList} />
    </div>
    <Divider />
    <Title
      title="See how Atto works with your industry"
      description="Atto helps all types of businesses across the world manage their employees' time."
    />
    <div className={numbers}>
      <Number title={'500,000+'} description="Timesheets Produced" />
      <Number title={'150,000+'} description="App Downloads" />
      <Number title={'10,000+'} description="Companies use Atto" />
      <Number title={'250 million+'} description="Minutes Tracked" />
    </div>
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
      author="Robert Bennet - DPA Cleaning Services, Inc."
    />
    <Divider />
    <FooterComponent FooterLinks={FooterLinks} />
  </div>
);

export default Home;
