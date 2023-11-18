
import type { Call, Extrinsic } from 'https://deno.land/x/polkadot@0.2.44/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.2.44/types-codec/types/index.ts';
import type { ApiBase } from '../base/index.ts';
import type { ApiInterfaceRx, ApiTypes } from '../types/index.ts';
import type { SubmittableExtrinsic } from './types.ts';

import { createClass } from './createClass.ts';

type Creator<ApiType extends ApiTypes> = (extrinsic: Call | Uint8Array | string) => SubmittableExtrinsic<ApiType>;

export function createSubmittable<ApiType extends ApiTypes> (apiType: ApiTypes, api: ApiInterfaceRx, decorateMethod: ApiBase<ApiType>['_decorateMethod'], registry?: Registry, blockHash?: Uint8Array): Creator<ApiType> {
  const Submittable = createClass<ApiType>({ api, apiType, blockHash, decorateMethod });

  return (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType> =>
    new Submittable(registry || api.registry, extrinsic);
}
