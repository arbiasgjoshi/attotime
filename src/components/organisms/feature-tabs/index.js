import React, { useState } from 'react';
import ProductCard from '../product-card';
import { container, content, inactive } from './feature-tabs.module.scss';
import Tabs from './tabs';

import image1 from '../../../images/time-tracking-fingertips@2x.png';
import image2 from '../../../images/know-where-is-team.png';
import image3 from '../../../images/boost_productivity.png';
import image4 from '../../../images/stay-in-loop.png';

const FeatureTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={container}>
      <Tabs
        handleClick={handleClick}
        activeIndex={activeIndex}
        list={['Time Tracking', 'GPS Location Tracking', 'Team Activity', 'Timesheets']}
      />
      <div className={activeIndex === 0 ? content : inactive}>
        <ProductCard
          title="Simple time tracking with accurate time entries"
          description="Track time anytime and anywhere - on IOS, Android, the Web, and via the Time Clock Kiosk."
          image={image1}
          isSwapped
        />
      </div>
      <div className={activeIndex === 1 ? content : inactive}>
        <ProductCard
          title="Be in control of your employees in the field"
          description="Track job routes, work history, and employee` locations in real-time - increasing team safety and accountability."
          image={image2}
          isSwapped
        />
      </div>
      <div className={activeIndex === 2 ? content : inactive}>
        <ProductCard
          title="Stay in the loop of work activity throughout the day"
          description="Get instantly notified of employee work activity - without needing to pick up the phone."
          image={image4}
          isSwapped
        />
      </div>
      <div className={activeIndex === 3 ? content : inactive}>
        <ProductCard
          title="Automate your employees' timesheets"
          description="Accurate, trustworthy, and insightful timesheets - that save hours from the payroll process."
          image={image3}
          isSwapped
        />
      </div>
    </div>
  );
};

export default FeatureTabs;
