import React from 'react';
import PropTypes from 'prop-types';
import {
  container,
  swap,
  textWrapper,
  descr2,
  secondBlock,
  imageWrapper,
  img,
} from './list-article.module.scss';
import CheckList from '@components/molecules/check-list';
import Title from '@components/molecules/title';

const ListArticle = ({ title, description, description2, list, image, isSwapped }) => (
  <div className={`${container} ${isSwapped && swap}`}>
    <div className={textWrapper}>
      <Title title={title} description={description} leftAlign />
      {description2 && <p className={descr2}>{description2}</p>}
      <CheckList list={list} cardStyle="small" />
    </div>
    <div className={secondBlock}>
      <div className={imageWrapper}>
        <img className={img} src={image} />
      </div>
    </div>
  </div>
);

ListArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  list: PropTypes.array,
  image: PropTypes.string,
  isSwapped: PropTypes.bool,
};

export default ListArticle;
