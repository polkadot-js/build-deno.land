// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as netInfo } from 'https://deno.land/x/polkadot@0.2.18/networks/packageInfo.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot@0.2.18/util/packageInfo.ts';
import { packageInfo as randomInfo } from 'https://deno.land/x/polkadot@0.2.18/x-randomvalues/mod.ts';

export default [netInfo, utilInfo, randomInfo];
