import React from 'react';

import HeaderComponent from '@components/molecules/header';
import MainTitleCard from '@components/molecules/main-title-card';
import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import { FooterLinks } from '@locale/en.js';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import GrowthNumbers from '@components/organisms/growth-numbers';
import FooterComponent from '@components/molecules/footer';

import { container } from '@styles/main.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import authorImage from '@images/authorImage.png';

import icon from '@images/easy-to-use.png';
import icon2 from '@images/All_in_one@2x.png';
import icon3 from '@images/Time_saving@2x.png';

import image1 from '@images/stay-in-loop.png';
import ProductCard from '../../components/organisms/product-card';

const Product = () => {
  const firstList = [
    {
      title: 'Simple',
      description: `Intuitive, easy-to-use software with no technical knowledge required.`,
      alt: 'Simple',
      icon: icon,
    },
    {
      title: 'All-in-one',
      description: `Combining everything you need to manage your team's time in one place.`,
      alt: 'All-in-one',
      icon: icon2,
    },
    {
      title: 'Time-Saving',
      description: `Using automation to save time and let your team focus on productive work.`,
      alt: 'Time Saving',
      icon: icon3,
    },
  ];

  const productList1 = [
    {
      title: 'Never be in the dark about team progress',
      description: `Be informed of your team's work activity with instant notifications`,
    },
    {
      title: `Get greater insight into your employees' workdays`,
      description: `Be informed of your team's work activity with instant notifications`,
    },
  ];

  return (
    <div className={container}>
      <SEO title="Product Overview" />
      <HeaderComponent />
      <MainTitleCard
        title="Everything you need to keep track of your employees's time"
        subtitle="Don't let timesheets be a distraction. Focus on what matters and let us handle them for you."
      />
      <StaticImage src="../../images/no-image.png" alt="No image" width={1140} height={400} />
      <Divider className="medium" />
      <IconCardList cardList={firstList} />
      <Divider />
      <ProductCard
        productName="TEAM ACTIVITY"
        title="Stay in the loop as work happens"
        description="View the work status of your team in a few taps, making team management far simpler and easier."
        list={productList1}
        image={image1}
      />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
      <Divider />
      <SubscribeBanner
        bannerImage
        title="Stay in control of what's happening with team activity updates!"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default Product;
