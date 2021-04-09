import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '@components/molecules/header';

const Home = () => (
  <div className="root">
    <HeaderComponent />
    <h1>Title 1</h1>
    <h2>Title 2</h2>
    <h3>Title 3</h3>
    <h4>Title 4</h4>
    <h5>Title 5</h5>
  </div>
);

export default Home;
