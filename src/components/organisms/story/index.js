import React from 'react';
import { container, imageContainer, starsPic, paragraphContainer } from './story.module.scss';
import stars from '../../../images/stars.png';

const Story = ({ img, paragraph, author }) => {
  return (
    <div className={container}>
      <div className={imageContainer}>
        <img src={img} />
      </div>
      <div className={paragraphContainer}>
        <img className={starsPic} src={stars} />
        <h4>{paragraph}</h4>
        <h6>{author}</h6>
      </div>
    </div>
  );
};

export default Story;
