import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import CheckList from '@components/molecules/check-list';
import { container, textWrapper, imageWrapper } from './overview-admin.module.scss';

const OverviewAdmin = () => {
  const titleList = [
    {
      title: 'Save time and focus on productive work',
      description:
        'Atto takes care of time-draining tasks like chasing down timesheets. Now your employees can spend less time on admin, and more time on real work.',
    },
    {
      title: 'Win more bussiness with precise job estimates',
      description:
        'Using time tracking data from previous jobs, you can ensure that any bids you submit for similar jobs in the future are both profitable and competitive.',
    },
    {
      title: 'Reduce payroll costs',
      description:
        'With precise time-tracking that captures activity to the nearest second, you only pay for hours actually spent on the job',
    },
    {
      title: 'Increase employee productivity',
      description:
        'When you track hours and the clock is ticking, your employees naturally become more productive and aware of their time.',
    },
  ];

  return (
    <div className={container}>
      <div className={textWrapper}>
        <h3>
          <span>Lower Costs, higher productivity</span>
          <span>Less admin, more bussiness.</span>
        </h3>
      </div>
      <div className={imageWrapper}>
        <StaticImage
          width={1140}
          height={615}
          src="../../../images/admin-board.svg"
          alt="Admin overview board"
        />
      </div>
      <CheckList titleList={titleList} hasDescription />
    </div>
  );
};

export default OverviewAdmin;
