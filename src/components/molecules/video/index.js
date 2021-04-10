import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { imageContainer, playerImage, videoBackground } from './video.module.scss';

const Video = () => {
  return (
    <div className={imageContainer}>
      <StaticImage
        className={videoBackground}
        width={951}
        height={485}
        alt={'Video placeholder'}
        src={'../../../images/video_placeholder.svg'}
      />
      <StaticImage
        width={120}
        height={120}
        className={playerImage}
        alt={'Video player'}
        src={'../../../images/play_button.svg'}
      />
    </div>
  );
};

export default Video;
