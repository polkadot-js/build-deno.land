/* eslint-disable */

import type { Bytes, Enum, Option, Struct, Text, U256, Vec, u256, u64 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { H160, H256 } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';

/** @name EvmAccount */
export interface EvmAccount extends Struct {
  readonly nonce: u256;
  readonly balance: u256;
}

/** @name EvmCallInfo */
export interface EvmCallInfo extends Struct {
  readonly exitReason: ExitReason;
  readonly value: Bytes;
  readonly usedGas: U256;
  readonly logs: Vec<EvmLog>;
}

/** @name EvmCallInfoV2 */
export interface EvmCallInfoV2 extends Struct {
  readonly exitReason: ExitReason;
  readonly value: Bytes;
  readonly usedGas: U256;
  readonly weightInfo: Option<EvmWeightInfo>;
  readonly logs: Vec<EvmLog>;
}

/** @name EvmCreateInfo */
export interface EvmCreateInfo extends Struct {
  readonly exitReason: ExitReason;
  readonly value: H160;
  readonly usedGas: U256;
  readonly logs: Vec<EvmLog>;
}

/** @name EvmCreateInfoV2 */
export interface EvmCreateInfoV2 extends Struct {
  readonly exitReason: ExitReason;
  readonly value: H160;
  readonly usedGas: U256;
  readonly weightInfo: Option<EvmWeightInfo>;
  readonly logs: Vec<EvmLog>;
}

/** @name EvmLog */
export interface EvmLog extends Struct {
  readonly address: H160;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
}

/** @name EvmVicinity */
export interface EvmVicinity extends Struct {
  readonly gasPrice: u256;
  readonly origin: H160;
}

/** @name EvmWeightInfo */
export interface EvmWeightInfo extends Struct {
  readonly refTimeLimit: Option<u64>;
  readonly proofSizeLimit: Option<u64>;
  readonly refTimeUsage: Option<u64>;
  readonly proofSizeUsage: Option<u64>;
}

/** @name ExitError */
export interface ExitError extends Enum {
  readonly isStackUnderflow: boolean;
  readonly isStackOverflow: boolean;
  readonly isInvalidJump: boolean;
  readonly isInvalidRange: boolean;
  readonly isDesignatedInvalid: boolean;
  readonly isCallTooDeep: boolean;
  readonly isCreateCollision: boolean;
  readonly isCreateContractLimit: boolean;
  readonly isOutOfOffset: boolean;
  readonly isOutOfGas: boolean;
  readonly isOutOfFund: boolean;
  readonly isPcUnderflow: boolean;
  readonly isCreateEmpty: boolean;
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other';
}

/** @name ExitFatal */
export interface ExitFatal extends Enum {
  readonly isNotSupported: boolean;
  readonly isUnhandledInterrupt: boolean;
  readonly isCallErrorAsFatal: boolean;
  readonly asCallErrorAsFatal: ExitError;
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
}

/** @name ExitReason */
export interface ExitReason extends Enum {
  readonly isSucceed: boolean;
  readonly asSucceed: ExitSucceed;
  readonly isError: boolean;
  readonly asError: ExitError;
  readonly isRevert: boolean;
  readonly asRevert: ExitRevert;
  readonly isFatal: boolean;
  readonly asFatal: ExitFatal;
  readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
}

/** @name ExitRevert */
export interface ExitRevert extends Enum {
  readonly isReverted: boolean;
  readonly type: 'Reverted';
}

/** @name ExitSucceed */
export interface ExitSucceed extends Enum {
  readonly isStopped: boolean;
  readonly isReturned: boolean;
  readonly isSuicided: boolean;
  readonly type: 'Stopped' | 'Returned' | 'Suicided';
}

export type PHANTOM_EVM = 'evm';
