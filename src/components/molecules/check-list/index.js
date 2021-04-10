import React from 'react';
import CheckCard from '@components/atoms/check-card';
import { container } from './check-list.module.scss';

const CheckList = ({ titleList }) => {
  return (
    <div className={container}>
      {titleList.map((title, index) => (
        <CheckCard key={index} title={title} />
      ))}
    </div>
  );
};

export default CheckList;
