import React from 'react';
import { listWrapper } from './list.module.scss';
import BlogCard from '@components/molecules/blog-card';

const List = ({ list }) => {
  return (
    <div className={listWrapper}>
      {list.map(({ title, description, smallTitle, image }) => (
        <BlogCard title={title} description={description} smallTitle={smallTitle} image={image} />
      ))}
    </div>
  );
};

export default List;
