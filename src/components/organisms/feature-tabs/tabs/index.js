import React from 'react';
import {
  container,
  listContainer,
  contentContainer,
  activeContent,
  content,
  isActive,
  item,
} from './tabs.module.scss';

const Tabs = ({ list, handleClick, activeIndex }) => {
  return (
    <div className={container}>
      <div className={listContainer}>
        {list?.map((title, index) => (
          <div
            onClick={() => handleClick(index)}
            className={`${item} ${index === activeIndex && isActive}`}
          >
            <h5 key={index}>{title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
