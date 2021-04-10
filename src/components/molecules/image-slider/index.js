import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { imageSlideContainer } from './image-slider.module.scss';

const ImageSlider = () => {
  return (
    <div className={imageSlideContainer}>
      <StaticImage
        width={378}
        height={380}
        alt="work in the office"
        src="../../../images/work_in_the_office.svg"
      />
      <StaticImage
        width={378}
        height={380}
        alt="work at job sites"
        src="../../../images/work_at_job_sites.svg"
      />
      <StaticImage
        width={378}
        height={380}
        alt="work on the go"
        src="../../../images/work_on_the_go.svg"
      />
    </div>
  );
};

export default ImageSlider;
