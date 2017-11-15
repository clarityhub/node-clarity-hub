const { expect } = require('chai');
const ClarityHub = require('../../src');

describe('Chat Messages', () => {
  let client;

  before(() => {
    client = new ClarityHub({
      accessToken: 'ACCESS_TOKEN',
    });
  });

  it('is part of the SDK', () => {
    expect(client.chatMessages).to.be.an('object');
  });

  describe('compose', () => {
    it('belongs to the chatMessages SDK', () => {
      expect(client.chatMessages.compose).to.not.be.null;
    });

    it('calls the compose method', () => {
      return client.chatMessages.compose({
        text: 'Compose a message',
        chatUuid: 'XXX',
      }).then((calledWith) => {
        expect(calledWith.uri).to.be.equal('https://api.clarityhub.io/chats/XXX/compose');
        expect(calledWith.method).to.be.equal('POST');
        expect(calledWith.body).to.have.key('text');
        expect(calledWith.body.text).to.be.equal('Compose a message');
        expect(calledWith.headers).to.contain.key('access-token');
        expect(calledWith.headers['access-token']).to.be.equal('ACCESS_TOKEN');
        return calledWith;
      });
    });
  });

  describe('create', () => {
    it('belongs to the chatMessages SDK', () => {
      expect(client.chatMessages.create).to.not.be.null;
    });

    it('calls the create method', () => {
      return client.chatMessages.create({
        text: 'My message',
        chatUuid: 'XXX',
      }).then((calledWith) => {
        expect(calledWith.uri).to.be.equal('https://api.clarityhub.io/chats/XXX/msgs');
        expect(calledWith.method).to.be.equal('POST');
        expect(calledWith.body).to.have.key('text');
        expect(calledWith.body.text).to.be.equal('My message');
        expect(calledWith.headers).to.contain.key('access-token');
        expect(calledWith.headers['access-token']).to.be.equal('ACCESS_TOKEN');
        return calledWith;
      });
    });
  });
});