import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Icon from '@components/atoms/icon';
import Button from '@components/atoms/button';

import {
  videoContainer,
  videoBackground,
  videoPlaceholder,
  rightAligned,
  leftAligned,
  imagePlayer,
  watchButton,
} from './video.module.scss';

const Video = () => (
  <div className={videoContainer}>
    <span
      className={`${videoBackground} ${leftAligned}`}
      // src="../../../images/grey-copy@2x.png"
    />
    <StaticImage
      className={videoPlaceholder}
      width={960}
      height={489}
      quality={96}
      alt="Video placeholder"
      src="../../../images/video_placeholder@2x.png"
    />
    <span
      className={`${videoBackground} ${rightAligned}`}
      // src="../../../images/grey-copy@2x.png"
    />
    <div className={imagePlayer}>
      <Icon iconClass="play" fSize={11} />
    </div>
    <div className={watchButton}>
      <Button btnText="Watch Video" btnStyle="round" />
    </div>
  </div>
);

export default Video;
