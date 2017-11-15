module.exports = {
  create: ({ messageUuid, chatUuid, suggestions }) => {
    return {
      uri: `/suggestions/messages/${messageUuid}`,
      method: 'POST',
      body: {
        chatUuid,
        suggestions,
      },
    };
  },

  delete: ({ suggestionUuid }) => {
    return {
      uri: `/suggestions/${suggestionUuid}`,
      method: 'DELETE',
    };
  },
};
