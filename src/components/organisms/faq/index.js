import React from 'react';
import PropTypes from 'prop-types';
import Title from '@components/molecules/title';
import Divider from '@components/atoms/divider';
import { questionsContainer, listStyle } from './faq.module.scss';
import FaqItem from '@components/atoms/faq-item';

const Faq = ({ list }) => {
  return (
    <div className={questionsContainer}>
      <Title title="Frequently asked questions" />
      <Divider className="style2" />
      <div className={listStyle}>
        {list.map(({ title, paragraph, toggled }) => (
          <FaqItem title={title} paragraph={paragraph} toggled={toggled} />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Faq;

Faq.propTypes = {
  list: PropTypes.array,
};