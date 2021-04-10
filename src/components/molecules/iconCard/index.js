import React from 'react';
import { container, iconWrapper, textWrapper } from './iconCard.module.scss';

const IconCard = ({ icon, alt, title, description }) => {
  return (
    <div className={container}>
      <div className={iconWrapper}>
        <img alt={alt} src={icon} />
      </div>
      <div className={textWrapper}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
