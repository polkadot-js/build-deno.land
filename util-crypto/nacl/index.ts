// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @summary Implements [NaCl](http://nacl.cr.yp.to/) secret-key authenticated encryption, public-key authenticated encryption
 */
export { naclDecrypt } from './decrypt.ts';
export { naclEncrypt } from './encrypt.ts';
export { naclBoxPairFromSecret } from './box/fromSecret.ts';
export { naclOpen } from './open.ts';
export { naclSeal } from './seal.ts';
