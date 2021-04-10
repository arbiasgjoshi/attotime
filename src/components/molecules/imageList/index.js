import React from 'react';
import { imageListContainer } from './imageList.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const ImageList = () => {
  return (
    <div className={imageListContainer}>
      <StaticImage
        alt="Clock In"
        width={546}
        height={474}
        src={'../../../images/time-tracking-clock.svg'}
      />
    </div>
  );
};

export default ImageList;
