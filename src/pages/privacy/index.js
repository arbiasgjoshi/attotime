import React from 'react';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';

import { container } from '@styles/main.module.scss';
import { FooterLinks } from '@locale/en.js';

const Terms = () => (
  <>
    <div className={`${container}`}>
      <Seo title="Privacy" />
      <Header />
      <Divider className="style12" />
      <SubscribeBanner
        title="Ready to put Atto to work on your construction sites?"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Terms;
