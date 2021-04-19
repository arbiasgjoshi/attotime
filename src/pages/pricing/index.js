import React from 'react';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import { FooterLinks } from '@locale/en.js';
import Divider from '@components/atoms/divider';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import FooterComponent from '@components/molecules/footer';
import PackageCard from '@components/molecules/package-card';
import Title from '@components/molecules/title';
import Story from '@components/organisms/story';
import FeaturesList from '@components/organisms/features-list';

import { container } from '@styles/main.module.scss';
import { packageWrapper } from './pricing.module.scss';

import authorImage2 from '@images/authorImage2.png';

const Pricing = () => {
  const checkList = [
    { title: 'Time Tracking' },
    { title: 'GPS Location Tracking' },
    { title: 'Team Activit Insights' },
    { title: 'Timesheets' },
    { title: 'Mobile Time Clock' },
    { title: 'Job Codes, Breaks, Notes' },
    { title: 'Time Off Tracking' },
    { title: 'Wage Estimates and Pay Rates' },
    { title: 'Payroll Integrations' },
    { title: 'Unlimited Support' },
    { title: '30+ More Features' },
  ];

  const checkList2 = [
    { title: 'Priority Support' },
    { title: 'Concierge Onboarding' },
    { title: 'Custom Implementation' },
    { title: 'Custom Roles & Permissions' },
    { title: 'Custom Integrations' },
    { title: 'Api Access' },
  ];

  const featureList = [
    {
      title: 'Easy Time Tracking',
      description:
        'Enjoy highly accurate, easy-to-use, and trustworthy time tracking, anytime and from anywhere.',
      alt: 'Clock logo',
    },
    {
      title: 'GPS Location Tracking',
      description: `Increase the accountability and transparency of your team with real-time updates on their location`,
      alt: 'GPS icon',
    },
    {
      title: 'Team Activity Insights',
      description: `See where your team is, and what they're working on - without back and forth phone calls.`,
      alt: 'profile pic',
    },
    {
      title: 'Automated Timesheets',
      description: `Spend more time on the things that matter with timesheets filled painlessly and on-time.`,
      alt: '',
    },
    {
      title: 'Simplified Payroll',
      description: `Save hours from the payroll process with built-in integrations and automated email reports.`,
      alt: '',
    },
    {
      title: 'Professional Reports',
      description: `Download and share insightful custom reports into your team's activity on the clock.`,
      alt: '',
    },
    {
      title: 'Simple Time Clock',
      description: `Track time wherever your team is. In the office, at a job site, or on the go through Mobile, Web, and Kiosk Apps.`,
      alt: '',
    },
    {
      title: 'Jobs, Breaks, Notes',
      description: `Get more data on what your employees are up to with job codes, break hours, insightful notes, and more.`,
      alt: '',
    },
    {
      title: 'Unlimited Support',
      description: `Get free unlimited help from our support team whenever you need it.`,
      alt: '',
    },
  ];

  return (
    <div className={container}>
      <SEO title="Pricing" />
      <HeaderComponent />
      <Divider />
      <div className={packageWrapper}>
        <PackageCard
          title="Premium"
          price={5}
          list={checkList}
          listTitle="Includes"
          contentText="/ user / month"
          usersText="1-99 users"
          btnText="Start 14-day Free Trial"
        />
        <PackageCard
          title="Enterprise"
          listTitle="Everything in Premium, plus"
          list={checkList2}
          contentText="Contact our sales team for a custom plan"
          usersText="100+ users"
          btnText={'Contact Sales'}
        />
      </div>
      <Divider className="medium" />
      <Title
        title="That's not all!"
        description={`30+ more features included in our Premium & Enterprise Plans`}
      />
      <Divider className="medium" />
      <Story
        img={authorImage2}
        paragraph={`"Quote from an Enterprise level customer about how amazing Atto is and how it helps improve their bussiness"`}
        author={`[Name of person],[Company Position],[Company Name]`}
      />
      <Divider />
      <Title title="All our main features, included in one simple plan" />
      <Divider className="medium" />
      <FeaturesList list={featureList} />
      <Divider className="medium" />
      <SubscribeBanner
        bannerImage
        title="There's no time to waste!"
        subtitle="Try Atto, free for 14 days"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default Pricing;
