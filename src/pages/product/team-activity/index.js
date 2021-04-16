import React from 'react';
import { container } from './team-activity.module.scss';

import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import MainTitleCard from '@components/molecules/main-title-card';
import Video from '@components/molecules/video';
import CheckList from '@components/molecules/check-list';
import Article from '@components/molecules/article';

import image1 from '@images/team-management-departments.png';
import image2 from '@images/find-out.png';
import image3 from '@images/eliminate-checks.png';

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
      <Divider />
      <Title title="See where your team is, and what they're working on" />
      <Article
        title="Never feel in the dark again with team activity updates"
        description="Find out what's going on in a few taps. Get real-time updates on your team's status and location. See who's on the clock, on break, or enjoying some time off."
        image={image1}
      />
      <Article
        title="Simplify team management with departments"
        description="Organize employees into departments to make them easier to manage. GRoup them based on their location, job site, or role to see all their statuses at once. Easily keep track of everyone regardless of your company size."
        image={image1}
        isSwapped
      />
      <Article
        title="Find out what any employee is up to in seconds"
        description="Stay in control of what's happening. Filter your team based on their current status, the department they're in, or by searching for their name. Make day-to-day decisions faster with all the information you need at your fingertips."
        image={image2}
      />
      <Article
        title="Eliminate back and forth phone calls and constant check-ins"
        description="See your team's progress at the end of each day"
        image={image3}
        isSwapped
      />
      <Article
        title="See your team's progress at the end of each day"
        description="Check on your team's progress and productivity with clear timelines of everyone's daily activity. See how long they spend on breaks, jobs, and on the clock. Gain greater insight into their workdays, and use it to speed-up timesheet approvals."
        image={image1}
      />
      <Divider />
    </div>
  );
};

export default TeamActivity;
