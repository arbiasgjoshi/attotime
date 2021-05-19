import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import EmailForm from '../../atoms/email-form';
import Button from '@components/atoms/button';

import {
  dialogContainer,
  textContainer,
  confirmEmailContainer,
  iconContainer,
  emailTextContainer,
} from './modal.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

function Example({ showDialog, close }) {
  return (
    <div>
      <Dialog className={dialogContainer} isOpen={showDialog} onDismiss={close}>
        <div className={textContainer}>
          <h3>Sign up for a 14-day free trial</h3>
          <p>There's no time to waste!</p>
        </div>
        <EmailForm
          placeholder="Type your email"
          checkItemOne="No credit card required"
          checkItemTwo="14 day free trial"
          checkItemThree="Cancel anytime"
          style="homepage"
        />
      </Dialog>

      {/* The email front is ready but only need to find a way to seperate the logic from triggering a modal */}
      {/* <Dialog className={confirmEmailContainer} isOpen={showDialog} onDismiss={close}>
        <div className={iconContainer}>
          <StaticImage src={'../../../images/green_circle_tick.png'} alt="Green Circle Tick" />
        </div>
        <div className={emailTextContainer}>
          <h4>Confirm your email</h4>
          <p>
            A confirmation email has been sent to email@server.com. Click on the confirmation link
            in the email to activate your account.
          </p>
        </div>
        <Button btnStyle="gray" btnText="Continue" />
      </Dialog> */}
    </div>
  );
}

export default Example;
