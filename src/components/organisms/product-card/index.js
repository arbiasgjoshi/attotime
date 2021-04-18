import React from 'react';
import PropTypes from 'prop-types';
import {
  container,
  textContainer,
  prdName,
  listContainer,
  leftWrapper,
  rightWrapper,
  learnMore,
  img,
  swapped,
} from './product-card.module.scss';

import Title from '@components/molecules/title';
import CheckCard from '@components/molecules/check-card';

const ProductCard = ({ productName, title, description, list, image, isSwapped }) => {
  return (
    <div className={`${container} ${isSwapped && swapped}`}>
      <div className={leftWrapper}>
        <div className={textContainer}>
          <p className={prdName}>{productName}</p>
          <Title leftAlign title={title} description={description} />
        </div>
        <div className={listContainer}>
          {list?.map((item) => (
            <CheckCard title={item.title} hasDescription description={item.description} />
          ))}
        </div>
        <p className={learnMore}>Learn More</p>
      </div>
      <div className={rightWrapper}>
        <img className={img} src={image} />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.array,
  isSwapped: PropTypes.bool,
};

export default ProductCard;
