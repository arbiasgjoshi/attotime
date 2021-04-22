import React from 'react';
import ServiceCard from '@components/molecules/service-card';
import { container, textContainer, serviceList } from './services.module.scss';

const Services = ({ title, list }) => (
  <div className={container}>
    <div className={textContainer}>
      <h2>{title}</h2>
    </div>
    <div className={serviceList}>
      {list?.map((service, index) => (
        <ServiceCard
          key={index}
          index={index + 1}
          title={service.title}
          img={service.icon}
          size={service.size}
        />
      ))}
    </div>
  </div>
);

export default Services;
