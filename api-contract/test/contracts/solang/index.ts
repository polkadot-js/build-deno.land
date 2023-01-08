// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createVersionedExport } from '../util.ts';
import * as v0 from './v0/index.ts';

export default createVersionedExport({ v0 });
