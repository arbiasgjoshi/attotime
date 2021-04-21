import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Icon from '@components/atoms/icon';
import Button from '@components/atoms/button';

import {
  imageContainer,
  videoBackground,
  videoPlaceholder,
  imagePlayer,
  watchButton,
} from './video.module.scss';

const Video = () => (
  <div className={imageContainer}>
    <StaticImage
      className={videoBackground}
      width={1120}
      height={355}
      alt="Video placeholder"
      src="../../../images/video-background@2x.png"
    />
    <StaticImage
      className={videoPlaceholder}
      width={952}
      height={485}
      alt="Video placeholder"
      src="../../../images/video-placeholder@2x.png"
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
