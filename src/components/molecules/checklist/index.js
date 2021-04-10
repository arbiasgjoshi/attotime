import React from 'react';
import CheckCard from '@components/atoms/checkCard';
import { container } from './checkList.module.scss';

const CheckList = () => {
  return (
    <div className={container}>
      <CheckCard title={'Keep track of time wherever your employees are'} />
      <CheckCard title={'Reduce payroll costs and increase productivity'} />
      <CheckCard title={'Track hours, breaks, time-off, and more'} />
      <CheckCard title={'Increase the accuracy of job estimates'} />
    </div>
  );
};

export default CheckList;
