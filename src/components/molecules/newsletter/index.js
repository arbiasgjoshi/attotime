import React from 'react';

import EmailForm from '@components/atoms/email-form';

import { container, leftWrapper, formWrapper } from './newsletter.module.scss';

const NewsLetter = () => (
  <div className={container}>
    <div className={leftWrapper}>
      <h3>Enjoying these posts?</h3>
    </div>
    <div className={formWrapper}>
      <p>Sign up for our newsletter</p>
      <EmailForm
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
        style="homepage"
      />
    </div>
  </div>
);

export default NewsLetter;
