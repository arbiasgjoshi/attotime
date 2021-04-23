import React from 'react';
import {
  container,
  firstContainer,
  listWrapper,
  titleWrapper,
  priceWrapper,
  contentWrapper,
} from './package-card.module.scss';
import PropTypes from 'prop-types';
import Button from '@components/atoms/button';
import CheckCard from '@components/molecules/check-card';

const PackageCard = ({ title, usersText, price, listTitle, list, contentText, btnText }) => {
  return (
    <div className={container}>
      <div className={firstContainer}>
        <div className={titleWrapper}>
          <h4>{title}</h4>
          <span>{usersText}</span>
        </div>
        <div className={contentWrapper}>
          {price ? (
            <span className={priceWrapper}>
              $<span>{`${price}`}</span>
              {`${contentText}`}
            </span>
          ) : (
            <p>{contentText}</p>
          )}
        </div>
        <Button btnStyle="wide" btnText={btnText} />
      </div>
      <div className={listWrapper}>
        <h5>{listTitle}</h5>
        {list?.map(({ title: checkTitle }) => (
          <CheckCard title={checkTitle} />
        ))}
      </div>
    </div>
  );
};

PackageCard.propTypes = {
  title: PropTypes.string,
  usersText: PropTypes.string,
  price: PropTypes.string,
  list: PropTypes.arrayOf({}),
  listTitle: PropTypes.string,
  contentText: PropTypes.string,
  btnText: PropTypes.string,
};

export default PackageCard;
