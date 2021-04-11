import React from 'react';
import Cover from './cover';
import NumberCard from '@components/atoms/number-card';
import { container, cardList } from './growth-numbers.module.scss';

const GrowthNumbers = () => {
  return (
    <div className={container}>
      <Cover />
      <div className={cardList}>
        <NumberCard title={'150,000+'} description={'Employees have signed up'} />
        <NumberCard hasBorder title={'10,000,000+'} description={'Hours tracked accurately'} />
        <NumberCard hasBorder title={'500,000+'} description={'Jobs completed'} />
      </div>
    </div>
  );
};

export default GrowthNumbers;
