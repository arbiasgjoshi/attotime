import React from 'react';
import Button from '@components/atoms/button';
import PropTypes from 'prop-types';

import {
  container,
  headerContainer,
  mainTitle,
  smallParagraph,
  paragraphStyle,
} from './main-title-card.module.scss';

const MainTitleCard = ({
  title,
  subtitle,
  paragraph,
  hasParagraph = false,
  showButton = false,
  maxParagraphWidth = null,
  maxWidth = null,
}) => (
  <div style={maxWidth && { maxWidth }} className={container}>
    <div className={headerContainer}>
      {hasParagraph && <h6 className={smallParagraph}>{paragraph}</h6>}
      <h1 className={mainTitle}>{title}</h1>
      <p className={paragraphStyle} style={maxParagraphWidth && { maxWidth: maxParagraphWidth }}>
        {subtitle}
      </p>
    </div>
    {showButton && <Button btnText="Start a Free Trial" btnStyle="trial" />}
  </div>
);

MainTitleCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  paragraph: PropTypes.string,
  hasParagraph: PropTypes.bool,
  showButton: PropTypes.bool,
};

export default MainTitleCard;
