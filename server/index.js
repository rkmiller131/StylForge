// server to query API
require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', routes.getProductByID);
app.get('/products/styles', routes.getProductStyles);
app.get('/products/related', routes.getRelatedProducts);

app.get('/reviews', routes.getReviews);
app.get('/reviews/meta', routes.getReviewMetaData);
app.post('/reviews', routes.addReviews);
app.put('/reviews/helpful', routes.markReviewHelpful);
app.put('/reviews/report', routes.reportReview);

// listen on port from .env
const port = 3000;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
