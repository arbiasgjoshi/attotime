import { blogListWrapper } from './blog-list.module.scss';
import List from './list';
import Pagination from './pagination';
import React, { useState } from 'react';
import Divider from '@components/atoms/divider';

const BlogList = ({ list }) => {
  const [blogs, setBlogs] = useState(list);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4);

  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={blogListWrapper}>
      <List list={currentPosts} />
      <Divider className="style4" />
      <Pagination
        currentPage={currentPage}
        postsPerPage={blogsPerPage}
        totalPosts={blogs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default BlogList;
