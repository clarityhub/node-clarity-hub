const mockery = require('mockery');
const Bluebird = require('bluebird');
const fs = require('fs');

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false,
  useCleanCache: true
});

mockery.registerMock('request-promise', function (props) {
  return Bluebird.resolve(props);
});


after(function (done) {
  mockery.disable();
  mockery.deregisterAll();
  done();
});