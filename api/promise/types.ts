// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic as SubmittableExtrinsicBase } from '../submittable/types.ts';
import type { QueryableStorageEntry as QueryableStorageEntryBase, SubmittableExtrinsicFunction as SubmittableExtrinsicFunctionBase } from '../types/index.ts';

export type QueryableStorageEntry = QueryableStorageEntryBase<'promise'>;
export type SubmittableExtrinsic = SubmittableExtrinsicBase<'promise'>;
export type SubmittableExtrinsicFunction = SubmittableExtrinsicFunctionBase<'promise'>;
