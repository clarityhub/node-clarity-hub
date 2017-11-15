const check = require('../utils/check');

module.exports = {
  create: ({ chatUuid, text }) => {
    return {
      uri: `/chats/${chatUuid}/msgs`,
      method: 'POST',
      body: {
        text,
      },
    };
  },

  compose: ({ chatUuid, text }) => {
    return {
      uri: `/chats/${chatUuid}/compose`,
      method: 'POST',
      body: {
        text,
      },
    };
  },
};
