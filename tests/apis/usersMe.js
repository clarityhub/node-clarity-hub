const { expect } = require('chai');
const ClarityHub = require('../../src');

describe('Users Me', () => {
  let client;

  before(() => {
    client = new ClarityHub({
      accessToken: 'ACCESS_TOKEN',
    });
  });

  it('is part of the SDK', () => {
    expect(client.usersMe).to.be.an('object');
  });

  describe('read', () => {
    it('belongs to the usersMe SDK', () => {
      expect(client.usersMe.read).to.not.be.null;
    });

    it('calls the read method', () => {
      return client.usersMe.read().then((calledWith) => {
        expect(calledWith.uri).to.be.equal('https://api.clarityhub.io/accounts/users/me');
        expect(calledWith.method).to.be.equal('GET');
        expect(calledWith.headers).to.contain.key('access-token');
        expect(calledWith.headers['access-token']).to.be.equal('ACCESS_TOKEN');
        return calledWith;
      });
    });
  });
});