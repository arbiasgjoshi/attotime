import React from 'react';
import Collapsible from 'react-collapsible';

import Icon from '@components/atoms/icon';

import CommonQuestionsIcon from '../../../images/common-questions-icon.svg';
import './commonCollapsible.scss';

import {
  container,
  triggerItemWrap,
  imageContainer,
  firstBox,
  secondBox,
  contentWrapper,
  closed,
  opened,
  swap,
} from './common-questions.module.scss';

const CommonQuestions = ({ title = 'Common Questions', list, isSwapped }) => {
  const triggerItem = (val) => (
    <div className={triggerItemWrap}>
      <h5>{val}</h5>
      <div className="closed">
        <Icon iconClass="plus" />
      </div>
      <div className="opened">
        <Icon iconClass="minus" />
      </div>
    </div>
  );

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={firstBox}>
        <div className={imageContainer}>
          <CommonQuestionsIcon />
        </div>
        <h2>{title}</h2>
      </div>
      <div className={secondBox}>
        {list?.map(({ title, description }) => (
          <Collapsible trigger={triggerItem(title)} transitionTime={200}>
            <div className={contentWrapper}>{description}</div>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default CommonQuestions;
