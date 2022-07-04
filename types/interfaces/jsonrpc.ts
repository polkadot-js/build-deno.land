// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionRpcExt, DefinitionRpcSub } from '../types/index.ts';

import { objectSpread } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import * as defs from './definitions.ts';

const jsonrpc: Record<string, Record<string, DefinitionRpcExt>> = {};

Object.keys(defs).forEach((s) =>
  Object.entries(defs[s as 'babe'].rpc || {}).forEach(([method, def]): void => {
    // allow for section overrides
    const section = def.aliasSection || s;

    if (!jsonrpc[section]) {
      jsonrpc[section] = {};
    }

    jsonrpc[section][method] = objectSpread({}, def, {
      isSubscription: !!(def as DefinitionRpcSub).pubsub,
      jsonrpc: `${section}_${method}`,
      method,
      section
    });
  })
);

export default jsonrpc;
