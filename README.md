[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange?style=flat-square)](https://polkadot.js.org)
![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@polkadot/api?logo=npm&style=flat-square)](https://www.npmjs.com/package/@polkadot/api)
[![beta](https://img.shields.io/npm/v/@polkadot/api/beta?label=beta&logo=npm&&style=flat-square)](https://www.npmjs.com/package/@polkadot/api)
[![maintainability](https://img.shields.io/codeclimate/maintainability-percentage/polkadot-js/api?logo=code-climate&style=flat-square)](https://codeclimate.com/github/polkadot-js/api)
[![coverage](https://img.shields.io/codeclimate/coverage/polkadot-js/api?logo=code-climate&style=flat-square)](https://codeclimate.com/github/polkadot-js/api)

# @setheum-js
Promise and RxJS APIs around Setheum RPC calls. 
This library provides additional typing for users to access Setheum networks by using [setheum.js](https://github.com/setheum-js/api).

# Getting Started

More documentation and examples on [setheum.js.org](https://setheum.js.org).

- Install dependencies

```bash
yarn add @polkadot/api @setheum-js/api@beta
```

- Create API instance

```ts
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@setheum-js/api';

async function main() {
    const provider = new WsProvider('ws://127.0.0.1:9944');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // use api
}

main()
```

- Use api to interact with node

```ts
// query and display account data
const data = await api.query.system.account('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
console.log(data.toHuman())
```

## overview

The API is split up into a number of internal packages -

- [@setheum-js/api](packages/api/) The API library, providing both Promise and RxJS Observable-based interfaces. This is the main user-facing entry point.
- [@setheum-js/api-derive](packages/api-derive/) Derived results that are injected into the API, allowing for combinations of various query results (only used internally and exposed on the Api instances via `api.derive.*`)
- [@setheum-js/app-util](./packages/app-util)
  - Utilities to work with Setheum
- [@setheum-js/types](packages/types/) Codecs for all Polkadot.js type definations for Setheum primitives
