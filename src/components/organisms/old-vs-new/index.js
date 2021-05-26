import React from 'react';

import CheckCard from '@components/molecules/check-card';

import {
  container,
  oldListStyle,
  newListStyle,
  titleContainer,
  oldWayTitle,
  newWayTitle,
} from './old-vs-new.module.scss';

const OldVsNew = ({ oldList, newList }) => (
  <>
    <div className={titleContainer}>
      <span className={oldWayTitle}>The old way with paper timesheets</span>
      <span className={newWayTitle}>The new way with atto</span>
    </div>
    <div className={container}>
      <div className={oldListStyle}>
        {oldList?.map((title) => (
          <CheckCard title={title} style="oldListStyle" hasCloseIcon />
        ))}
      </div>
      <div className={newListStyle}>
        {newList?.map((title) => (
          <CheckCard title={title} />
        ))}
      </div>
    </div>
  </>
);

export default OldVsNew;
