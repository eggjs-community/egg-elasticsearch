'use strict';

const elasticsearch = require('./lib/elasticsearch');

module.exports = agent => {
  if (agent.config.elasticsearch.agent) elasticsearch(agent);
};
