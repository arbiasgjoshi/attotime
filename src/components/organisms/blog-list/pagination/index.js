import React from 'react';
import { paginationWrapper, pagination, pageLink, selected } from './pagination.module.scss';
import Button from '@components/atoms/button';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    if (pageNumbers[currentPage]) {
      paginate(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (pageNumbers[currentPage - 1] && currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <nav className={paginationWrapper}>
      <Button btnText="Previous" btnStyle="teal" onBtnClick={handlePrevious} />
      <ul className={pagination}>
        {pageNumbers.map((number) => (
          <>
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                className={`${pageLink} ${currentPage === number && selected}`}
              >
                {number}
              </a>
            </li>
          </>
        ))}
      </ul>
      <Button btnText="Next" btnStyle="teal" onBtnClick={handleNext} />
    </nav>
  );
};

export default Pagination;
