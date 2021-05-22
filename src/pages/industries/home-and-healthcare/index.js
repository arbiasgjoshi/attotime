import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Article from '@components/molecules/article';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';

import authorImage from '@images/authorImage.png';
import image2 from '@images/time-tracking-healthcare@2x.png';

import { container } from '@styles/main.module.scss';
import { checkList1 } from '@data/industries/construction.js';

import image1 from '@images/no-image.png';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';

// import localeData from '@locale/en';

const HomeHealthcare = () => (
  <div className={`${container}`}>
    <SEO title="Home and Healthcare Industries" />
    <Header />
    <IndustryMainCard
      smallTitle="ATTO FOR HOME HEALTHCARE"
      title="Time Tracking Software for Home Healthcare Providers"
      list={checkList1}
      image={image2}
    />
    <Divider className="style2" />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
      `}
      author="Robert Bennett - DPA Cleaning Services, Inc."
    />
    <Divider />
    <Title
      title="Keep track of your caregivers throughout their day"
      description="With real-time activity tracking, you can check if your caregivers are working, on a break, or enjoying some time off."
      maxWidth={920}
      maxDescriptionWidth={800}
    />
    <Divider className="style2" />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <Article
      title="Get helpful reminders so your caregivers never forget to clock in!"
      description="When caregivers are nursing patients, it can be easy to lose track of time. That’s why whenever they enter or leave a patient’s home, and at their normal start and end time, we’ll remind them to clock in and out. And if they still happen to forget, they can add a manual time entry for you to review later."
      image={image1}
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <Article
      title="Entrust your senior caregivers to track everyone’s time"
      description="Some patients with complex needs, or larger caring jobs may require multiple caregivers to work together in the same home. Instead of having each caregiver track their time individually, your senior caregiver can use Atto to clock in and out on all of their behalfs."
      image={image1}
      isSwapped
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <SubscribeBanner
      title="You provide quality care. We’ll provide quality time tracking software!"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default HomeHealthcare;
