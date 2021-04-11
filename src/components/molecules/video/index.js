import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  imageContainer,
  playerImage,
  videoBackground,
  videoPlaceholder,
} from './video.module.scss';

const Video = () => {
  return (
    <div className={imageContainer}>
      <StaticImage
        className={videoBackground}
        width={1120}
        height={355}
        alt={'Video placeholder'}
        src={'../../../images/video-background.svg'}
      />
      <StaticImage
        className={videoPlaceholder}
        width={955}
        height={489}
        alt={'Video placeholder'}
        src={'../../../images/video-placeholder.svg'}
      />
      <StaticImage
        className={playerImage}
        width={120}
        height={120}
        alt={'Video player'}
        src={'../../../images/play-button.svg'}
      />
    </div>
  );
};

export default Video;
