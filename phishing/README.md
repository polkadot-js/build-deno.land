# @polkadot/phishing

To check for sites that are on the list -

```js
import { checkIfDenied } from 'https://deno.land/x/polkadot@0.0.2/phishing/mod.ts';

const isOnDeny = await checkIfDenied(window.location.host);

console.log(`isOnDeny=${isOnDeny}`);
```

To check for addresses that are on the list -

```js
import { checkAddress } from 'https://deno.land/x/polkadot@0.0.2/phishing/mod.ts';

const info = await checkAddress('1b....');

if (info) {
  console.log(`The address is reported as ${info}`);
} else {
  console.log('Not reported');
}
```
