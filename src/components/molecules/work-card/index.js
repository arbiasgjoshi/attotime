import React from 'react';
import { container, logoWrapper, textContainer } from './work-card.module.scss';

const WorkCard = ({ logo, alt, title, description }) => {
  return (
    <div className={container}>
      <div className={logoWrapper}>
        <img alt={alt} src={logo} />
      </div>
      <div className={textContainer}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
