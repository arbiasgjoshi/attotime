import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import ProductCard from '../product-card';
import Tabs from './tabs';

import image1 from '../../../images/time-tracking-fingertips@2x.png';
import image2 from '../../../images/know-where-is-team.png';
import image3 from '../../../images/spend-less-time-on-admin-with-automated-timesheets@2x.png';
import image4 from '../../../images/stay-in-loop.png';

import Accordion from '@components/organisms/accordion';

import { container, content, inactive, collapseDiv } from './feature-tabs.module.scss';

const FeatureTabs = () => {
  const Intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const ProductFeatures = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.name' }),
      sectionTitle: Intl.formatMessage({ id: 'pages.homepage.timeTrackingTitle' }),
      description: Intl.formatMessage({ id: 'pages.homepage.timeTrackingDescription' }),
      featureImage: image1,
      path: '/product/time-tracking',
      imagePadding: '3.5rem 3.1rem',
      imageWidth: 438,
      imageHeight: 580,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.bottomFeatureOneTitle' }),
      sectionTitle: Intl.formatMessage({ id: 'pages.homepage.gpsTitle' }),
      description: Intl.formatMessage({ id: 'pages.homepage.gpsDescription' }),
      featureImage: image2,
      path: '/product/gps-location-tracking',
      imagePadding: 0,
      imageWidth: 500,
      imageHeight: 650,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivty.name' }),
      sectionTitle: Intl.formatMessage({ id: 'pages.homepage.teamActivityTitle' }),
      description: Intl.formatMessage({ id: 'pages.homepage.teamActivityDescription' }),
      featureImage: image4,
      path: '/product/team-activity',
      imagePadding: '3.5rem 1.8rem',
      imageWidth: 463,
      imageHeight: 580,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.name' }),
      sectionTitle: Intl.formatMessage({ id: 'pages.homepage.timesheetsTitle' }),
      description: Intl.formatMessage({ id: 'pages.homepage.timesheetsDescription' }),
      featureImage: image3,
      path: '/product/timesheets',
      imagePadding: 'Random',
      imageWidth: 402,
      imageHeight: 580,
    },
  ];

  const getClassName = (index) => {
    return activeIndex === index ? content : inactive;
  };

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
            title={Intl.formatMessage({ id: 'pages.homepage.timeTrackingTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.timeTrackingDescription' })}
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
            title={Intl.formatMessage({ id: 'pages.homepage.gpsTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.gpsDescription' })}
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
            title={Intl.formatMessage({ id: 'pages.homepage.teamActivityTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.teamActivityDescription' })}
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
            title={Intl.formatMessage({ id: 'pages.homepage.timesheetsTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.timesheetsDescription' })}
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
