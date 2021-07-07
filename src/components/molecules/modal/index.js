import React, { useEffect, useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import EmailForm from '../../atoms/email-form';
import Button from '../../atoms/button';
import { useIntl } from 'gatsby-plugin-react-intl';

import { dialogContainer, textContainer } from './modal.module.scss';

function ModalDialog({ showDialog, setFormValues, close, type, hasValues }) {
  const Intl = useIntl();
  // const [email, setEmail] = useState('');
  const [type, setType] = useState(type);

  const stateSucceeded = (val) => {
    // setEmail(val.email);
    console.log('modal dialog state succeeded', val);
    setFormValues(val);
    setTimeout(() => {
      close();
      // showDialog();
    }, 1500);
  };

  const renderModalTypes = (data) => {
    if (data.message === 'Signup Succeeded') {
      return (
        <>
          <div className={textContainer}>
            <h4>Confirm your email</h4>
            <p>
              {`A confirmation email has been sent to '${data.email}'. Click on the confirmation link
              in the email to activate your account.`}
            </p>
          </div>
        </>
      );
    }

    if (data.message === 'invited') {
      return (
        <>
          <div className={textContainer}>
            <h4>Account Setup</h4>
            <p>
              {`${data.data.name} has invited you to join '${data.data.company}'. Join the rest of the team today`}
            </p>
            <a href="">
              <Button btnStyle="teal" />
            </a>
            <p>or</p>
            <a href="">
              <Button btnStyle="black" />
            </a>
          </div>
        </>
      );
    }

    return (
      <>
        <div className={textContainer}>
          <h3>Sign up for a 14-day free trial</h3>
          <p>There's no time to waste!</p>
        </div>
        <EmailForm
          changeModal={(val) => stateSucceeded(val)}
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
          style="homepage"
        />
      </>
    );
  };

  return (
    <div>
      <Dialog className={dialogContainer} isOpen={showDialog} onDismiss={close}>
        {renderModalTypes(type)}
      </Dialog>
    </div>
  );
}

export default ModalDialog;
