import React, { useState } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedItems/RelatedProducts.jsx';
import StaticStarList from './RatingsAndReviews/StaticStarList.jsx';

function App() {
  const [id, setId] = useState(1);

  return (
    <div data-testid="app">
      Hello world!
      <RelatedProducts id={id} />
      <StaticStarList ratingInt={2.7} />
    </div>
  );
}

export default App;
