import React from 'react';
import PropTypes from 'prop-types';

import Divider from '@components/atoms/divider';
import Video from '@components/molecules/video';
import CheckList from '@components/molecules/check-list';

import { container, checkListContainer } from './video-checklist.module.scss';

const VideoCheckList = ({ list, cardStyle }) => (
  <div className={container}>
    <Video />
    <Divider className="style2" />
    <div className={checkListContainer}>
      <CheckList list={list} cardStyle={cardStyle} />
    </div>
  </div>
);

VideoCheckList.propTypes = {
  list: PropTypes.arrayOf({}),
  cardStyle: PropTypes.string,
};

export default VideoCheckList;
