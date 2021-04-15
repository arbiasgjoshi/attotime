import React from 'react';
import * as styles from './divider.module.scss';

const Divider = ({ className = '' }) => {
  return <hr className={`${styles.dividerContainer} ${styles[className]}`} />;
};

export default Divider;
