import React from 'react';
import ServiceCard from '@components/molecules/service-card';
import PropTypes from 'prop-types';
import { container, serviceList } from './services.module.scss';

const Services = ({ list }) => (
  <div className={container}>
    <div className={serviceList}>
      {list?.map((service, index) => (
        <ServiceCard key={index} title={service.title} icon={service.icon} />
      ))}
    </div>
  </div>
);

Services.propTypes = {
  list: PropTypes.arrayOf({}),
};

export default Services;
