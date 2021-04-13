import React from 'react';
import ServiceCard from '@components/molecules/service-card';
import { container, textContainer, serviceList } from './services.module.scss';

const Services = ({ title, list }) => {
  return (
    <div className={container}>
      <div className={textContainer}>
        <h3>{title}</h3>
      </div>
      <div className={serviceList}>
        {list?.map((service, index) => (
          <ServiceCard key={index} index={index + 1} title={service.title} />
        ))}
      </div>
    </div>
  );
};

export default Services;
