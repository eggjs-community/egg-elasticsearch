'use strict';

module.exports = app => {
  app.get('/', function* () {
    try {
      const result = yield app.elasticsearch.search();
      this.body = result;
    } catch (error) {
      this.status = 500;
      this.body = error;
    }
  });
};
