const { expect } = require('chai');
const ClarityHub = require('../../src');

describe('Integration Settings', () => {
  let client;

  before(() => {
    client = new ClarityHub({
      accessToken: 'ACCESS_TOKEN',
    });
  });

  it('is part of the SDK', () => {
    expect(client.integrationSettings).to.be.an('object');
  });

  describe('update', () => {
    it('belongs to the integrationSettings SDK', () => {
      expect(client.integrationSettings.update).to.not.be.null;
    });

    it('calls the update method', () => {
      return client.integrationSettings.update({
        settings: [],
        integrationUuid: 'XXX',
      }).then((calledWith) => {
        expect(calledWith.uri).to.be.equal('https://api.clarityhub.io/integrations/XXX/settings');
        expect(calledWith.method).to.be.equal('PUT');
        expect(calledWith.body).to.have.key('settings');
        expect(calledWith.body.settings).to.be.deep.equal([]);
        expect(calledWith.headers).to.contain.key('access-token');
        expect(calledWith.headers['access-token']).to.be.equal('ACCESS_TOKEN');
        return calledWith;
      });
    });
  });
});