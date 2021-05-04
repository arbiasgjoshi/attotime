import React from 'react';
import ServiceCard from '@components/molecules/service-card';
import { container, serviceList, middleCard, arrow, iconContainer } from './services.module.scss';
import sparkIcon from '@images/spark@2x.png';

const Services = ({ list }) => (
  <div className={container}>
    <div className={serviceList}>
      {list?.map((service, index) => (
        <ServiceCard key={index} title={service.title} icon={service.icon} />
      ))}
      <div className={middleCard}>
        <div className={iconContainer}>
          <img height={60} width={60} src={sparkIcon} alt="Spark Icon" />
        </div>
        <div className={arrow}></div>
      </div>
    </div>
  </div>
);

export default Services;
