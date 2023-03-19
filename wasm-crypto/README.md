# @polkadot/wasm-crypto

Wrapper around crypto hashing functions

## Usage

Install the package (also requires `@polkadot/util` for `TextEncoder` polyfills - not included here as a dependency to keep the tree lean)

`yarn add @polkadot/wasm-crypto @polkadot/util`

Use it -

```js
import { u8aToHex } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';
import { bip39Generate, bip39ToSeed, waitReady } from 'https://deno.land/x/polkadot@0.2.32/wasm-crypto/mod.ts';

await waitReady();

const phrase = bip39Generate(12);

const seed = bip39ToSeed(phrase, '');

console.log('phrase:', phrase);
console.log('seed:', u8aToHex(seed));
```
