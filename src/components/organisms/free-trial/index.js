import React from 'react';
import PropTypes from 'prop-types';
import CheckCard from '@components/molecules/check-card';
import { container, firstBox, listWrapper, ticksWrapper, tickItem } from './free-trial.module.scss';
import Input from '@components/atoms/input';
import Button from '@components/atoms/button';
import Icon from '@components/atoms/icon';

const FreeTrial = ({ title, description, list = [] }) => {
  return (
    <div className={container}>
      <div className={firstBox}>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <Input placeholder={'Type your email'} />
        <Button btnText="Start a Free Trial - 14 Days Free" btnStyle="trial" />
        <div className={ticksWrapper}>
          <div className={tickItem}>
            <Icon iconClass="tick" />
            <span>No credit card required</span>
          </div>
          <div className={tickItem}>
            <Icon iconClass="tick" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
      <div className={listWrapper}>
        {list.map(({ title }) => (
          <CheckCard title={title} />
        ))}
      </div>
    </div>
  );
};

FreeTrial.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.array,
};

export default FreeTrial;
