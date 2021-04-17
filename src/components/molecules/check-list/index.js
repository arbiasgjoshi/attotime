import React from 'react';

import PropTypes from 'prop-types';

import CheckCard from '@components/molecules/check-card';
import { container, hasDescr } from './check-list.module.scss';

const CheckList = ({ titleList, hasDescription = false, smallStyled }) => (
  <div className={`${container} ${hasDescription && hasDescr}`}>
    {titleList.map(({ title, description, id }) => (
      <CheckCard
        key={id}
        hasDescription={hasDescription}
        title={title}
        description={description}
        smallStyled={smallStyled}
      />
    ))}
  </div>
);

CheckList.propTypes = {
  titleList: PropTypes.string,
  hasDescription: PropTypes.bool,
};

export default CheckList;
