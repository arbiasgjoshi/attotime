/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Icon from '@components/atoms/icon';
import HeartIcon from '@images/heart-icon@2x.png';

import {
  container,
  triggerItemWrap,
  swap,
  firstBox,
  titleContainer,
  secondBox,
  imageWrapper,
  listStyle,
  bottomBorderNone,
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
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    return setClicked(index);
  };

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={firstBox}>
        {title && (
          <div className={titleContainer}>
            <h2>{title}</h2>
          </div>
        )}
        <div className={listStyle}>
          {list?.map((item, index) => (
            <>
              <div
                className={`${triggerItemWrap} ${clicked === index && bottomBorderNone}`}
                onClick={() => toggle(index)}
                onKeyDown={() => toggle(index)}
                role="button"
                key={index}
                tabIndex={index}
              >
                <img src={HeartIcon} width="40" height="40" alt="Heart" />
                <h5>{item.title}</h5>
                <span>
                  {clicked === index ? (
                    <Icon iconClass="arrow-up" />
                  ) : (
                    <Icon iconClass="arrow-down" />
                  )}
                </span>
              </div>
              {clicked === index ? <p>{item.description}</p> : null}
            </>
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
