import React from 'react';
import { Link } from '@reach/router';
import { formatDate } from '@helpers';
import {
  cardWrapper,
  smallTitleWrapper,
  textContainer,
  imageWrapper,
  horizontalLine,
} from './blog-card.module.scss';

const BlogCard = ({ image, slug, smallTitle, date, title, description }) => {
  return (
    <Link to={`/blog-template?slug=${slug}`} className={cardWrapper}>
      <div className={smallTitleWrapper}>
        <div className={horizontalLine}></div>
        <p>{formatDate(date) + ` · ` + smallTitle}</p>
      </div>
      <div className={imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={textContainer}>
        <div className={horizontalLine}></div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
