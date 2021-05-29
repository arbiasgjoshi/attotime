import React from 'react';
import Collapsible from 'react-collapsible';

import Icon from '@components/atoms/icon';

import Shield from '../../../images/verifiedShield.svg';

import {
  container,
  triggerItemWrap,
  imageContainer,
  firstBox,
  secondBox,
  swap,
} from './common-questions.module.scss';

const CommonQuestions = ({ title = 'Common Questions', list, isSwapped }) => {
  const triggerItem = (val) => (
    <div className={triggerItemWrap}>
      <h5>{val}</h5>
      <Icon iconClass="arrow-right" />
    </div>
  );

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={firstBox}>
        <div className={imageContainer}>
          <Shield />
        </div>
        <h2>{title}</h2>
      </div>
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
