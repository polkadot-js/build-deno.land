// Copyright 2017-2022 @polkadot/x-bigint authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigInt } from 'https://deno.land/x/polkadot@0.0.3/x-bigint/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.0.3/x-global/mod.ts';

exposeGlobal('BigInt', BigInt);
