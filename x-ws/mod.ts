// Copyright 2017-2022 @polkadot/x-ws authors & contributors
// SPDX-License-Identifier: Apache-2.0

export { packageInfo } from './packageInfo.ts';

const _WebSocket = WebSocket;

export { _WebSocket as WebSocket };
