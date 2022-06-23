// Copyright 2017-2022 @polkadot/deno authors & contributors
// SPDX-License-Identifier: Apache-2.0

throw new Error(`
  FATAL: Root import found.

  You should not import "https://deno.land/x/polkadot@0.0.0-8/mod.ts" directly,
  you should rather import from a sub-path for any of the exposed interfaces. 

  An example of this, should you wish to access "util", would be to change your
  import to "https://deno.land/x/polkadot/util/mod.ts"
`);
