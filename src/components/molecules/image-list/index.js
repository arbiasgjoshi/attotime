import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { imageListContainer } from './image-list.module.scss';

const ImageList = () => (
  <div className={imageListContainer}>
    <StaticImage
      alt="Clock In"
      height={474}
      quality={90}
      src="../../../images/banner-image-2@2x.png"
    />
  </div>
);

export default ImageList;
