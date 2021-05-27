import React from 'react';
import Collapsible from 'react-collapsible';

import Icon from '@components/atoms/icon';
import HeartIcon from '@images/heart-icon@2x.png';
import './accordionCollapsible.scss';

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

const AccordionArticle = ({
  title,
  list,
  image,
  isSwapped,
  imagePadding,
  imageWidth,
  imageHeight,
  boxHeight,
}) => {
  const triggerItem = (val) => (
    <div className={triggerItemWrap}>
      <img src={HeartIcon} width="40" height="40" alt="Heart" />
      <h5>{val}</h5>
      <Icon iconClass="arrow-down" />
    </div>
  );

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={firstBox}>
        {title && (
          <div className={titleContainer}>
            <h2>{title}</h2>
          </div>
        )}
        <div className={listStyle}>
          {list?.map(({ title, description }) => (
            <Collapsible trigger={triggerItem(title)} transitionTime={200}>
              <p>{description}</p>
            </Collapsible>
          ))}
        </div>
      </div>
      <div className={secondBox}>
        <div style={{ padding: imagePadding, height: boxHeight }} className={imageWrapper}>
          <img src={image} alt={title} width={imageWidth} height={imageHeight} />
        </div>
      </div>
    </div>
  );
};

export default AccordionArticle;
