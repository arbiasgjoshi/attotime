import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from '@components/molecules/blog-card';

import { listWrapper } from './list.module.scss';

const List = ({ list }) => (
  <div className={listWrapper}>
    {list.map(({ title, seo_description, slug, published_at, tag, cover_image }, idx) => (
      <BlogCard
        title={title}
        description={seo_description}
        key={idx}
        date={published_at}
        slug={slug}
        smallTitle={tag}
        image={cover_image}
      />
    ))}
  </div>
);

List.propTypes = {
  list: PropTypes.arrayOf({}),
};

export default List;
