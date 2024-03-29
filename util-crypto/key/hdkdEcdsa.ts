
import { secp256k1DeriveHard } from '../secp256k1/deriveHard.ts';
import { secp256k1PairFromSeed } from '../secp256k1/pair/fromSeed.ts';
import { createSeedDeriveFn } from './hdkdDerive.ts';

export const keyHdkdEcdsa = /*#__PURE__*/ createSeedDeriveFn(secp256k1PairFromSeed, secp256k1DeriveHard);
