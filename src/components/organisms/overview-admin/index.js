import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import CheckList from '@components/molecules/check-list';
import { container, textWrapper } from './overview-admin.module.scss';

const OverviewAdmin = () => {
  const titleList = [
    'Save time and focus on productive work',
    'Win more bussiness with precise job estimates',
    'Reduce payroll costs',
    'Increase employee productivity',
  ];

  return (
    <div className={container}>
      <div className={textWrapper}>
        <h3>
          <span>Lower Costs, higher productivity</span>
          <span>Less admin, more bussiness.</span>
        </h3>
      </div>
      <StaticImage src="../../../images/admin-board.svg" alt="Admin overview board" />
      <CheckList titleList={titleList} />
    </div>
  );
};

export default OverviewAdmin;
