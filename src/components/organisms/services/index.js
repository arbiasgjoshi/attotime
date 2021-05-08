import React from 'react';
import ServiceCard from '@components/molecules/service-card';
import { container, serviceList, arrow } from './services.module.scss';
import sparkIcon from '@images/spark@2x.png';

const Services = ({ list }) => (
  <div className={container}>
    <div className={serviceList}>
      {list?.map((service, index) => (
        <ServiceCard key={index} title={service.title} icon={service.icon} />
      ))}
    </div>
  </div>
);

export default Services;
