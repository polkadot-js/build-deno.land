// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createVersionedExport } from '../util.ts';
import * as v0 from './v0/index.ts';
import * as v3 from './v3/index.ts';

export default createVersionedExport({ v0, v3 });
