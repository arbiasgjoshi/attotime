export const placeholderData = {};
import googlePlay from '../../src/images/google-play@2x.png';
import appStore from '../../src/images/app-store@2x.png';

export const FooterLinks = [
  {
    parent: 'Product',
    parentPath: '/product',
    subMenuLinks: [
      {
        path: '/product/why-atto',
        name: 'Why Atto',
        hasLine: true,
      },
      {
        path: '/product/time-tracking',
        name: 'Time Tracking',
        hasLine: false,
      },
      {
        path: '/product/time-clock',
        name: 'Time Clock',
        hasLine: false,
      },
      {
        path: '/product/gps-location-tracking',
        name: 'GPS Location Tracking',
        hasLine: false,
      },
      {
        path: '/product/team-activity',
        name: 'Team Activity',
        hasLine: false,
      },
      {
        path: '/product/timesheets',
        name: 'Timesheets',
        hasLine: false,
      },
      {
        path: '/product/time-clock-kiosk',
        name: 'Time Clock Kiosk',
        hasLine: false,
      },
      {
        path: '/product/work-hours-tracker',
        name: 'Work Hours Tracker',
        hasLine: false,
      },
      {
        path: '/product/time-card-app',
        name: 'Time Card App',
        hasLine: true,
      },
      {
        path: '/product/pricing',
        name: 'Pricing',
        hasLine: false,
      },
    ],
    downloadApp: null,
  },
  {
    parent: 'Industries',
    parentPath: '/industries',
    subMenuLinks: [
      {
        path: '/industries/construction',
        name: 'Construction',
        hasLine: false,
      },
      {
        path: '/industries/painting',
        name: 'Painting',
        hasLine: false,
      },
      {
        path: '/industries/landscaping',
        name: 'Landscaping',
        hasLine: false,
      },
      {
        path: '/industries/electrician',
        name: 'Electrician',
        hasLine: false,
      },
      {
        path: '/industries/cleaning',
        name: 'Cleaning',
        hasLine: false,
      },
      {
        path: '/industries/plumbing-heating',
        name: 'Plumbing & Heating',
        hasLine: false,
      },
      {
        path: '/industries/home-healthcare',
        name: 'Home Healthcare',
        hasLine: false,
      },
      {
        path: '/industries/roofing',
        name: 'Roofing',
        hasLine: false,
      },
    ],
    downloadApp: null,
  },
  {
    parent: 'Resources',
    parentPath: '/resources',
    subMenuLinks: [
      {
        path: '/blog',
        name: 'Blog',
        hasLine: false,
      },
      {
        path: '/help-center',
        name: 'Help Center',
        hasLine: false,
      },
      {
        path: '/Contact',
        name: 'Contact',
        hasLine: false,
      },
    ],
    downloadApp: [
      {
        name: 'App Store',
        src: appStore,
        icon: 'apple',
        href: 'https://apps.apple.com/us/app/atto-employee-time-location/id1132847984?ls=1',
      },

      {
        name: 'Google Play',
        src: googlePlay,
        icon: 'play',
        href: 'https://play.google.com/store/apps/details?id=tech.zetta.atto',
      },
    ],
  },
];
