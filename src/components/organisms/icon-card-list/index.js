import React from 'react';
import IconCard from '@components/molecules/icon-card';
import { container } from './icon-card-list.module.scss';

const IconCardList = ({ cardList, noImage }) => (
  <div className={container}>
    {cardList.map((card, index) => (
      <IconCard
        key={index}
        title={card.title}
        description={card.description}
        alt={card.alt}
        icon={card.icon}
        noImage={noImage}
      />
    ))}
  </div>
);

export default IconCardList;
