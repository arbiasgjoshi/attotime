import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/atoms/button';
import CheckCard from '@components/molecules/check-card';
import {
  container,
  firstContainer,
  listWrapper,
  titleWrapper,
  priceWrapper,
  contentWrapper,
  greenSubtitle,
  packageBtnWrap,
} from './package-card.module.scss';

const PackageCard = ({
  title,
  usersText,
  price,
  listTitle,
  list,
  contentText,
  btnText,
  hasGreyBg,
}) => (
  <div className={container}>
    <div className={firstContainer}>
      <div className={titleWrapper}>
        <h4>{title}</h4>
        <h6 className={greenSubtitle}>{usersText}</h6>
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
      <div className={packageBtnWrap}>
        <Button btnStyle="wide" btnText={btnText} />
      </div>
    </div>
    <div className={listWrapper}>
      <h5>{listTitle}</h5>
      {list?.map(({ title: checkTitle, noStyle }) => (
        <CheckCard
          style={!noStyle ? 'pricingStyle' : 'noStyle'}
          grey={hasGreyBg}
          title={checkTitle}
        />
      ))}
    </div>
  </div>
);

PackageCard.propTypes = {
  title: PropTypes.string,
  usersText: PropTypes.string,
  price: PropTypes.string,
  hasGreyBg: PropTypes.bool,
  list: PropTypes.arrayOf({}),
  listTitle: PropTypes.string,
  contentText: PropTypes.string,
  btnText: PropTypes.string,
};

export default PackageCard;
