// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as netInfo } from 'https://deno.land/x/polkadot@0.2.20/networks/packageInfo.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot@0.2.20/util/packageInfo.ts';
import { packageInfo as randomInfo } from 'https://deno.land/x/polkadot@0.2.20/x-randomvalues/mod.ts';

export default [netInfo, utilInfo, randomInfo];
