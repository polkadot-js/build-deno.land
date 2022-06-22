## deno/polkadot

**Experimental** This is the first release of the Deno interfaces for the polkadot-js family, as such it still needs a lot of testing and comes with no guarantee that it actually does what it says on the tin. Being brand new and not completely tested on end-to-end operation, unfound dragons probably do remain even with very basic operations. If you do try it out, let us know.

Here you will find most of the utilities, generally available elsewhere for Node, the browser and RN in a consumable form for the Deno runtime. 

Access is to be done via the `https://deno.land/x/polkadot/<module>/mod.ts` form, where `<module>` corresponds to the namespace generally found elsewhere for `@polkadot/<module>`. Example usage information -

```js
import { stringToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

console.log(stringToU8a('hello world));
```

For specific issues related to the Deno runtime usage (since this is still _very_ new), please log the issues against the specific repos.
