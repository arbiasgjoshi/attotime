import React, { useState } from 'react';
import CommonQuestionsIcon from '@images/common-questions-icon.svg';
import { motion, AnimatePresence } from 'framer-motion';
import Accordion from '@components/organisms/accordion';
// import Collapsible from 'react-collapsible';

import './commonCollapsible.scss';

import {
  container,
  imageContainer,
  firstBox,
  secondBox,
  // triggerItemWrap,
  // contentWrapper,
  // closed,
  // opened,
  swap,
} from './common-questions.module.scss';

const CommonQuestions = ({
  title = 'Common Questions',
  list,
  isSwapped,
  i,
  expanded,
  setExpanded,
}) => {
  const isOpen = i === expanded;

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={firstBox}>
        <div className={imageContainer}>
          <CommonQuestionsIcon />
        </div>
        <h2>{title}</h2>
      </div>
      <div className={secondBox}>
        <Accordion items={list} />
      </div>
    </div>
  );
};

export default CommonQuestions;
