import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import Article from '@components/molecules/article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';

import authorImage from '@images/authorImage.png';
import { container } from '@styles/main.module.scss';

import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-electricians@2x.png';

import { FooterLinks } from '@locale/en.js';
import { firstList } from '@data/industries/roofing.js';
import { checkList1 } from '@data/industries/construction.js';

// import localeData from '@locale/en';

const Electrician = () => (
  <div className={`${container}`}>
    <SEO title="Electrician Industries" />
    <Header />
    <IndustryMainCard
      smallTitle="ATTO FOR ELECTRICIANS"
      title="Time Tracking for Electricians"
      list={checkList1}
      image={image2}
    />
    <Title title="Built with Electrician companies in mind" maxWidth={600} />
    <Divider className="style2" />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
      `}
      author="Robert Bennett - DPA Electrician Services, Inc."
    />
    <Divider />
    <Title
      title="Track all of your electricians throughout their workday"
      maxWidth={920}
      maxDescriptionWidth={800}
      description="With real-time activity tracking, you can check if your electricians are working, on a break, or enjoying some time off."
    />
    <Divider />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <Article
      title="Give on-site supervisors the power to track your electricians’ time"
      description="Wiring an entire building? Dealing with a commercial job that requires multiple electricians on-site? Instead of having each of them track their time individually, your on-site supervisor can clock-in and out on all of your electricians’ behalf."
      image={image1}
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <Article
      title="Entrust managers to track your cleaners’ time"
      description="Dealing with commercial or industrial Electrician jobs that require lots of cleaners? Instead of having each cleaner track their time individually, your on-the-job manager can clock in and out on your cleaner’s behalf."
      image={image1}
      isSwapped
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <SubscribeBanner
      title="Keep track of all your electricians in the field with Atto"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default Electrician;
