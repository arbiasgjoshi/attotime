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
import FreeTrial from '@components/organisms/free-trial';
import Services from '@components/organisms/services';
import { container } from '@styles/main.module.scss';

import icon1 from '@images/helmet@2x.png';
import icon2 from '@images/leaf@2x.png';
import icon3 from '@images/roof@2x.png';
import icon4 from '@images/brush@2x.png';
import icon5 from '@images/plus@2x.png';
import icon6 from '@images/lightbulb@2x.png';
import icon7 from '@images/plumbing@2x.png';
import icon8 from '@images/dots@2x.png';

import { StaticImage } from 'gatsby-plugin-image';
import CommentCard from '@components/molecules/comment-card';

import authorImage from '@images/no-image.png';
import { slider, checkListContainer, numbers, story } from './homepage.module.scss';

const titleList = [
  { title: 'No longer chasing timesheets.', id: '1asdd1a' },
  { title: 'Cutting payroll costs with accurate time entries.', id: '1asdd1b' },
  { title: 'Staying in the loop without constan check-ins', id: '1asdd1c' },
  { title: 'Saving hours of admin with instanly-generated timesheets.', id: '1asdd1d' },
];

const checkList = [
  { title: 'Avoid guesswork with accurate time-tracking' },
  { title: 'Increase employee accountability and safety' },
  { title: 'Stay in the loop without constant check-ins' },
  { title: 'Enjoy hassle-free automated employee timesheets' },
  { title: 'Streamline the entire payroll process' },
];

const serviceList = [
  { title: 'Construction', icon: icon1 },
  { title: 'Landscaping & Gardening', icon: icon2 },
  { title: 'Roofing', icon: icon3 },
  { title: 'Painting & Decorating', icon: icon4 },
  { title: 'Healthcare & Medical', icon: icon5 },
  { title: 'Electrical', icon: icon6 },
  { title: 'Plumbing & Heating', icon: icon7 },
  { title: 'Other industries', icon: icon8 },
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
    <Divider className="style1" />
    <StaticImage
      src="../images/banner-image-2@2x.png"
      alt="Home banner image"
      width={1140}
      height={485}
    />
    <Divider className="style1" />
    <div className={slider}>
      <CommentCard
        title={`Amazing for my business!`}
        description={`Super convenient and easy to use, so happy I've found Atto! Highly reccomend`}
        date="23 Jul"
        author="Nita Ora"
      />
      <CommentCard
        title={`A must have software`}
        description={`I just love the ongoning improvements.`}
        date="20 Jul"
        author="James Stone"
      />
      <CommentCard
        title={`Everything you need`}
        description={`Service is fabolous and it’s easy to use. My employees love it.`}
        date="18 Jun"
        author="Rich Mathews"
      />
    </div>
    <Divider className="style4" />
    <FeatureTabs />
    <Divider />
    <Title
      maxWidth={840}
      maxDescriptionWidth={766}
      title="Thousands of businesses have saved time using Atto"
      description="And it's not just time saved, but money and stress too."
    />
    <Divider className="style3" />
    <Video />
    <Divider className="style2" />
    <div className={checkListContainer}>
      <CheckList list={titleList} />
    </div>
    <Divider />
    <Title
      title="See how Atto works with your industry"
      description="Atto helps all types of businesses across the world manage their employees’ time."
      maxDescriptionWidth={700}
    />
    <Divider className="style2" />
    <Services list={serviceList} />
    <div className={numbers}>
      <Number title="500,000+" description="Timesheets Produced" />
      <Number title="150,000+" description="App Downloads" />
      <Number title="10,000+" description="Companies use Atto" />
      <Number title="250 million+" description="Minutes Tracked" />
    </div>
    <Divider />
    <Title title="Hear what business owners say about Atto" />
    <Divider className="style3" />
    <Story
      className="homepage"
      img={authorImage}
      paragraph={`“Atto has saved us $1,000’s on payroll and taken away the stress of running a business.”`}
      author="Robert Bennet - DPA Cleaning Services, Inc."
    />
    <Divider />
    <FreeTrial
      title="No time to waste!"
      description="Stay in control of your employees' time."
      list={checkList}
    />
    <FooterComponent FooterLinks={FooterLinks} />
  </div>
);

export default Home;
