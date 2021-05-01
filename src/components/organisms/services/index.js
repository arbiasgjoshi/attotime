import React from 'react';
import ServiceCard from '@components/molecules/service-card';
import { container, serviceList, middleCard } from './services.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Services = ({ list }) => (
  <div className={container}>
    <div className={serviceList}>
      {list?.map((service, index) => (
        <ServiceCard key={index} title={service.title} icon={service.icon} />
      ))}
      <div className={middleCard}>
        <StaticImage width={364} height={124} src="../../../images/no-image.png" />
      </div>
    </div>
  </div>
);

export default Services;
