// Copyright 2017-2023 @polkadot/api-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as baseInfo } from 'https://deno.land/x/polkadot@0.2.21/api-base/packageInfo.ts';
import { packageInfo as typesInfo } from 'https://deno.land/x/polkadot@0.2.21/types/packageInfo.ts';
import { packageInfo as codecInfo } from 'https://deno.land/x/polkadot@0.2.21/types-codec/packageInfo.ts';

export default [baseInfo, typesInfo, codecInfo];
