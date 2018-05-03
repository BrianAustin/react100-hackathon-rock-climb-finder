const express = require('express');
const app = express();
const axios = require('axios');

const morgan = require('morgan');
app.use(morgan('dev'));

// app.use(express.static('dist'));
// app.use(express.static('public'));

module.exports = app;