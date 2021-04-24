import React from 'react';
import SubscribeForm from '@components/molecules/subscribe-form';
import * as styles from './email-form.module.scss';
import Icon from '@components/atoms/icon';

const EmailForm = ({ placeholder, checkItemOne, checkItemTwo, checkItemThree, style }) => {
  return (
    <div className={`${styles.container} ${style ? styles[style] : ''}`}>
      <SubscribeForm placeholder={placeholder} />
      <div className={styles.checkItems}>
        <div className={styles.itemWrapper}>
          <Icon iconClass="tick" />
          <span>{checkItemOne}</span>
        </div>
        <div className={styles.itemWrapper}>
          <Icon iconClass="tick" />
          <span>{checkItemTwo}</span>
        </div>
        <div className={styles.itemWrapper}>
          <Icon iconClass="tick" />
          <span>{checkItemThree}</span>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
