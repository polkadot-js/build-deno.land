// Copyright 2017-2023 @polkadot/x-textdecoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.21/x-global/mod.ts';
import { TextDecoder } from 'https://deno.land/x/polkadot@0.2.21/x-textdecoder/mod.ts';

exposeGlobal('TextDecoder', TextDecoder);
