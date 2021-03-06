import React, { useEffect } from 'react';

import { graphql } from 'gatsby';

import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';

import { container } from '@styles/main.module.scss';
import { privacyPolicyStyle } from './privacy.module.scss';

const Privacy = ({ data }) => {
  const Intl = useIntl();

  const findDocuments = (val) => {
    let array = data.allIubendaDocument.nodes;
    let arrayItem = array.find((obj) => {
      return obj.documentId === val.toString();
    });
    return arrayItem.privacyPolicy;
  };

  const renderPrivacyPolicy = (lang) => {
    if (lang === 'en') {
      return (
        <div
          className={privacyPolicyStyle}
          dangerouslySetInnerHTML={{ __html: findDocuments(97533579) }}
        />
      );
    }
    if (lang === 'fr') {
      return (
        <div
          className={privacyPolicyStyle}
          dangerouslySetInnerHTML={{ __html: findDocuments(47240763) }}
        />
      );
    }
    if (lang === 'es') {
      return (
        <div
          className={privacyPolicyStyle}
          dangerouslySetInnerHTML={{ __html: findDocuments(85558244) }}
        />
      );
    }
    if (lang === 'de') {
      return (
        <div
          className={privacyPolicyStyle}
          dangerouslySetInnerHTML={{ __html: findDocuments(77119290) }}
        />
      );
    }
    return null;
  };

  useEffect(() => {
    // console.log('data has been fetched', data);
  }, [data]);

  return (
    <>
      <div className={`${container}`}>
        <Seo title="Privacy" />
        <Header />
        {data.allIubendaDocument.nodes.length && renderPrivacyPolicy(Intl.locale)}
        <SubscribeBanner
          title="Ready to put Atto to work on your construction sites?"
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        />
        <Footer />
      </div>
    </>
  );
};

export const query = graphql`
  query PrivacyQuery {
    allIubendaDocument {
      nodes {
        documentId
        privacyPolicy
      }
    }
  }
`;

export default Privacy;
