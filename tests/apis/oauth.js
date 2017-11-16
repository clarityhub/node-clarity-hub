const { expect } = require('chai');
const ClarityHub = require('../../src');

describe('Oauth', () => {
  let client;

  before(() => {
    client = new ClarityHub({
      accessToken: 'ACCESS_TOKEN',
    });
  });

  it('is part of the SDK', () => {
    expect(client.oauth).to.be.an('object');
  });

  describe('activate', () => {
    it('belongs to the oauth SDK', () => {
      expect(client.oauth.activate).to.not.be.null;
    });

    it('calls the activate method', () => {
      return client.oauth.activate({
        code: 'testing',
        clientId: 'myClientId',
        clientSecret: 'myClientSecret',
      }).then((calledWith) => {
        expect(calledWith.uri).to.be.equal('https://api.clarityhub.io/auth/credentials/code/testing/activate');
        expect(calledWith.method).to.be.equal('POST');
        expect(calledWith.body).to.be.deep.equal({
          clientId: 'myClientId',
          clientSecret: 'myClientSecret',
        });
        expect(calledWith.headers).to.not.contain.key('access-token');
        return calledWith;
      });
    });
  });
});