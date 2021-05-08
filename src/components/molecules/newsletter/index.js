import React from 'react';
import { container, leftWrapper, formWrapper } from './newsletter.module.scss';
import EmailForm from '@components/atoms/email-form';

const NewsLetter = () => {
  return (
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
};

export default NewsLetter;
