import React from 'react';
import PropTypes from 'prop-types';
import Header from '@components/molecules/header';
import TimeTrackingCard from '../../components/molecules/time-tracking-card';
import CheckList from '../../components/molecules/checklist';

const TimeTracking = () => {
  return (
    <div
      style={{
        border: '1px solid blue',
        margin: '0 auto',
        maxWidth: '100rem',
        padding: '0 2.5rem',
      }}
    >
      <Header />
      <TimeTrackingCard />
      <div style={{ width: '100%', height: '48.9rem', border: '1px solid red', margin: '0 auto' }}>
        PHOTO COMES HERE
      </div>
      <CheckList />
    </div>
  );
};

export default TimeTracking;
