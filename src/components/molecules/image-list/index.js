import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ImageList = () => (
  <div>
    <StaticImage
      alt="Clock In"
      width={546}
      height={474}
      src={'../../../images/time-tracking-clock.svg'}
    />
  </div>
);

export default ImageList;
