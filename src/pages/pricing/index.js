import React, { useState } from 'react';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import { FooterLinks } from '@locale/en.js';
import Button from '@components/atoms/button';
import Divider from '@components/atoms/divider';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import FooterComponent from '@components/molecules/footer';
import PackageCard from '@components/molecules/package-card';
import Title from '@components/molecules/title';
import Story from '@components/organisms/story';
import FeaturesList from '@components/organisms/features-list';

import { container } from '@styles/main.module.scss';

import authorImage2 from '@images/authorImage2.png';
import { StaticImage } from 'gatsby-plugin-image';
import TimesheetIcon from '@images/timesheets.svg';
import LocationIcon from '@images/location.svg';
import WageEstimateIcon from '@images/wage_estimates.svg';
import JobCostIcon from '@images/job_costing.svg';
import TimeTrackingIcon from '@images/timeTrackingAndroid.svg';
import MobileTimeTracking from '@images/mobile_time_tracking.svg';
import TenderIcon from '@images/tender.svg';
import SupportIcon from '@images/help_support.svg';
import ProfileIcon from '@images/profile.svg';

import {
  packageWrapper,
  priceHeader,
  buttonContainer,
  rightSide,
  featuresBanner,
  questionsContainer,
  list,
  item,
  plus,
  behindMask,
} from './pricing.module.scss';

const Pricing = () => {
  const [active, setActive] = useState('monthly');
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
      logo: <TimeTrackingIcon />,
    },
    {
      title: 'GPS Location Tracking',
      description: `Increase the accountability and transparency of your team with real-time updates on their location`,
      alt: 'GPS icon',
      logo: <LocationIcon />,
    },
    {
      title: 'Team Activity Insights',
      description: `See where your team is, and what they're working on - without back and forth phone calls.`,
      alt: 'profile pic',
      logo: <ProfileIcon />,
    },
    {
      title: 'Automated Timesheets',
      description: `Spend more time on the things that matter with timesheets filled painlessly and on-time.`,
      alt: '',
      logo: <TimesheetIcon />,
    },
    {
      title: 'Simplified Payroll',
      description: `Save hours from the payroll process with built-in integrations and automated email reports.`,
      alt: '',
      logo: <WageEstimateIcon />,
    },
    {
      title: 'Professional Reports',
      description: `Download and share insightful custom reports into your team's activity on the clock.`,
      alt: '',
      logo: <JobCostIcon />,
    },
    {
      title: 'Simple Time Clock',
      description: `Track time wherever your team is. In the office, at a job site, or on the go through Mobile, Web, and Kiosk Apps.`,
      alt: '',
      logo: <MobileTimeTracking />,
    },
    {
      title: 'Jobs, Breaks, Notes',
      description: `Get more data on what your employees are up to with job codes, break hours, insightful notes, and more.`,
      alt: '',
      logo: <TenderIcon />,
    },
    {
      title: 'Unlimited Support',
      description: `Get free unlimited help from our support team whenever you need it.`,
      alt: '',
      logo: <SupportIcon />,
    },
  ];

  return (
    <div className={container}>
      <SEO title="Pricing" />
      <HeaderComponent />
      <span className={behindMask} />
      <div className={priceHeader}>
        <h1>Pay-as-you-grow pricing</h1>
        <div className={rightSide}>
          <div className={buttonContainer}>
            <Button
              btnText="Monthly"
              btnStyle="round"
              pricing
              activeClass={active === 'monthly'}
              onBtnClick={() => setActive('monthly')}
            />
            <Button
              btnText="Annually"
              btnStyle="round"
              pricing
              activeClass={active === 'annually'}
              onBtnClick={() => setActive('annually')}
            />
          </div>
          {active === 'annually' ? <p>Save 29%</p> : <p> </p>}
        </div>
      </div>
      <Divider className="style2" />
      <div className={packageWrapper}>
        <PackageCard
          title="Premium"
          price={active === 'annually' ? 4 : 5}
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
          btnText="Contact Sales"
        />
      </div>
      <Divider className="medium" />
      <Title
        title="That's not all!"
        description="30+ more features included in our Premium & Enterprise Plans"
      />
      <Divider className="style5" />
      <div className={featuresBanner}>
        <StaticImage src="../../images/video-background@2x.png" width={1140} height={328} />
        <Button btnText="View All Features" />
      </div>
      <Divider className="medium" />
      <Story
        img={authorImage2}
        paragraph={`"Quote from an Enterprise level customer about how amazing Atto is and how it helps improve their bussiness"`}
        author="[Name of person],[Company Position],[Company Name]"
      />
      <Divider />
      <Title title="All our main features, included in one simple plan" maxWidth={900} />
      <Divider className="style3" />
      <FeaturesList isLeftAligned list={featureList} style="pricing" />
      <Divider />
      <StaticImage src="../../images/field_workers@2x.png" width={1140} height={460} />
      <Divider />
      <div className={questionsContainer}>
        <Title title="Frequently asked questions" />
        <Divider className="style2" />
        <div className={list}>
          <div className={item}>
            <h5>
              What happens at the end of my free trial? <span className={plus}>-</span>
            </h5>
            <p>
              After your 14-day free trial ends, you'll be asked to purchase a subscription in order
              to continue using Atto. As we don't require a credit card to sign up for our free
              trial, you won't be charged unless you actively choose to subscribe.
            </p>
          </div>
          <div className={item}>
            <h5>
              Are there any usage limits or add-on charges ? <span className={plus}>+</span>
            </h5>
          </div>
          <div className={item}>
            <h5>
              What payment options do you accept? <span className={plus}>+</span>
            </h5>
          </div>
          <div className={item}>
            <h5>
              I have a question that isn't answered <span className={plus}>+</span>
            </h5>
          </div>
        </div>
        <Divider />
      </div>
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
