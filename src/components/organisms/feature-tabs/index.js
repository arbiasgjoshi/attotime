import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import Icon from '@components/atoms/icon';

import ProductCard from '../product-card';
import Tabs from './tabs';

import image1 from '../../../images/time-tracking-fingertips@2x.png';
import image2 from '../../../images/know-where-is-team.png';
import image3 from '../../../images/spend-less-time-on-admin-with-automated-timesheets@2x.png';
import image4 from '../../../images/stay-in-loop.png';

import Accordion from '@components/organisms/accordion';

import {
  container,
  content,
  inactive,
  collapseDiv,
  triggerItemWrap,
  productWrapper,
} from './feature-tabs.module.scss';

const FeatureTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const productCardContent = (item) => (
    <ProductCard
      title={item.title}
      description={item.description}
      image={item.image}
      isSwapped
      style="homepage"
      path={item.path}
      imagePadding={item.padding}
      imageWidth={item.imageWidth}
      imageHeight={item.imageHeight}
    />
  );

  const ProductFeatures = [
    {
      title: 'Time Tracking',
      sectionTitle: 'Track time from any device, anytime, and anywhere',
      description:
        'Say goodbye to employee estimates. See every minute on the clock, including work hours, breaks, and time off.',
      featureImage: image1,
      path: '/product/time-tracking',
      imagePadding: '3.5rem 3.1rem',
      imageWidth: 438,
      imageHeight: 580,
    },
    {
      title: 'GPS Location Tracking',
      sectionTitle: 'Be in control of your employees in the field',
      description:
        'Track job routes, work history, and employee’ locations in real-time – increasing team safety and accountability.',
      featureImage: image2,
      path: '/product/gps-location-tracking',
      imagePadding: 0,
      imageWidth: 500,
      imageHeight: 650,
    },
    {
      title: 'Team Activity',
      sectionTitle: 'Stay in the loop of work activity throughout the day',
      description:
        'Get instantly notified of employee work activity – without needing to pick up the phone.',
      featureImage: image4,
      path: '/product/team-activity',
      imagePadding: '3.5rem 1.8rem',
      imageWidth: 463,
      imageHeight: 580,
    },
    {
      title: 'Timesheets',
      sectionTitle: `Automate your employees' timesheets`,
      description:
        'Accurate, trustworthy, and insightful timesheets – that save hours from the payroll process.',
      featureImage: image3,
      path: '/product/timesheets',
      imagePadding: 'Random',
      imageWidth: 402,
      imageHeight: 580,
    },
  ];

  const randomComp = () => (
    <>
      <Collapsible
        className={collapseDiv}
        trigger={triggerItem('Time Tracking')}
        transitionTime={200}
      >
        <ProductCard
          title="Track time from any device, anytime, and anywhere"
          description="Say goodbye to employee estimates. See every minute on the clock, including work hours, breaks, and time off."
          image={image1}
          isSwapped
          style="homepage"
          path="/product/time-tracking"
          imagePadding="3.5rem 3.1rem"
          imageWidth={438}
          imageHeight={580}
        />
      </Collapsible>
      <Collapsible
        className={collapseDiv}
        trigger={triggerItem('GPS Location Tracking')}
        transitionTime={200}
      >
        <ProductCard
          title="Be in control of your employees in the field"
          description="Track job routes, work history, and employee’ locations in real-time – increasing team safety and accountability."
          image={image2}
          isSwapped
          style="homepage"
          path="/product/gps-location-tracking"
          imageWidth={500}
          imageHeight={650}
        />
      </Collapsible>
      <Collapsible
        className={collapseDiv}
        trigger={triggerItem('Team Activity')}
        transitionTime={200}
      >
        <ProductCard
          title="Stay in the loop of work activity throughout the day"
          description="Get instantly notified of employee work activity – without needing to pick up the phone."
          image={image4}
          isSwapped
          style="homepage"
          path="/product/team-activity"
          imagePadding="3.5rem 1.8rem"
          imageWidth={463}
          imageHeight={580}
        />
      </Collapsible>
      <Collapsible className={collapseDiv} trigger={triggerItem('Timesheets')} transitionTime={200}>
        <ProductCard
          title="Automate your employees' timesheets"
          description="Accurate, trustworthy, and insightful timesheets – that save hours from the payroll process."
          image={image3}
          isSwapped
          style="homepage"
          path="/product/timesheets"
          imageWidth={402}
          imageHeight={579}
        />
      </Collapsible>
    </>
  );

  // const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

  const getClassName = (index) => {
    return activeIndex === index ? content : inactive;
  };

  const triggerItem = (val) => (
    <div className={triggerItemWrap}>
      <h5>{val}</h5>
      <Icon iconClass="arrow-down" />
    </div>
  );

  return (
    <div className={container}>
      <Tabs
        handleClick={handleClick}
        activeIndex={activeIndex}
        list={['Time Tracking', 'GPS Location Tracking', 'Team Activity', 'Timesheets']}
      />
      <>
        <div className={getClassName(0)}>
          <ProductCard
            title="Track time from any device, anytime, and anywhere"
            description="Say goodbye to employee estimates. See every minute on the clock, including work hours, breaks, and time off."
            image={image1}
            isSwapped
            style="homepage"
            path="/product/time-tracking"
            imagePadding="3.5rem 3.1rem"
            imageWidth={438}
            imageHeight={580}
          />
        </div>
        <div className={getClassName(1)}>
          <ProductCard
            title="Be in control of your employees in the field"
            description="Track job routes, work history, and employee’ locations in real-time – increasing team safety and accountability."
            image={image2}
            isSwapped
            style="homepage"
            path="/product/gps-location-tracking"
            imageWidth={500}
            imageHeight={650}
          />
        </div>
        <div className={getClassName(2)}>
          <ProductCard
            title="Stay in the loop of work activity throughout the day"
            description="Get instantly notified of employee work activity – without needing to pick up the phone."
            image={image4}
            isSwapped
            style="homepage"
            path="/product/team-activity"
            imagePadding="3.5rem 1.8rem"
            imageWidth={463}
            imageHeight={580}
          />
        </div>
        <div className={getClassName(3)}>
          <ProductCard
            title="Automate your employees' timesheets"
            description="Accurate, trustworthy, and insightful timesheets – that save hours from the payroll process."
            image={image3}
            isSwapped
            style="homepage"
            path="/product/timesheets"
            imageWidth={402}
            imageHeight={579}
          />
        </div>
        <div className={collapseDiv}>
          <Accordion items={ProductFeatures} featureTabs arrowIcon />
        </div>
      </>
    </div>
  );
};

export default FeatureTabs;
