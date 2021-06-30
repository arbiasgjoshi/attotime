import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
import Divider from '@components/atoms/divider';
import MainTitleCard from '@components/molecules/main-title-card';
import HeartIcon from '@images/heart-icon@2x.png';
import ContactForm from '@components/organisms/contact-form';

import Faq from '@components/organisms/faq';
import FooterComponent from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import { FooterLinks, faqList } from '@locale/en.js';

import { container } from '@styles/main.module.scss';
import { middleAlign } from './contact-page.module.scss';

const Contact = () => {
  const Intl = useIntl();
  return (
    <div className={container}>
      <Seo
        title={Intl.formatMessage({ id: 'pages.contact.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.contact.metaDescription' })}
      />
      <HeaderComponent />
      <div className={middleAlign}>
        <img src={HeartIcon} width="75" height="75" alt="Heart" />
      </div>
      <MainTitleCard
        title="You're all that matters!"
        subtitle="Get in touch. We’re ready to answer all your questions."
      />
      <ContactForm />
      <Divider />
      <Faq list={faqList} />
      <SubscribeBanner
        bannerImage
        title="There’s no time to waste!"
        subtitle="Try Atto, free for 14 days"
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        style="pricing"
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default Contact;
