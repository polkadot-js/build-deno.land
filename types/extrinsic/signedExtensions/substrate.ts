
import type { ExtDef, ExtInfo } from './types.ts';

import { emptyCheck } from './emptyCheck.ts';

const CheckMortality: ExtInfo = {
  extrinsic: {
    era: 'ExtrinsicEra'
  },
  payload: {
    blockHash: 'Hash'
  }
};

export const substrate: ExtDef = {
  ChargeTransactionPayment: {
    extrinsic: {
      tip: 'Compact<Balance>'
    },
    payload: {}
  },
  CheckBlockGasLimit: emptyCheck,
  CheckEra: CheckMortality,
  CheckGenesis: {
    extrinsic: {},
    payload: {
      genesisHash: 'Hash'
    }
  },
  CheckMortality,
  CheckNonZeroSender: emptyCheck,
  CheckNonce: {
    extrinsic: {
      nonce: 'Compact<Index>'
    },
    payload: {}
  },
  CheckSpecVersion: {
    extrinsic: {},
    payload: {
      specVersion: 'u32'
    }
  },
  CheckTxVersion: {
    extrinsic: {},
    payload: {
      transactionVersion: 'u32'
    }
  },
  CheckVersion: {
    extrinsic: {},
    payload: {
      specVersion: 'u32'
    }
  },
  CheckWeight: emptyCheck,
  LockStakingStatus: emptyCheck,
  ValidateEquivocationReport: emptyCheck
};
