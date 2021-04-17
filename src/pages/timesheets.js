import React from 'react';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import { FooterLinks } from '@locale/en.js';
import FooterComponent from '@components/molecules/footer';

import { container } from '@styles/main.module.scss';

const TimeSheets = () => (
  <div className={container}>
    <SEO title="Timesheets" />
    <HeaderComponent />
    <FooterComponent FooterLinks={FooterLinks} />
  </div>
);

export default TimeSheets;
