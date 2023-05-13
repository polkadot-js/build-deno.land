
import type { OverrideVersionedType } from 'https://deno.land/x/polkadot@0.2.39/types/types/index.ts';

import { versioned as centrifugeChain } from './centrifuge-chain.ts';
import { versioned as kusama } from './kusama.ts';
import { versioned as node } from './node.ts';
import { versioned as nodeTemplate } from './node-template.ts';
import { versioned as polkadot } from './polkadot.ts';
import { versioned as rococo } from './rococo.ts';
import { versioned as shell } from './shell.ts';
import { versioned as statemint } from './statemint.ts';
import { versioned as westend } from './westend.ts';

export const typesSpec: Record<string, OverrideVersionedType[]> = {
  'centrifuge-chain': centrifugeChain,
  kusama,
  node,
  'node-template': nodeTemplate,
  polkadot,
  rococo,
  shell,
  statemine: statemint,
  statemint,
  westend,
  westmint: statemint
};
