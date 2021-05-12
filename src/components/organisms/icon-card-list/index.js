import React from 'react';
import IconCard from '@components/molecules/icon-card';
import PropTypes from 'prop-types';
import * as styles from './icon-card-list.module.scss';

const IconCardList = ({ cardList, noImage, hasBigImages = false, style = '' }) => (
  <div className={`${styles.container} ${hasBigImages && styles.gapStyle}`}>
    {cardList.map((card, index) => (
      <IconCard
        key={index}
        title={card.title}
        description={card.description}
        alt={card.alt}
        icon={card.icon}
        imagePadding={card.imagePadding}
        noImage={noImage}
        bigImage={hasBigImages}
        imageWidth={card.imageWidth}
        imageHeight={card.imageHeight}
        style={style}
      />
    ))}
  </div>
);

IconCardList.propTypes = {
  cardList: PropTypes.arrayOf({}),
  noImage: PropTypes.bool,
  hasBigImages: PropTypes.bool,
  style: PropTypes.string,
};

export default IconCardList;
