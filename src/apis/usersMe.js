module.exports = {
  read: () => {
    return {
      uri: `/accounts/users/me`,
      method: 'GET'
    }
  }
};
