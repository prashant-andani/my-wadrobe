// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');

const app = express();
app.use(helmet());
//app.use(bodyParser.json());
/**
 * Set of APIs required
 * API to take an image identify the colors, process from the Firebase and return the set of colors
 * API to get the images process them and store in to the Firebase (Admin)
 *
 */
// Serve static assets
// Always return the main index.html, so react-router render the route in the client
app.get('/', (...[, res]) => {
  res.json({ data: 'hello' });
});

module.exports = app;
