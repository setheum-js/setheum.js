# 📌 SetCloud Pin

This node package allows you to place a SetCloud storage order on the Setheum Network, and the whole network's IPFS storage nodes **will help you to pin your site/file in a super decentralized way**.

## Getting Started

- Install dependency

```shell
yarn add @setheum.js/setcloud-pin
```

- Create `SetCloudPinner`

Typescript sample

```typescript
import SetCloudPinner from '@setheum.js/setcloud-pin';

const setcloud = new SetCloudPinner(`${SETHEUM_ACCOUNT_SEEDS}`);

async function main() {
    await setcloud.pin('QmVAjL5AkQJ6uwWnJ78YXCVK6FB1cgPtYPRyjnPvoVmb3K');
}

main();
```

or Commonjs sample

```javascript
const setcloudPin = require('@setheum.js/setcloud-pin').default;

const setcloud = new setcloudPin(`${SETHEUM_ACCOUNT_SEEDS}`);

const main = async () => {
    await setcloud.pin('QmVAjL5AkQJ6uwWnJ78YXCVK6FB1cgPtYPRyjnPvoVmb3K');
}

main();
```

## Workflow

Simply to say, SetCloud Pin only handles the **tx-sending**. After that, the storage nodes which received this tx will pull the site from user's IPFS.

## Contribution
  
  Please send a PR(Pull Request) to contribute this repo and read the following rules:

  1. **No `--force` pushes** or modifying the master branch history in any way. If you need to rebase, ensure you do it in your own repo.
  2. **Non-main branches**, prefixed with a short name moniker (e.g. zik/my-feature) must be used for ongoing work.
  3. **All modifications** must be made in **pull-request** to solicit feedback from other contributors.
  4. A pull-request **must not be merged until CI** has finished successfully.
  5. Contributors should adhere to the [Google Typescript Style Guide](https://github.com/google/gts).
