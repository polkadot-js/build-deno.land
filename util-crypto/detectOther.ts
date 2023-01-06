// Copyright 2017-2023 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as netInfo } from 'https://deno.land/x/polkadot/networks/packageInfo.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot/util/packageInfo.ts';
import { packageInfo as randomInfo } from 'https://deno.land/x/polkadot/x-randomvalues/mod.ts';

export default [netInfo, utilInfo, randomInfo];
