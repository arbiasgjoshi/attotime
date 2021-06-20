import React from 'react';
import PropTypes from 'prop-types';

import Input from '@components/atoms/input';
import Button from '@components/atoms/button';
import { useIntl } from 'gatsby-plugin-intl';

import { formWrapper } from './form.module.scss';

const SubscribeForm = ({ placeholder }) => {
  const Intl = useIntl();

  return (
    <div className={formWrapper}>
      <Input placeholder={placeholder} />
      <Button
        btnText={Intl.formatMessage({ id: 'pages.miscellaneous.startFreeTrial' })}
        btnStyle="black"
      />
    </div>
  );
};

SubscribeForm.propTypes = {
  placeholder: PropTypes.string,
};

export default SubscribeForm;
