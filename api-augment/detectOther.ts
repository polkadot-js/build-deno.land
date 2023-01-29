// Copyright 2017-2023 @polkadot/api-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as baseInfo } from 'https://deno.land/x/polkadot/api-base/packageInfo.ts';
import { packageInfo as typesInfo } from 'https://deno.land/x/polkadot/types/packageInfo.ts';
import { packageInfo as codecInfo } from 'https://deno.land/x/polkadot/types-codec/packageInfo.ts';

export default [baseInfo, typesInfo, codecInfo];
