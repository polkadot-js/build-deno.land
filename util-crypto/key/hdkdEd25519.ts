
import { ed25519DeriveHard, ed25519PairFromSeed } from '../ed25519/index.ts';
import { createSeedDeriveFn } from './hdkdDerive.ts';

export const keyHdkdEd25519 = /*#__PURE__*/ createSeedDeriveFn(ed25519PairFromSeed, ed25519DeriveHard);
