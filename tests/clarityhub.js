const { expect } = require('chai');
const ClarityHub = require('../src');

describe('Clarity Hub SDK', () => {
  it('can be created', () => {
    const client = new ClarityHub({
      accessToken: 'XXX',
    });

    expect(client).to.be.an('object');
  });
});