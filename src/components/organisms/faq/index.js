import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';

import Title from '@components/molecules/title';
import Icon from '@components/atoms/icon';
import Divider from '@components/atoms/divider';

import Accordion from '@components/organisms/accordion';

import { questionsContainer, listStyle, triggerItemWrap } from './faq.module.scss';

const Faq = ({ list }) => {
  const triggerItem = (val) => (
    <div className={triggerItemWrap}>
      <h5>{val}</h5>
      <Icon iconClass="arrow-down" />
    </div>
  );

  return (
    <div className={questionsContainer}>
      <Title title="Frequently asked questions" />
      <Divider className="style2" />
      <div className={listStyle}>
        <Accordion items={list} industries noIconPadding />
      </div>
      <Divider />
    </div>
  );
};

export default Faq;

Faq.propTypes = {
  list: PropTypes.arrayOf({}),
};
