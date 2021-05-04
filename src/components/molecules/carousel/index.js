import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.scss';

const Carousel = ({ children }) => {
  return (
    <ReactCarousel
      selectedItem={1}
      infiniteLoop
      transitionTime={700}
      showArrows
      autoPlay
      showThumbs={false}
      showStatus={false}
    >
      {children}
    </ReactCarousel>
  );
};

export default Carousel;
