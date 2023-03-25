
import type { Transport, TransportDef, TransportType } from './types.ts';

export function createDefs (...items: readonly [type: TransportType, Clazz: unknown][]): TransportDef[] {
  return items.map(([type, Clazz]): TransportDef => ({
    create: (): Promise<Transport> =>
      (Clazz as Pick<TransportDef, 'create'>).create(),
    type
  }));
}
