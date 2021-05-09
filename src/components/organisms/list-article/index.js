import React, { useEffect, useState } from 'react';
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

const ListArticle = ({
  title,
  description,
  description2,
  list,
  image,
  isSwapped,
  imagePadding = '',
  imageHeight,
  imageWidth,
}) => {
  const [image2, setImage2] = useState(null); //TODO If we have svg and .img files coming in props. For now!
  useEffect(() => {
    typeof image == 'string'
      ? setImage2(<img width={imageWidth} height={imageHeight} className={img} src={image} />)
      : setImage2(image);
  }, []);

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={textWrapper}>
        <Title title={title} description={description} leftAlign />
        {description2 && <p className={descr2}>{description2}</p>}
        <CheckList list={list} cardStyle="small" />
      </div>
      <div className={secondBlock}>
        <div style={{ padding: imagePadding }} className={imageWrapper}>
          {image2}
        </div>
      </div>
    </div>
  );
};

ListArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  list: PropTypes.array,
  image: PropTypes.string,
  isSwapped: PropTypes.bool,
  imagePadding: PropTypes.string,
};

export default ListArticle;
