import React, { useEffect, useState } from 'react';

import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import useSWR from 'swr';
import { Link } from '@reach/router';

// import { FooterLinks } from '@locale/en.js';
import { formatDate, paginationList } from '@helpers';
import FooterComponent from '@components/molecules/footer';
import Divider from '@components/atoms/divider';
import { container } from '@styles/main.module.scss';
import MainTitle from '@components/molecules/main-title-card';
import mainHeader from '@images/workwise_blog.png';
import Button from '@components/atoms/button';
import BlogList from '@components/organisms/blog-list';
// import Newsletter from '@components/molecules/newsletter';
import {
  buttonList,
  featurdArticle,
  paginationWrapper,
  pagination,
  pageLink,
  dotStyle,
  selected,
} from './blog.module.scss';
import Title from '@components/molecules/title';

const Blog = () => {
  const [tags, setTags] = useState([{ id: 0, name: 'All' }]);
  const [seoTitle, setSeotitle] = useState(
    'workwise by Atto | Thoughts and ideas on the future of work'
  );
  const [activeItem, setActiveItem] = useState('All');
  const [articles, setArticles] = useState([]);
  const [featured, setFeatured] = useState([]);
  // Fetch Data
  const [pageData, setPagData] = useState(null);
  const [pages, setPages] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  const [loader, setLoader] = useState(true);

  const fetcher = () =>
    fetch(
      `https://app.attotime.com/api/v2/blog` +
        `${activeItem !== 'All' ? '?tag=' + activeItem : ''}` +
        `${pageIndex && `${activeItem !== 'All' ? `&` : '?'}page=` + pageIndex}`
    ).then((res) => {
      return res.json();
    });
  const { data, error } = useSWR(['/api/v2/blog', pageIndex, activeItem], fetcher);

  const handlePrevious = () => {
    if (pageData.prev_page_url) {
      setPageIndex(pageIndex - 1);
    }
  };
  const handleNext = () => {
    if (pageData.next_page_url) {
      setPageIndex(pageIndex + 1);
    }
  };

  const changeTag = (val) => {
    setActiveItem(val);
    setPageIndex(1);
  };

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setLoader(false);
      const otherTags = [...tags, ...data.tags];

      if (tags.length === 1) {
        setTags(otherTags);
      }

      // set fetch data
      setPageIndex(data.paginator.current_page);
      setPagData(data.paginator);

      const paginationItems = paginationList(data.paginator.current_page, data.paginator.limit);
      setPages(paginationItems);
      console.log(Object.values(data.articles));

      // set article data
      setFeatured(data.cover_article);
      setArticles(Object.values(data.articles));
      setSeotitle(data.seo.title);
    }
  }, [data, error]);

  return (
    <div className={container}>
      <Seo title={seoTitle} />
      <HeaderComponent />
      <MainTitle image={mainHeader} subtitle="Thoughts and ideas on the future of work" />
      <div className={buttonList}>
        {tags &&
          tags.map((tag) => (
            <Button
              btnText={tag.name}
              key={tag.id}
              btnStyle={activeItem === tag.name ? 'activeBlogItem' : 'noStyle'}
              onBtnClick={() => changeTag(tag.name)}
            />
          ))}
      </div>
      {featured && (
        <Link to={`/blog-template?slug=${featured?.slug}`} className={featurdArticle}>
          <img src={featured?.cover_image} width={1140} height={450} alt={featured?.title} />
          <Title
            maxWidth={780}
            // smallTitle="Published March 27, 2021 in Productivity   ·   2 min read   ·   by Nick Blackeye"
            smallTitle={`Published at ${formatDate(featured?.published_at)}`}
            title={featured?.title}
          />
        </Link>
      )}
      <Divider className="style4" />
      {articles && <BlogList list={articles} />}
      <Divider />

      {pageData && (
        <nav className={paginationWrapper}>
          <Button
            btnText="Previous"
            btnStyle="teal"
            disabled={pageIndex === pageData.current_page}
            onBtnClick={handlePrevious}
          />
          <ul className={pagination}>
            {pages.map((page) => (
              <>
                <li key={page} className="page-item">
                  {page !== '...' ? (
                    <a
                      onClick={() => (page !== '...' ? setPageIndex(page) : null)}
                      className={`${pageLink} ${page === '...' && dotStyle} ${
                        pageIndex === page && selected
                      }`}
                    >
                      {page}
                    </a>
                  ) : (
                    <span>{page}</span>
                  )}
                </li>
              </>
            ))}
          </ul>
          <Button
            btnText="Next"
            btnStyle="teal"
            disabled={pageIndex === pageData.last_page}
            onBtnClick={handleNext}
          />
        </nav>
      )}

      {/* <Newsletter /> */}
      <Divider className="style2" />
      <FooterComponent />
    </div>
  );
};

export default Blog;
