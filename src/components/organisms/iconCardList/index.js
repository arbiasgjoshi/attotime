import React from 'react';
import { container } from './iconCardList.module.scss';
import IconCard from '@components/molecules/iconCard';

const IconCardList = ({ cardList }) => {
  return (
    <div className={container}>
      {cardList.map((card, index) => (
        <IconCard
          key={index}
          title={card.title}
          description={card.description}
          alt={card.alt}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default IconCardList;
