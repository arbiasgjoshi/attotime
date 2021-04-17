import React from 'react';
import PropTypes from 'prop-types';
import { container, swap, textWrapper, imageWrapper, img } from './check-list-article.module.scss';
import CheckList from '@components/molecules/check-list';
import Title from '@components/molecules/title';

const CheckListArticle = ({ title, description, list, image, isSwapped }) => (
  <div className={`${container} ${isSwapped && swap}`}>
    <div className={textWrapper}>
      <Title title={title} description={description} leftAlign />
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
  list: PropTypes.array,
  image: PropTypes.string,
  isSwapped: PropTypes.bool,
};

export default CheckListArticle;
