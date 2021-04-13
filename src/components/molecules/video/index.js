import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Icon from '@components/atoms/icon';
import VideoBackgroundImage from '@images/video-background.svg';
import {
  imageContainer,
  playerImage,
  videoBackground,
  videoPlaceholder,
} from './video.module.scss';

const Video = () => (
  <div className={imageContainer}>
    <Icon iconClass="play" fSize={6} />
    <StaticImage
      className={videoBackground}
      width={1120}
      height={355}
      alt="Video placeholder"
      src="@images/video-background.svg"
    />
    {/* <StaticImage
      className={videoPlaceholder}
      width={955}
      height={489}
      alt="Video placeholder"
      src="@images/video-placeholder.svg"
    />
    <StaticImage
      className={playerImage}
      width={120}
      height={120}
      alt="Video player"
      src="@images/play-button.svg"
    /> */}
  </div>
);

export default Video;
