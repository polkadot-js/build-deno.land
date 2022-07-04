# @polkadot/x-global

A cross-environment global object. checks for global > self > window > this.

Install it via `yarn add @polkadot/x-global`

```js
import { xglobal } from 'https://deno.land/x/polkadot@0.0.3/x-global/mod.ts';

console.log(typeof xglobal.TextEncoder);
```
