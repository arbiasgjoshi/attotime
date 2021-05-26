import React from 'react';
import PropTypes from 'prop-types';

import EmailForm from '@components/atoms/email-form';
import CheckList from '@components/molecules/check-list';

import {
  container,
  firstBox,
  smallTitleStyle,
  listContainer,
  emailContainer,
  secondBox,
} from './industry-main-card.module.scss';

const IndustryMainCard = ({ smallTitle, title, list, image }) => (
  <div className={container}>
    <div className={firstBox}>
      <p className={smallTitleStyle}>{smallTitle}</p>
      <h1>{title}</h1>
      <div className={listContainer}>
        <CheckList list={list} cardStyle="row" />
      </div>
      <div className={emailContainer}>
        <EmailForm
          placeholder="Type your email"
          checkItemOne="No credit card required"
          checkItemTwo="14 day free trial"
          checkItemThree="Cancel anytime"
          style="productPage"
        />
      </div>
    </div>
    <div className={secondBox}>
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
