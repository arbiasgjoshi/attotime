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
  maskOverlay,
  playIcon,
  watchButton,
} from './video.module.scss';

const Video = () => (
  <div className={videoContainer}>
    <div className={maskOverlay}>
      <span className={`${videoBackground} ${leftAligned}`} />
      <StaticImage
        className={videoPlaceholder}
        width={960}
        height={489}
        quality={96}
        alt="Video placeholder"
        src="../../../images/video_placeholder@2x.png"
      />
      <span className={`${videoBackground} ${rightAligned}`} />
      <div className={playIcon}>
        <Icon iconClass="play" fSize={11} />
      </div>
      <div className={watchButton}>
        <Button btnText="Watch Video" btnStyle="round" />
      </div>
    </div>
  </div>
);

export default Video;
