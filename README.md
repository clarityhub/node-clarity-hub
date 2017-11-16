# Clarity Hub SDK for Node.js

[![NPM](https://nodei.co/npm/node-clarity-hub.png)](https://nodei.co/npm/node-clarity-hub/)

[![CircleCI](https://circleci.com/gh/clarityhub/node-clarity-hub/tree/master.svg?style=svg&circle-token=bb12ad3dce1b089d3cfec99839a2bbd0eda5b322)](https://circleci.com/gh/clarityhub/node-clarity-hub/tree/master)

The official Clarity Hub SDK for Node.JS. For Node.JS versions >= 6.12.0.

## Installing

```
yarn add node-clarity-hub
# or
npm install --save node-clarity-hub
```

This package uses `request` and `request-promise` as well:

```
yarn add request request-promise
# or
npm install --save request request-promise
```

## Usage

```js
const ClarityHub = require('node-clarity-hub');

// Doing the Oauth handshake
const response = new ClarityHub().oauth.activate({
  code,
  clientId,
  clientSecret,
});

// Making a request
const client = new ClarityHub({
  accessToken,
  // Optional:
  asUser: '6654ae4b-60be-489e-a315-b74a4494b21d',
});

client.chatMessages.create({
  chatUuid: '833c2e0a-f3b2-41e6-a422-7c412c18eb18',
  text: 'My message',
});
```

## Currently Supported Endpoints

```
client
├── chatMessages
|   ├── create({ chatUuid, text })
|   └── compose({ chatUuid, text })
├── integrationSettings
|   └── update({ integrationUuid, settings })
├── oauth
|   └── activate({ code, clientId, clientSecret })
├── suggestions
|   ├── create({ messageUuid, chatUuid, suggestions })
|   └── delete({ suggestionUuid })
├── usersMe
    └── read()
```

## License

This SDK is distributed under the [MIT License](./LICENSE).