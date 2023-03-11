
import type { AnyJson, AnyTuple, Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { Call, FunctionMetadataLatest } from '../../../interfaces/index.ts';
import type { CallFunction, IMethod } from '../../../types/index.ts';

import { stringCamelCase } from 'https://deno.land/x/polkadot/util/mod.ts';

function isTx <A extends AnyTuple> (tx: IMethod<AnyTuple>, callIndex: Uint8Array): tx is IMethod<A> {
  return tx.callIndex[0] === callIndex[0] && tx.callIndex[1] === callIndex[1];
}

/** @internal */
export function createUnchecked (registry: Registry, section: string, callIndex: Uint8Array, callMetadata: FunctionMetadataLatest): CallFunction {
  const expectedArgs = callMetadata.fields;
  const funcName = stringCamelCase(callMetadata.name);

  const extrinsicFn = (...args: unknown[]): Call => {
    if (expectedArgs.length !== args.length) {
      throw new Error(`Extrinsic ${section}.${funcName} expects ${expectedArgs.length} arguments, got ${args.length}.`);
    }

    return registry.createTypeUnsafe('Call', [{ args, callIndex }, callMetadata]);
  };

  extrinsicFn.is = <A extends AnyTuple> (tx: IMethod<AnyTuple>): tx is IMethod<A> =>
    isTx(tx, callIndex);

  extrinsicFn.callIndex = callIndex;
  extrinsicFn.meta = callMetadata;
  extrinsicFn.method = funcName;
  extrinsicFn.section = section;
  extrinsicFn.toJSON = (): AnyJson =>
    callMetadata.toJSON();

  return extrinsicFn as unknown as CallFunction;
}
