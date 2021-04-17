import React from 'react';

import PropTypes from 'prop-types';

import CheckCard from '@components/molecules/check-card';
import { container, hasDescr, smallCardStyle } from './check-list.module.scss';

const CheckList = ({ list, hasDescription = false, smallStyled = false }) => (
  <div className={`${container} ${hasDescription && hasDescr} ${smallStyled && smallCardStyle}`}>
    {list.map(({ title, description, id }) => (
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
  list: PropTypes.string,
  hasDescription: PropTypes.bool,
};

export default CheckList;
