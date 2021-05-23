import React from 'react';

import ReviewCard from '@components/molecules/review-box';

import { reviewCards } from './review-cards.module.scss';

const ReviewCards = () => (
  <div className={reviewCards}>
    <ReviewCard
      title={`"A must-have for your organization"`}
      rating="5 / 5"
      job="Hightlight Construction Group"
    />
    <ReviewCard
      title={`"A must-have for your organization"`}
      rating="5 / 5"
      job="Hightlight Construction Group"
    />
    <ReviewCard
      title={`"A must-have for your organization"`}
      rating="5 / 5"
      job="Hightlight Construction Group"
    />
  </div>
);

export default ReviewCards;
