import React from 'react';
import {
  container,
  firstContainer,
  listWrapper,
  titleWrapper,
  priceWrapper,
  contentWrapper,
} from './package-card.module.scss';
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
            <span>{contentText}</span>
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

export default PackageCard;
