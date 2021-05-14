import React from 'react';

import Input from '@components/atoms/input';
import Button from '@components/atoms/button';

import { formWrapper } from './form.module.scss';

const SubscribeForm = ({ placeholder }) => (
  <div className={formWrapper}>
    <Input placeholder={placeholder} />
    <Button btnText="Start a Free Trial" btnStyle="black" />
  </div>
);

export default SubscribeForm;
