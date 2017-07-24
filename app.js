'use strict';

const elasticsearch = require('./lib/elasticsearch');

module.exports = app => {
  elasticsearch(app);
};
