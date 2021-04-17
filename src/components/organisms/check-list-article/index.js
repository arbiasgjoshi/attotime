import React from 'react';
import PropTypes from 'prop-types';
import {
  container,
  swap,
  textWrapper,
  descr2,
  imageWrapper,
  img,
} from './check-list-article.module.scss';
import CheckList from '@components/molecules/check-list';
import Title from '@components/molecules/title';

const CheckListArticle = ({ title, description, description2, list, image, isSwapped }) => (
  <div className={`${container} ${isSwapped && swap}`}>
    <div className={textWrapper}>
      <Title title={title} description={description} leftAlign />
      {description2 && <h5 className={descr2}>{description2}</h5>}
      <CheckList list={list} smallStyled />
    </div>
    <div className={imageWrapper}>
      <img className={img} src={image} />
    </div>
  </div>
);

CheckListArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  list: PropTypes.array,
  image: PropTypes.string,
  isSwapped: PropTypes.bool,
};

export default CheckListArticle;
