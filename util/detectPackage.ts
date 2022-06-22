// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import others from './detectOther.ts';
import { packageInfo } from './packageInfo.ts';
import { detectPackage } from './versionDetect.ts';

detectPackage(packageInfo, null, others);
