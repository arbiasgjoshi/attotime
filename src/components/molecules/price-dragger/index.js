import React, { useState } from 'react';

import Slider from 'rc-slider';

import {
  draggerResults,
  draggerWrapper,
  plansWrapper,
  planCard,
  currency,
  pricingValue,
  plan,
} from './price-dragger.module.scss';
import '@styles/utils/_rcslider.scss';

const PriceDragger = () => {
  const [val, setVal] = useState(1);

  const onDrag = (value) => {
    setVal(value);
  };

  return (
    <div className={draggerWrapper}>
      <div className={draggerResults} style={{ marginLeft: `${val}rem` }}>
        <h5>{val} Users</h5>
      </div>
      <Slider min={1} max={100} val={val} onChange={(v) => onDrag(v)} />
      <div className={plansWrapper}>
        <div className={planCard}>
          <h6>Monthly Plan</h6>
          <div className={pricingValue}>
            <p className={currency}>$</p>
            <h2>{val * 7}</h2>
            <p className={plan}>/ month</p>
          </div>
        </div>
        <div className={planCard}>
          <h6>Annual Plan &middot; Save 29%</h6>

          <div className={pricingValue}>
            <p className={currency}>$</p>
            <h2>{val * 5}</h2>
            <p className={plan}>/ annual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDragger;
