import React from 'react';

import PropTypes from 'prop-types';

import Input from '@components/atoms/input';
import Button from '@components/atoms/button';

import { bannerWrapper, formWrapper } from './subscribe.module.scss';

const SubscribeForm = ({ title, checkItemOne, checkItemTwo, checkItemThree }) => (
  <div className={bannerWrapper}>
    <h2>{title}</h2>
    <div className={formWrapper}>
      <Input placeholder="Type your email" />
      <Button />
    </div>
  </div>
);

SubscribeForm.propTypes = {
  title: PropTypes.string,
};

export default SubscribeForm;
