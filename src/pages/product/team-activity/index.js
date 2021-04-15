import React from 'react';
import { container } from './team-activity.module.scss';

import Header from '@components/molecules/header';
import MainTitleCard from '@components/molecules/main-title-card';
import Video from '@components/molecules/video';
import CheckList from '@components/molecules/check-list';

const TeamActivity = () => {
  const titleList = [
    { title: `View any employee's status and location in a few taps` },
    { title: 'Increase team visibility, transparency, and accountability' },
    { title: `See clear daily timelines of every employee's activity` },
    { title: 'Make team management easier and less time-consuming' },
  ];

  return (
    <div className={container}>
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph="Team Activity"
        title="Stay in the loop with everything happening in real-time"
      />
      <Video />
      <CheckList titleList={titleList} />
    </div>
  );
};

export default TeamActivity;
