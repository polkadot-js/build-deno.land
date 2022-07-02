// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';
import type { DecoratedMeta } from './types.ts';

import { Metadata } from '../Metadata.ts';
import { decorateConstants } from './constants/index.ts';
import { decorateErrors } from './errors/index.ts';
import { decorateEvents, filterEventsSome } from './events/index.ts';
import { decorateExtrinsics, filterCallsSome } from './extrinsics/index.ts';
import { decorateStorage } from './storage/index.ts';

/**
 * Expands the metadata by decoration into consts, query and tx sections
 */
export function expandMetadata (registry: Registry, metadata: Metadata): DecoratedMeta {
  if (!(metadata instanceof Metadata)) {
    throw new Error('You need to pass a valid Metadata instance to Decorated');
  }

  const latest = metadata.asLatest;
  const version = metadata.version;

  return {
    consts: decorateConstants(registry, latest, version),
    errors: decorateErrors(registry, latest, version),
    events: decorateEvents(registry, latest, version),
    query: decorateStorage(registry, latest, version),
    registry,
    tx: decorateExtrinsics(registry, latest, version)
  };
}

export { decorateConstants, decorateErrors, decorateEvents, decorateExtrinsics, decorateStorage, filterCallsSome, filterEventsSome };
