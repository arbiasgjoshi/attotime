import React from 'react';
import { paginationWrapper, pagination } from './pagination.module.scss';
import Button from '@components/atoms/button';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={paginationWrapper}>
      <Button btnText="Previous" />
      <ul className={pagination}>
        {pageNumbers.map((number) => (
          <>
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          </>
        ))}
      </ul>
      <Button btnText="Next" />
    </nav>
  );
};

export default Pagination;
