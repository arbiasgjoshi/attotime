import React from 'react';
import PropTypes from 'prop-types';
import { container, textWrapper, imageWrapper, secondBlock, swap } from './article.module.scss';

const Article = ({ title, description, image, isSwapped = false }) => {
  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={textWrapper}>
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
};

export default Article;
