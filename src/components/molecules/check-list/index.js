import React from 'react';
import CheckCard from '@components/molecules/check-card';
import { container, hasDescr } from './check-list.module.scss';

const CheckList = ({ titleList, hasDescription = false }) => {
  return (
    <div className={`${container} ${hasDescription && hasDescr}`}>
      {titleList.map(({ title, description }, index) => (
        <CheckCard
          key={index}
          hasDescription={hasDescription}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};

export default CheckList;
