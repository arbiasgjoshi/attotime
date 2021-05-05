import React from 'react';
import * as styles from './icon-card.module.scss';

const IconCard = ({
  icon,
  alt,
  bigImage = false,
  title,
  description,
  noImage = false,
  isRound = false,
  style = '',
}) => (
  <div className={`${styles.container} ${isRound && styles.round} ${styles[style]}`}>
    {!noImage && (
      <div className={`${styles.iconWrapper} ${bigImage && styles.bigImageStyle}`}>
        <img alt={alt} src={icon} />
      </div>
    )}
    <div className={styles.textWrapper}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default IconCard;
