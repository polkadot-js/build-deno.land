# @polkadot/wasm-crypto

Wrapper around crypto hashing functions

## Usage

Install the package (also requires `@polkadot/util` for `TextEncoder` polyfills - not included here as a dependency to keep the tree lean)

`yarn add @polkadot/wasm-crypto @polkadot/util`

Use it -

```js
import { u8aToHex } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { bip39Generate, bip39ToSeed, waitReady } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto/mod.ts';

// first wait until the WASM has been loaded (async init)
await waitReady();

// generate phrase
const phrase = bip39Generate(12);

// get ed25519 seed from phrase
const seed = bip39ToSeed(phrase, '');

// display
console.log('phrase:', phrase);
console.log('seed:', u8aToHex(seed));
```
