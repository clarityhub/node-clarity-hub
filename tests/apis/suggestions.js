const { expect } = require('chai');
const ClarityHub = require('../../src');

describe('Suggestions', () => {
  let client;

  before(() => {
    client = new ClarityHub({
      accessToken: 'ACCESS_TOKEN',
    });
  });

  it('is part of the SDK', () => {
    expect(client.suggestions).to.be.an('object');
  });

  describe('create', () => {
    it('belongs to the suggestions SDK', () => {
      expect(client.suggestions.create).to.not.be.null;
    });

    it('calls the create method', () => {
      return client.suggestions.create({
        messageUuid: 'XXX',
        chatUuid: 'CCC',
        suggestions: {},
      }).then((calledWith) => {
        expect(calledWith.uri).to.be.equal('https://api.clarityhub.io/suggestions/messages/XXX');
        expect(calledWith.method).to.be.equal('POST');
        expect(calledWith.body).to.contain.key('suggestions');
        expect(calledWith.body.suggestions).to.be.deep.equal({});
        expect(calledWith.body).to.contain.key('chatUuid');
        expect(calledWith.body.chatUuid).to.be.deep.equal('CCC');
        expect(calledWith.headers).to.contain.key('access-token');
        expect(calledWith.headers['access-token']).to.be.equal('ACCESS_TOKEN');
        return calledWith;
      });
    });
  });

  describe('delete', () => {
    it('belongs to the suggestions SDK', () => {
      expect(client.suggestions.delete).to.not.be.null;
    });

    it('calls the delete method', () => {
      return client.suggestions.delete({
        suggestionUuid: 'SSS',
      }).then((calledWith) => {
        expect(calledWith.uri).to.be.equal('https://api.clarityhub.io/suggestions/SSS');
        expect(calledWith.method).to.be.equal('DELETE');
        expect(calledWith.headers).to.contain.key('access-token');
        expect(calledWith.headers['access-token']).to.be.equal('ACCESS_TOKEN');
        return calledWith;
      });
    });
  });
});