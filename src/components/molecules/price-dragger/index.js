import React, { useState } from 'react';

import Slider from 'rc-slider';

const PriceDragger = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [val, setVal] = useState(18);

  const onDrag = (value) => {
    setVal(value);
  };

  return (
    <div>
      <Slider min={min} max={max} val={val} onChange={(v) => onDrag(v)} />
    </div>
  );
};

export default PriceDragger;
