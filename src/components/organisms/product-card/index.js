import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';

import Title from '@components/molecules/title';
import CheckCard from '@components/molecules/check-card';
import arrowIcon from '@images/arrowForward@2x.png';
import * as styles from './product-card.module.scss';

const ProductCard = ({
  productName,
  title,
  description,
  list,
  image,
  isSwapped,
  style = '',
  imagePadding = '',
  path = '/',
}) => (
  <div className={`${styles.container} ${isSwapped && styles.swapped} ${styles[style]}`}>
    <div className={styles.firstWrapper}>
      <div className={styles.textContainer}>
        <p className={styles.prdName}>{productName}</p>
        <Title leftAlign title={title} description={description} />
      </div>
      {list && (
        <div className={styles.listContainer}>
          {list?.map((item) => (
            <CheckCard
              title={item.title}
              hasDescription
              description={item.description}
              style="small"
            />
          ))}
        </div>
      )}
      <div className={styles.learnMoreContainer}>
        <div className={styles.arrowIconContainer}>
          <img src={arrowIcon} alt={title} />
        </div>
        <h5>
          <Link to={path}>Learn more</Link>
        </h5>
        {style === 'homepage' && <div className={styles.arrow} />}
      </div>
    </div>
    <div className={styles.secondWrapper}>
      <div style={{ padding: imagePadding }} className={styles.imageContainer}>
        <img className={styles.img} src={image} alt={title} />
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  productName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.shape(),
  isSwapped: PropTypes.bool,
  style: PropTypes.string,
  imagePadding: PropTypes.string,
};

export default ProductCard;
