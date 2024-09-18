/* eslint-disable */

import type { Enum, Option, Result, Struct, Vec } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { Pays, Weight } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';
import type { DispatchError, Event } from 'https://deno.land/x/polkadot/types/interfaces/system/index.ts';
import type { OutcomeV4, VersionedMultiLocation, VersionedXcm } from 'https://deno.land/x/polkadot/types/interfaces/xcm/index.ts';

/** @name CallDryRunEffects */
export interface CallDryRunEffects extends Struct {
  readonly executionResult: DispatchResultWithPostInfo;
  readonly emittedEvents: Vec<Event>;
  readonly localXcm: Option<VersionedXcm>;
  readonly forwardedXcms: Vec<ITuple<[VersionedMultiLocation, Vec<VersionedXcm>]>>;
}

/** @name DispatchResultWithPostInfo */
export interface DispatchResultWithPostInfo extends Result<PostDispatchInfo, DispatchError> {
  readonly isErr: boolean;
  readonly asErr: DispatchError;
  readonly isOk: boolean;
  readonly asOk: PostDispatchInfo;
}

/** @name PostDispatchInfo */
export interface PostDispatchInfo extends Struct {
  readonly actualWeight: Option<Weight>;
  readonly paysFee: Pays;
}

/** @name XcmDryRunApiError */
export interface XcmDryRunApiError extends Enum {
  readonly isUnimplemented: boolean;
  readonly isVersionedConversionFailed: boolean;
  readonly type: 'Unimplemented' | 'VersionedConversionFailed';
}

/** @name XcmDryRunEffects */
export interface XcmDryRunEffects extends Struct {
  readonly executionResult: OutcomeV4;
  readonly emittedEvents: Vec<Event>;
  readonly forwardedXcms: Vec<ITuple<[VersionedMultiLocation, Vec<VersionedXcm>]>>;
}

export type PHANTOM_DRYRUNAPI = 'dryRunApi';
