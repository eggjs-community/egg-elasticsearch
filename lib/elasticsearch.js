'use strict';

const assert = require('assert');
const elasticsearch = require('elasticsearch');

module.exports = app => {

  const { host } = app.config.elasticsearch || {};

  // check key & secret
  assert(host,
    '[egg-elasticsearch] host is required.');

  app.coreLogger.info('[egg-elasticsearch] setup');

  app.elasticsearch = new elasticsearch.Client(app.config.elasticsearch);
};
