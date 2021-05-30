import React from 'react';
import PropTypes from 'prop-types';

import CheckCard from '@components/molecules/check-card';

import {
  container,
  listContainer,
  firstBox,
  imageWrapper,
} from './vertical-check-list.module.scss';

const VerticalCheckList = ({ image, list }) => {
  return (
    <div className={container}>
      <div className={firstBox}>
        <div className={imageWrapper}>
          <img src={image} />
        </div>
      </div>
      <div className={listContainer}>
        {list.map(({ title, description }) => (
          <CheckCard
            style="workHoursTracker"
            title={title}
            description={description}
            hasDescription
          />
        ))}
      </div>
    </div>
  );
};

VerticalCheckList.propTypes = {
  image: PropTypes.string,
  list: PropTypes.arrayOf({}),
};

export default VerticalCheckList;
