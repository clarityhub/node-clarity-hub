module.exports = {
  activate: ({ code, clientId, clientSecret }) => {
    return {
      uri: `/auth/credentials/code/${code}/activate`,
      method: 'POST',
      headers: () => ({
        'User-Agent': 'node-clarity-hub',
      }),
      body: {
        clientId,
        clientSecret,
      },
    };
  },
};