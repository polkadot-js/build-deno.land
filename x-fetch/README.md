# @polkadot/x-fetch

A cross-environment fetch.

Install it via `yarn add @polkadot/x-fetch`

```js
import { fetch } from 'https://deno.land/x/polkadot@0.0.2/x-fetch/mod.ts';

...
const response = await fetch('https://example.com/something.json');
const json = await response.json();
```
