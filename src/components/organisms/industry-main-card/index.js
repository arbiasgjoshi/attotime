import React from 'react';
import PropTypes from 'prop-types';

import EmailForm from '@components/atoms/email-form';
import CheckList from '@components/molecules/check-list';

import * as styles from './industry-main-card.module.scss';

const IndustryMainCard = ({ smallTitle, title, description, list, image, styling }) => (
  <div className={`${styles.container} ${styles[styling]}`}>
    <div className={styles.firstBox}>
      <p className={styles.smallTitleStyle}>{smallTitle}</p>
      <h1 className={description && styles.hasDescr}>{title}</h1>
      {description && <p className={styles.descr}>{description}</p>}
      {list && (
        <div className={styles.listContainer}>
          <CheckList list={list} cardStyle="row" />
        </div>
      )}
      <div className={styles.emailContainer}>
        <EmailForm
          placeholder="Type your email"
          checkItemOne="No credit card required"
          checkItemTwo="14 day free trial"
          checkItemThree="Cancel anytime"
          style="productPage"
        />
      </div>
    </div>
    <div className={styles.secondBox}>
      <img src={image} alt={title} width={500} height={596} />
    </div>
  </div>
);

export default IndustryMainCard;

IndustryMainCard.propTypes = {
  smallTitle: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.arrayOf({}),
  image: PropTypes.string,
};
