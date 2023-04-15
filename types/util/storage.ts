
import type { StorageEntryTypeLatest } from '../interfaces/metadata/index.ts';
import type { SiLookupTypeId } from '../interfaces/scaleInfo/index.ts';
import type { InterfaceTypes, Registry } from '../types/index.ts';

import { getSiName } from '../metadata/util/index.ts';

/** @internal */
export function unwrapStorageSi (type: StorageEntryTypeLatest): SiLookupTypeId {
  return type.isPlain
    ? type.asPlain
    : type.asMap.value;
}

/** @internal */
export function unwrapStorageType (registry: Registry, type: StorageEntryTypeLatest, isOptional?: boolean): keyof InterfaceTypes {
  const outputType = getSiName(registry.lookup, unwrapStorageSi(type));

  return isOptional
    ? `Option<${outputType}>` as unknown as keyof InterfaceTypes
    : outputType as keyof InterfaceTypes;
}
