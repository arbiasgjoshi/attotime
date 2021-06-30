import React from 'react';

import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
import Title from '@components/molecules/title';
import Divider from '@components/atoms/divider';
import FeatureCard from '@components/molecules/feature-card';

import MainTitleCard from '@components/molecules/main-title-card';

import FooterComponent from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import { FooterLinks } from '@locale/en.js';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Notes from '@images/notes.svg';
import Overtime from '@images/overtime.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Clock from '@images/clock.svg';
import Browser from '@images/browser.svg';
import Darkmode from '@images/darkMode.svg';

import LocationClock from '@images/clock-location.svg';
import House from '@images/house.svg';
import Settings from '@images/settings.svg';
import LocationAt from '@images/location-at.svg';
import Security from '@images/security.svg';
import Battery from '@images/battery.svg';

import Team from '@images/team.svg';
import Department from '@images/departments.svg';
import Filter from '@images/filter-and-search.svg';
import Messaging from '@images/messaging.svg';
import Timeline from '@images/timeline.svg';

import AllTimesheets from '@images/All_featres_TimesheetsAndroid.svg';
import AllFeatureEmail from '@images/All_featres_emailAndroid.svg';
import AvoidGuess from '@images/avoid_guesstimation.svg';
import Wages from '@images/wages.svg';
import Share from '@images/share.svg';
import AllFeatresRounding from '@images/featres_rounding.svg';
import ChangeHistory from '@images/change_history.svg';
import ArchivedMembers from '@images/Archived_membersSVG.svg';
import WageEstimate from '@images/Wage_estimatesSVG.svg';

import { container } from '@styles/main.module.scss';

import {
  cardListWrapper,
  timeTrackingStyle,
  locationTrackingStyle,
  teamActivityStyle,
  timesheetStyle,
  cardWrapper,
  emptyCard,
  behindMask,
} from './all-features.module.scss';

