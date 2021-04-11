import React from 'react';
import IconCard from '../../molecules/icon-card';
import icon1 from '../../../images/employees_forget.png';
import icon2 from '../../../images/out-of-battery.png';
// import icon3 from '../../../images/not-sure-if-employees.png';

import { container, list } from './common-problems.module.scss';

const CommonProblems = () => {
  return (
    <div className={container}>
      <h3>Common problems, solved.</h3>
      <div className={list}>
        <IconCard
          isRound
          icon={icon1}
          alt="Employees forget"
          title={`Employees forget to track their time?`}
          description={`Not any more! With smart reminders, your employees are encouraged to clock-in/out when they're at a job site, and at their regular start and end time.`}
        />
        <IconCard
          isRound
          icon={icon2}
          alt="Out of battery"
          title={`What if phone ran out of battery`}
          description={`Not a problem! If an employee forgets their phone, or it runs out of battery, either they or a manager can add a manual time entry for your approval.`}
        />
        <IconCard
          isRound
          icon={icon2}
          alt="Not sure if employees"
          title={`Not sure if employees are where they're supposed to?`}
          description={`Always be in the know! With geofencing, you can restrict employees from clocking-in until they're at a job site - increasing accountability and preventing innacurate time entries`}
        />
      </div>
    </div>
  );
};

export default CommonProblems;
