import React from 'react';
import PropTypes from 'prop-types';
import { container, textWrapper, imageWrapper, secondBlock, swap } from './article.module.scss';

const Article = ({ title, description, image, isSwapped = false, maxWidth }) => {
  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div style={maxWidth && { maxWidth }} className={textWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={secondBlock}>
        <div className={imageWrapper}>
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isSwapped: PropTypes.bool,
  maxTitleWidth: PropTypes.number,
};

export default Article;