const AllFeaturesPage = () => {
  const Intl = useIntl();

  const timeTrackingCards = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesOneDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesOneTitle' }),
      logo: <Timer />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwoDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwoTitle' }),
      logo: <Flag />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesThreeDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesThreeTitle' }),
      logo: <Ringbell />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFourTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesFourDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFourTitle' }),
      logo: <MLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFiveTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesFiveDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFiveTitle' }),
      logo: <Brightness />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSixTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesSixDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSixTitle' }),
      logo: <Notes />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSevenTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesSevenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSevenTitle' }),
      logo: <Overtime />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesEightTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesEightDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesEightTitle' }),
      logo: <Coffe />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesNineTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesNineDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesNineTitle' }),
      logo: <Bookmark />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTenTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTenTitle' }),
      logo: <Clock />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesElevenTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesElevenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesElevenTitle' }),
      logo: <Browser />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveTitle' }),
      logo: <Darkmode />,
    },
  ];

  const locationTrackingCards = [
    {
      title: 'Real-time Location Updates',
      description: 'See the location of your entire team of employees as they work in real-time.',
      logo: <LocationClock />,
      alt: '',
    },
    {
      title: 'Clock-in/out Location History',
      description: 'View GPS time stamps of your employees’ clock in and clock out locations.',
      logo: <LocationClock />,
      alt: '',
    },
    {
      title: 'Named Job Sites',
      description:
        'Provide names for specific locations you operate from to make reporting easier.',
      logo: <House />,
      alt: '',
    },
    {
      title: 'Customizable GPS Tracking',
      description:
        'Choose the specific employees and teams that require location tracking for their job.',
      logo: <Settings />,
      alt: '',
    },
    {
      title: 'Geofencing',
      description: 'Restrict employees from clocking in until they’ve arrived at a job site.',
      logo: <Flag />,
      alt: '',
    },
    {
      title: 'Location History Tracking',
      description: 'View your employees’ location history throughout their entire day.',
      logo: <LocationAt />,
      alt: '',
    },
    {
      title: 'Privacy Controls',
      description:
        'Stay in control of what gets tracked – real-time positions, clock in/out locations, or nothing at all.',
      logo: <Security />,
      alt: '',
    },
    {
      title: 'Built-in Battery Efficiency',
      description:
        'Never worry about your battery life being drained with battery-efficient GPS tracking technology.',
      logo: <Battery />,
      alt: '',
    },
  ];

  const teamActivityCards = [
    {
      title: 'Daily Timeline',
      description: 'See a clear, simple timeline view of every employee’s daily activity.',
      logo: <Timeline />,
      alt: '',
    },
    {
      title: 'Employee Status Overview',
      description:
        'Stay in control of your team’s daily activity with real-time updates on their status and location.',
      logo: <Team />,
      alt: '',
    },
    {
      title: 'Departments',
      description:
        'Organize employees into departments based on their location, job site, or role.',
      logo: <Department />,
      alt: '',
    },
    {
      title: 'Filter and Search',
      description:
        'Filter teams based on their status, department, or simply search for their name.',
      logo: <Filter />,
      alt: '',
    },
    {
      title: 'Smart Notifications',
      description:
        'Get notified whenever an employee clocks in or out, takes a break, or edits a time entry.',
      logo: <Ringbell />,
      alt: '',
    },
    {
      title: 'Messaging*',
      description: 'Allow employees to send messages and share photos 1-1 or in group chats.',
      logo: <Messaging />,
      alt: '',
    },
  ];

  const timesheetCards = [
    {
      title: 'Comprehensive Timesheets',
      description:
        'Get all the data you need including regular time, overtime, breaks, time off, and more.',
      logo: <AllTimesheets />,
      alt: '',
    },
    {
      title: 'Scheduled Email Reports',
      description:
        'Schedule an email with your employees’ timesheets to coincide with your payroll schedule.',
      logo: <AllFeatureEmail />,
      alt: '',
    },
    {
      title: 'Timesheets by Team and Jobs',
      description:
        'Generate timesheets based on work done by an employee, team, or toward a category of job.',
      logo: <AvoidGuess />,
      alt: '',
    },
    {
      title: 'Time Entry Change History',
      description: 'View any historic changes made to time entries by an employee or admin.',
      logo: <ChangeHistory />,
      alt: '',
    },
    {
      title: 'Timesheet Rounding',
      description: 'Set a rounding increment and clock in/out times are rounded automatically.',
      logo: <AllFeatresRounding />,
      alt: '',
    },
    {
      title: 'Wage Estimates and Pay Rates',
      description:
        'Assign pay rates to your employees and their estimated pay will be added to their timesheets.',
      logo: <Wages />,
      alt: '',
    },
    {
      title: 'Payroll Integrations',
      description: 'Streamline your payroll with our QuickBooks Online and Xero integrations.',
      logo: <WageEstimate />,
      alt: '',
    },
    {
      title: 'Download and Share',
      description: 'Download any timesheet report as a PDF or CSV file in one click.',
      logo: <Share />,
      alt: '',
    },
    {
      title: 'Archive Employees',
      description:
        'View timesheets for employees even after they’ve left the company – vital for compliance purposes.',
      logo: <ArchivedMembers />,
      alt: '',
    },
    {
      title: '',
      description: '',
      logo: '',
      alt: '',
      empty: true,
    },
  ];

  return (
    <>
      <span className={behindMask} />
      <div className={container}>
        <Seo
          title={Intl.formatMessage({ id: 'pages.allFeatures.metaTitle' })}
          description={Intl.formatMessage({ id: 'pages.allFeatures.metaDescription' })}
        />
        <HeaderComponent headerStyle="pricingHeader" />
        <MainTitleCard
          title={Intl.formatMessage({
            id: 'pages.allFeatures.bannerTitle',
          })}
          subtitle={Intl.formatMessage({
            id: 'pages.allFeatures.bannerDesc',
          })}
          maxParagraphWidth={620}
        />
        <Divider className="" />
        <Title title="Time Tracking Features" smallerMargin />
        <Divider className="style51" />
        <div className={`${cardListWrapper} ${timeTrackingStyle}`}>
          {timeTrackingCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title="Location Tracking Features" />
        <Divider className="style51" />
        <div className={`${cardListWrapper} ${locationTrackingStyle}`}>
          {locationTrackingCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title="Team Activity Features" />
        <Divider className="style51" />
        <div className={`${cardListWrapper} ${teamActivityStyle}`}>
          {teamActivityCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title="Timesheets Features" />
        <Divider className="style51" />
        <div className={`${cardListWrapper} ${timesheetStyle}`}>
          {timesheetCards.map(({ title, description, logo, empty }) => (
            <div className={`${cardWrapper} ${empty && emptyCard}`}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <SubscribeBanner
          bannerImage
          title={Intl.formatMessage({ id: 'pages.pricing.subscribeBanner' })}
          subtitle={Intl.formatMessage({ id: 'pages.pricing.subscribeBannerDesc' })}
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
          style="pricing"
        />
        <FooterComponent FooterLinks={FooterLinks} />
      </div>
    </>
  );
};

export default AllFeaturesPage;
