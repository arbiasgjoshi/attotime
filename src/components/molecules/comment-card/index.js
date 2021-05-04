import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import {
  container,
  profilePicture,
  authorWrapper,
  content,
  starsWrapper,
  starsImg,
} from './comment-card.module.scss';

const CommentCard = ({ date, title, description, author, authorImage }) => (
  <div className={container}>
    <div className={starsWrapper}>
      <StaticImage className={starsImg} src="../../../images/stars.png" />
      <span>{date}</span>
    </div>
    <div className={content}>
      <h6>{title}</h6>
      <span>{description}</span>
      <div className={authorWrapper}>
        <div className={profilePicture}>
          <img src={authorImage} />
        </div>
        <span>{author}</span>
      </div>
    </div>
  </div>
);

CommentCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  authorImage: PropTypes.string,
};

export default CommentCard;
