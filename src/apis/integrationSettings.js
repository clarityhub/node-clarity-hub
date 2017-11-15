module.exports = {
  update: ({ integrationUuid, settings }) => {
    return {
      uri: `/integrations/${integrationUuid}/settings`,
      method: 'PUT',
      body: {
        settings,
      },
    };
  },
};
