import React from 'react';
import Collapsible from 'react-collapsible';

import Icon from '@components/atoms/icon';

import {
  container,
  swap,
  firstBox,
  titleContainer,
  secondBox,
  imageWrapper,
  triggerItemWrap,
  listStyle,
} from './accordion-article.module.scss';

const AccordionArticle = ({ title, list, image, isSwapped, imagePadding }) => {
  const triggerItem = (val) => (
    <div className={triggerItemWrap}>
      <h5>{val}</h5>
      <Icon iconClass="arrow-down" />
    </div>
  );

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={firstBox}>
        <div className={titleContainer}>
          <h2>{title}</h2>
        </div>
        <div className={listStyle}>
          {list?.map(({ title, description }) => (
            <Collapsible trigger={triggerItem(title)}>
              <p>{description}</p>
            </Collapsible>
          ))}
        </div>
      </div>
      <div className={secondBox}>
        <div style={{ padding: imagePadding }} className={imageWrapper}>
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default AccordionArticle;
