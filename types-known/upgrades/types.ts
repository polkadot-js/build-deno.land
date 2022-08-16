// Copyright 2017-2022 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.2.1/util/types.ts';

export type ChainUpgradesRaw = [number, number][];

export type ChainUpgradesGenerated = [number, number, [HexString, number][]][];

export type ChainUpgradesManual = [number, number][];
