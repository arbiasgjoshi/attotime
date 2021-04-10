import React from 'react';
import logo1 from '../../../images/web-time-tracking.png';
import logo2 from '../../../images/mobile-time-tracking.png';
import logo3 from '../../../images/kiosk-time-tracking.png';
import WorkCard from '../../molecules/work-card';
import { container } from './work-card-list.module.scss';

const WorkCardList = () => {
  return (
    <div className={container}>
      <WorkCard
        title="Work in the office via the Web Dashboard"
        description="Log in to the Atto Dashboard and use the web-based time clock from your computer"
        logo={logo1}
        alt={'Web time tracking'}
      />
      <WorkCard
        title="Work in go icon"
        description="Log in to the Atto Dashboard and use the web-based time clock from your computer"
        logo={logo2}
        alt={'Mobile time tracking'}
      />
      <WorkCard
        title="Work in job sites icon"
        description="With the Time CLock Kiosk, employees can log in with a PIN, and track time with a single device"
        logo={logo3}
        alt={'Kiosk time tracking'}
      />
    </div>
  );
};

export default WorkCardList;
