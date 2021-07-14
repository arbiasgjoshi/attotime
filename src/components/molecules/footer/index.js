import React from 'react';
import PropTypes from 'prop-types';
import { Link, useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import googlePlay from '@images/google-play@2x.png';
import appStore from '@images/apple-store@2x.png';
import { Helmet } from 'react-helmet';
import CustomSelect from '@components/atoms/custom-select';

import {
  leftFooterItems,
  footerLinksWrapper,
  pageFooter,
  footerTop,
  footerBottom,
  footerSitemap,
  hiddenItem,
  hasLine,
  parentPath,
  downloadApp,
  linkWrap,
} from './footer.module.scss';

const Footer = () => {
  const Intl = useIntl();

  const productLabel = () => {
    if (Intl.locale !== 'en') {
      return Intl.formatMessage({ id: 'pages.productOverview.name' });
    }
    return 'Why Atto';
  };

  const FooterLinks = [
    {
      parent: Intl.formatMessage({ id: 'header.menu.productLabel' }),
      id: 0,
      parentPath: '/product',
      subMenuLinks: [
        {
          id: 0,
          path: '/product',
          name: productLabel(),
          hasLine: true,
        },
        {
          id: 1,
          path: '/product/time-tracking',
          name: Intl.formatMessage({ id: 'header.menu.timeTrackingLabel' }),
          hasLine: false,
        },
        {
          id: 2,
          path: '/time-clock',
          name: 'Time Clock',
          hasLine: false,
        },
        {
          id: 3,
          path: '/product/location-tracking',
          name: Intl.formatMessage({ id: 'header.menu.locationTrackingLabel' }),
          hasLine: false,
        },
        {
          id: 4,
          path: '/product/team-activity',
          name: Intl.formatMessage({ id: 'header.menu.teamActivityTrackingLabel' }),
          hasLine: false,
        },
        {
          id: 5,
          path: '/product/timesheets',
          name: Intl.formatMessage({ id: 'header.menu.timesheetsTrackingLabel' }),
          hasLine: false,
        },
        {
          id: 7,
          path: '/work-hours-tracker',
          name: 'Work Hours Tracker',
          hasLine: false,
        },
        {
          id: 8,
          path: '/time-card-app',
          name: 'Time Card App',
          hasLine: true,
        },
        {
          id: 9,
          path: '/pricing',
          name: Intl.formatMessage({ id: 'header.menu.pricingLabel' }),
          hasLine: false,
        },
      ],
      downloadApp: null,
    },
    {
      parent: Intl.formatMessage({ id: 'header.menu.industriesLabel' }),
      id: 1,
      parentPath: '/industries',
      subMenuLinks: [
        {
          id: 0,
          path: '/industries/construction',
          name: Intl.formatMessage({ id: 'pages.industries.constructionLabel' }),
          hasLine: false,
        },
        {
          id: 1,
          path: '/industries/painting',
          name: Intl.formatMessage({ id: 'pages.industries.paintingLabel' }),
          hasLine: false,
        },
        {
          id: 2,
          path: '/industries/landscaping',
          name: Intl.formatMessage({ id: 'pages.industries.landscapingLabel' }),
          hasLine: false,
        },
        {
          id: 3,
          path: '/industries/electrical',
          name: Intl.formatMessage({ id: 'pages.industries.electricalLabel' }),
          hasLine: false,
        },
        {
          id: 4,
          path: '/industries/cleaning-and-maintenance',
          name: Intl.formatMessage({ id: 'pages.industries.cleaningLabel' }),
          hasLine: false,
        },
        {
          id: 5,
          path: '/industries/plumbing-and-heating',
          name: Intl.formatMessage({ id: 'pages.industries.plumbingLabel' }),
          hasLine: false,
        },
        {
          id: 6,
          path: '/industries/healthcare-and-medical',
          name: Intl.formatMessage({ id: 'pages.industries.healthcareLabel' }),
          hasLine: false,
        },
        {
          id: 7,
          path: '/industries/roofing',
          name: Intl.formatMessage({ id: 'pages.industries.roofingLabel' }),
          hasLine: false,
        },
      ],
      downloadApp: null,
    },
    {
      parent: Intl.formatMessage({ id: 'header.menu.resourcesLabel' }),
      id: 2,
      parentPath: '/resources',
      subMenuLinks: [
        {
          id: 0,
          path: '/blog',
          name: Intl.formatMessage({ id: 'header.menu.blogLabel' }),
          hasLine: false,
        },
        {
          id: 1,
          path: '/help-center',
          name: Intl.formatMessage({ id: 'header.menu.helpCenterLabel' }),
          hasLine: false,
        },
        {
          id: 2,
          path: '/Contact',
          name: Intl.formatMessage({ id: 'header.menu.contactLabel' }),
          hasLine: false,
        },
      ],
      downloadApp: [
        {
          id: 0,
          name: 'App Store',
          src: appStore,
          icon: 'apple',
          href: 'https://apps.apple.com/us/app/atto-employee-time-location/id1132847984?ls=1',
        },

        {
          id: 1,
          name: 'Google Play',
          src: googlePlay,
          icon: 'play',
          href: 'https://play.google.com/store/apps/details?id=tech.zetta.atto',
        },
      ],
    },
  ];

  const cookieScripts = (lang) => {
    if (lang === 'fr') {
      return (
        <>
          <script type="text/javascript">
            {`  
            var _iub = _iub || [];
                  _iub.csConfiguration = {"gdprAppliesGlobally":false,"enableCcpa":true,"countryDetection":true,"cookiePolicyInOtherWindow":true,"whitelabel":false,"lang":"fr","siteId":1720230,"consentOnContinuedBrowsing":false,"perPurposeConsent":true,"askConsentAtCookiePolicyUpdate":true,"cookiePolicyId":47240763, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#262626","acceptButtonCaptionColor":"white","customizeButtonColor":"#efefef","customizeButtonCaptionColor":"#999999","position":"bottom","textColor":"#262626","backgroundColor":"#f7f7f7","fontSize":"12px","rejectButtonColor":"#efefef","rejectButtonCaptionColor":"#999999","rejectButtonDisplay":true }};
            `}
          </script>
        </>
      );
    }
    if (lang === 'es') {
      return (
        <>
          <script type="text/javascript">
            {`  
             var _iub = _iub || [];
             _iub.csConfiguration = {"gdprAppliesGlobally":false,"enableCcpa":true,"countryDetection":true,"cookiePolicyInOtherWindow":true,"whitelabel":false,"lang":"es","siteId":1720230,"consentOnContinuedBrowsing":false,"perPurposeConsent":true,"askConsentAtCookiePolicyUpdate":true,"cookiePolicyId":85558244, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#262626","acceptButtonCaptionColor":"white","customizeButtonColor":"#efefef","customizeButtonCaptionColor":"#999999","position":"bottom","textColor":"#262626","backgroundColor":"#f7f7f7","fontSize":"12px","rejectButtonColor":"#efefef","rejectButtonCaptionColor":"#999999","rejectButtonDisplay":true }};
            `}
          </script>
        </>
      );
    }
    if (lang === 'de') {
      return (
        <>
          <script type="text/javascript">
            {`  
             var _iub = _iub || [];
             _iub.csConfiguration = {"gdprAppliesGlobally":false,"enableCcpa":true,"countryDetection":true,"cookiePolicyInOtherWindow":true,"whitelabel":false,"lang":"de","siteId":1720230,"consentOnContinuedBrowsing":false,"perPurposeConsent":true,"askConsentAtCookiePolicyUpdate":true,"cookiePolicyId":77119290, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#262626","acceptButtonCaptionColor":"white","customizeButtonColor":"#efefef","customizeButtonCaptionColor":"#999999","position":"bottom","textColor":"#262626","backgroundColor":"#f7f7f7","fontSize":"12px","rejectButtonColor":"#efefef","rejectButtonCaptionColor":"#999999","rejectButtonDisplay":true }};
            `}
          </script>
        </>
      );
    }
    return (
      <>
        <script type="text/javascript">
          {`  
             ar _iub = _iub || [];
             _iub.csConfiguration = {
             "gdprAppliesGlobally":false,
             "enableCcpa":true,
             "countryDetection":true,
             "cookiePolicyInOtherWindow":true,
             "whitelabel":false,
             "lang":"en",
             "siteId":1720230,
             "consentOnContinuedBrowsing":false,"perPurposeConsent":true,"askConsentAtCookiePolicyUpdate":true,"cookiePolicyId":97533579, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#262626","acceptButtonCaptionColor":"white","customizeButtonColor":"#efefef","customizeButtonCaptionColor":"#999999","position":"bottom","textColor":"#262626","backgroundColor":"#f7f7f7","fontSize":"12px","rejectButtonColor":"#efefef","rejectButtonCaptionColor":"#999999","rejectButtonDisplay":true }};
            `}
        </script>
      </>
    );
  };

  return (
    <>
      <footer className={pageFooter}>
        <div className={footerTop}>
          <div className={leftFooterItems}>
            <StaticImage
              src="../../../images/logo@3x.png"
              alt="footer-logo"
              quality={100}
              formats={['auto', 'webp', 'avif']}
              width={86}
              placeholder="blurred"
            />
            <p>{Intl.formatMessage({ id: 'pages.miscellaneous.footerText' })}</p>

            <div>
              <CustomSelect />
            </div>
          </div>
          <div className={`${footerSitemap} ${Intl.locale !== 'en' && hiddenItem}`}>
            {FooterLinks.map((section) => (
              <div className={footerLinksWrapper} key={section.id}>
                <h5 className={parentPath}>{section.parent}</h5>
                {section.subMenuLinks.map((subMenu) => (
                  <Link
                    to={`${subMenu.path}`}
                    className={subMenu.hasLine ? hasLine : null}
                    key={subMenu.id}
                  >
                    {subMenu.name}
                  </Link>
                ))}
                {section.downloadApp && (
                  <div className={downloadApp}>
                    <h5 className={parentPath}>Download</h5>
                    {section.downloadApp.map((app) => (
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noreferrer"
                        key={app.id}
                        className={linkWrap}
                      >
                        <img src={app.src} alt="Mobile" width="19" />
                        <p>{app.name}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className={footerBottom}>
          © Specta Labs, Inc.{' '}
          <Link to="/terms" target="_blank">
            {Intl.formatMessage({ id: 'pages.miscellaneous.footerLinkOne' })}
          </Link>{' '}
          &{' '}
          <Link to="/privacy" target="_blank">
            {Intl.formatMessage({ id: 'pages.miscellaneous.footerLinkTwo' })}
          </Link>
        </p>
      </footer>
      <Helmet>
        {cookieScripts(Intl.locale)}
        <script type="text/javascript" defer async src="//cdn.iubenda.com/cs/ccpa/stub.js" />
        <script
          type="text/javascript"
          defer
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
        />
        <script type="text/javascript">
          {`(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NV2DTP3');`}
        </script>
        {/* Google Tag Manager */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NV2DTP3"
            title="null"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Helpscout --> */}

        {/* <!-- Google Tag Manager (noscript) --> */}
        <script type="text/javascript">
          {`
            !function (e, t, n) {
              function a() {
                  var e = t.getElementsByTagName("script")[0], n = t.createElement("script");
                  n.type = "text/javascript", n.async = !0, n.src = "https://beacon-v2.helpscout.net", e.parentNode.insertBefore(n, e)
              }
      
              if (e.Beacon = n = function (t, n, a) {
                  e.Beacon.readyQueue.push({method: t, options: n, data: a})
              }, n.readyQueue = [], "complete" === t.readyState) return a();
              e.attachEvent ? e.attachEvent("onload", a) : e.addEventListener("load", a, !1)
          }(window, document, window.Beacon || function () {
          }); 
            
          `}
        </script>
        <script type="text/javascript">{`window.Beacon('init', 'f0351335-a50d-4bb8-9d06-9b9bf4ad4e12')`}</script>
      </Helmet>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
