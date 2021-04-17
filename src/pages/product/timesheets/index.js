import React from 'react';
import { container } from './timesheets.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';

import Header from '@components/molecules/header';
import MainTitleCard from '@components/molecules/main-title-card';
import Video from '@components/molecules/video';
import Title from '@components/molecules/title';
import CheckList from '@components/molecules/check-list';

import IconCardList from '@components/organisms/icon-card-list';

import icon from '@images/accurate.png';
import icon2 from '@images/trustworthy.png';
import icon3 from '@images/easy-to-use.png';

const Timesheets = () => {
  const checkLists = [
    { title: 'View precise, instantly-generated, and verified timesheets' },
    { title: 'Save countless hours a week from your payroll process' },
    { title: 'Analyze every hour spent on the job' },
    { title: 'See how productive your employees are' },
  ];

  const firstList = [
    {
      title: 'Highly Accurate',
      description: `Eliminate employee guesswork, time wastage, and additional payroll costs. With accurate timesheets, you only pay for hours spent on the job.`,
      alt: 'Highly Accurate',
      icon,
    },
    {
      title: 'Verified and Trustworthy',
      description: `Gain trust and confidence in your time tracking data. Timesheets are verified using location data, increasing employee accountability and transparency.`,
      alt: 'Verified and trustworthy',
      icon: icon2,
    },
    {
      title: 'Instantly Available',
      description: `No longer wait until the end of the week to see hours worked. TImesheets are instantly generated so you can view them anytime.`,
      alt: 'Instantly Available',
      icon: icon3,
    },
  ];

  return (
    <div className={container}>
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph="Timesheets"
        title="Timesheet reports without the hassle"
        subtitle="Spend more time on the things that matter with timesheets filled painlessly and on-time."
      />
      <Video />
      <CheckList titleList={checkLists} />
      <Divider />
      <Title
        title="Ready-made professional timesheets"
        description="Say goodbye to employee estimates. Use the time clock to precisely capture work activity."
      />
      <div>
        <StaticImage alt="Clock In" quality={90} src="../../../images/ready-made.svg" />
      </div>
      <Divider className="smallest" />
      <IconCardList cardList={firstList} />
      <Divider />
    </div>
  );
};

export default Timesheets;
