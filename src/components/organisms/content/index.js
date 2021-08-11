import React from 'react';

import Divider from '@components/atoms/divider';
import Newsletter from '@components/molecules/newsletter';

import { contentContainer } from './content.module.scss';
// import { StaticImage } from 'gatsby-plugin-image';

const Content = ({ content }) => {
  const parsedContent = new DOMParser().parseFromString(content, 'text/html').documentElement;

  return (
    <div className={contentContainer}>
      {content && console.log(parsedContent.body.innerHTML)}
      <Divider className="style1" />
      <Newsletter style="column" />
    </div>
  );
};

export default Content;
