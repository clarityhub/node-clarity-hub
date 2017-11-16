const rp = require('request-promise');
const apis = require('./apis');

const qs = (u) => {
  if (u) {
    return { asUser: true, userUuid: u };
  }
  return {};
};

const innerHandler = (outerTarget) => ({
  get: function (target, name) {
    if (target[name]) {
      return (params) => outerTarget.exec(target[name](params));
    }
  }
});

class ClarityHub {
  constructor({ accessToken, url, asUser }) {
    this.accessToken = accessToken;
    this.url = url || 'https://api.clarityhub.io';
    this.asUser = asUser || false;
  }

  exec(params) {
    return rp({
      uri: `${this.url}${params.uri}`,
      method: params.method,
      json: true,
      qs: qs(this.asUser),
      headers: params.headers ? params.headers(this) : {
        'access-token': this.accessToken,
        'User-Agent': 'node-clarity-hub',
      },
      body: params.body || {},
    });
  }
};

module.exports = function (opts) {
  return new Proxy(new ClarityHub(opts), {
    get: function (target, name, receiver) {
      if (apis[name]) {
        return new Proxy(apis[name], innerHandler(target));
      }

      return target[name];
    },
  });
}
