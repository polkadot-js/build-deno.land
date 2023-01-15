// Copyright 2017-2023 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as netInfo } from 'https://deno.land/x/polkadot@0.2.22/networks/packageInfo.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot@0.2.22/util/packageInfo.ts';
import { packageInfo as randomInfo } from 'https://deno.land/x/polkadot@0.2.22/x-randomvalues/mod.ts';

export default [netInfo, utilInfo, randomInfo];
