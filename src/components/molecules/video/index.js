/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StaticImage, getImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player';

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
  videoPlayer,
  watchButton,
} from './video.module.scss';

const Video = () => {
  const [play, setPlay] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    'https://player.vimeo.com/video/563662750?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  );

  const srcUrl =
    'https://player.vimeo.com/video/563662750?badge=0&amp;autopause=0&amp;&amp;player_id=0&amp;app_id=58479';

  useEffect(() => {
    if (play) {
      setVideoUrl(
        'https://player.vimeo.com/video/563662750?badge=0&amp;autopause=0&amp;autoplay=0&amp;player_id=0&amp;app_id=58479'
      );
    } else {
      setVideoUrl(
        'https://player.vimeo.com/video/563662750?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
      );
    }
  }, [play]);

  return (
    <div className={videoContainer}>
      {!play && (
        <div className={maskOverlay}>
          <span className={`${videoBackground} ${leftAligned}`} />
          <StaticImage
            className={videoPlaceholder}
            width={960}
            height={489}
            quality={96}
            alt="Video placeholder"
            placeholder="none"
            src="../../../images/video_placeholder@2x.png"
          />
          <span className={`${videoBackground} ${rightAligned}`} />
          <div className={playIcon} onClick={() => setPlay(true)} role="button" tabIndex="-1">
            <Icon iconClass="play" fSize={11} />
          </div>
          <div className={watchButton}>
            <Button btnText="Watch Video" btnStyle="round" onBtnClick={() => setPlay(true)} />
          </div>
        </div>
      )}
      <div className={videoPlayer}>
        {/* <ReactPlayer url="https://vimeo.com/563662750" playing={play} width="100%" height="100%" /> */}
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src={videoUrl}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
            title="Atto  &amp;middot;  Time tracking, simplified"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
};
Video.propTypes = {
  videoUrl: PropTypes.string,
};

export default Video;
