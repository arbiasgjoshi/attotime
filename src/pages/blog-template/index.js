import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import useSWR from 'swr';
import { useLocation } from '@reach/router';
// import { Link } from '@reach/router';

import Icon from '@components/atoms/icon';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import BlogTitle from '@components/molecules/blog-title';
import Content from '@components/organisms/content';

// import { FooterLinks } from '@locale/en.js';

import { container } from '@styles/main.module.scss';
import {
  blogTemplateContainer,
  goBackContainer,
  iconWrapper,
  contentWrapper,
} from './blog-template.module.scss';
import TableOfContent from '../../components/molecules/table-of-content';
import { Link } from 'gatsby-plugin-react-intl';

const titleList = [
  'Do your homework',
  'Communication goes a long way',
  'Assign a person of reference. Design version for longer subtitles',
  "Don't vanish",
  'Positive reinforcment',
  'Put a number on it',
  'Pay a fair wage',
];

const BlogTemplate = () => {
  const location = useLocation();
  const [article, setArticle] = useState([]);
  const [related, setRelated] = useState([]);

  const slug = location.search.replaceAll('?slug=', '');
  console.log(slug);

  const fetcher = () =>
    fetch(`https://app.attotime.com/api/v2/blog/${slug}`).then((res) => {
      return res.json();
    });
  const { data, error } = useSWR('/article-search', fetcher);

  useEffect(() => {
    if (data) {
      setArticle(data.article);
      setRelated(data.article.related);
    }
  }, [data, error]);
  return (
    <div className={`${blogTemplateContainer} ${container}`}>
      <Header />
      <div style={{ display: 'flex', paddingRight: '10rem' }}>
        <div className={goBackContainer}>
          <Link to="/blog">
            <div className={iconWrapper}>
              <Icon iconClass="arrow-left" fSize={1.6} />
            </div>
          </Link>
          <p>All posts</p>
        </div>
        <BlogTitle
          smallTitle="Published March 18, 2021 in Productivity   ·   2 min read"
          title={article.title}
          // author="By Nick Blackeye"
        />
      </div>
      <Divider className="style5" />
      <img src={article.cover_image} width={1140} height={450} />
      {/* <StaticImage
        quality={96}
        src="../../images/browser5.jpeg"
        placeholder="none"
      /> */}
      <Divider className="style2" />
      <div className={contentWrapper}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* <TableOfContent list={titleList} /> */}
        </div>
        {/* {article && <Content content={article.body} />} */}
      </div>
      <Divider className="style5" />
      <Footer />
    </div>
  );
};

export default BlogTemplate;
