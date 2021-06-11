import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/icon';
import HeartIcon from '@images/heart-icon@2x.png';

import {
  container,
  triggerItemWrap,
  triggerItemWrapText,
  swap,
  firstBox,
  titleContainer,
  secondBox,
  imageWrapper,
  listStyle,
  opened,
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
  const [clicked, setClicked] = useState(0);

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
                className={triggerItemWrap}
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
              <div className={`${triggerItemWrapText} ${clicked === index && opened}`}>
                <p>{item.description}</p>
              </div>
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

AccordionArticle.propTypes = {
  title: PropTypes.string,
  list: PropTypes.shape(),
  isSwapped: PropTypes.bool,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  boxHeight: PropTypes.string,
  imagePadding: PropTypes.string,
  image: PropTypes.string,
};

export default AccordionArticle;
