import React from 'react';
import {
  container,
  iconWrapper,
  round,
  textWrapper,
  bigImageStyle,
  leftAligned,
} from './icon-card.module.scss';

const IconCard = ({
  icon,
  alt,
  bigImage = false,
  title,
  description,
  noImage = false,
  isRound = false,
}) => (
  <div className={container}>
    {!noImage && (
      <div className={`${iconWrapper} ${isRound && round} ${bigImage && bigImageStyle}`}>
        <img alt={alt} src={icon} />
      </div>
    )}
    <div className={`${textWrapper} ${isRound && leftAligned}`}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default IconCard;
