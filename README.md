## deno.land/x/polkadot

This is the polkadot-js packages made available on deno.land/x. Here you will find most of the utilities, generally available elsewhere for Node, the browser and RN in a consumable form for the Deno runtime.

Access is to be done via the `https://deno.land/x/polkadot/<module>/mod.ts` form, where `<module>` corresponds to the namespace generally found elsewhere for `@polkadot/<module>`. Example usage information -

```js
import { stringToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

console.log(stringToU8a('hello world));
```

For specific issues related to the Deno runtime usage (since this is still _very_ new), please log the issues against the specific repos.
