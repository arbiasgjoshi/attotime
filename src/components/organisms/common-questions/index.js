import React from 'react';

import { container } from './common-questions.module.scss';

const CommonQuestions = ({ title, list }) => {
  const triggerItem = (val) => (
    <div className={triggerItemWrap}>
      <img src={HeartIcon} width="40" height="40" alt="Heart" />
      <h5>{val}</h5>
      <Icon iconClass="plus" />
    </div>
  );

  return (
    <div className={container}>
      <div className={firstBox}></div>
      <div className={secondBox}>
        {list?.map(({ title, description }) => (
          <Collapsible trigger={triggerItem(title)}>
            <p>{description}</p>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default CommonQuestions;
