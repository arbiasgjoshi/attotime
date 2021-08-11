import React, { useState, useEffect } from 'react';

import Divider from '@components/atoms/divider';
import List from './list';

import { blogListWrapper } from './blog-list.module.scss';

const BlogList = ({ list }) => {
  // const [blogs, setBlogs] = useState();
  // const [loading, setLoading] = useState(false);

  return (
    <div className={blogListWrapper}>
      <List list={list} />
      <Divider className="style4" />
    </div>
  );
};

export default BlogList;
