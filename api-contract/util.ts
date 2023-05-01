
import type { SubmittableResult } from 'https://deno.land/x/polkadot@0.2.38/api/mod.ts';
import type { EventRecord } from 'https://deno.land/x/polkadot@0.2.38/types/interfaces/index.ts';

type ContractEvents = 'CodeStored' | 'ContractEmitted' | 'ContractExecution' | 'Instantiated';

export function applyOnEvent <T> (result: SubmittableResult, types: ContractEvents[], fn: (records: EventRecord[]) => T): T | undefined {
  if (result.isInBlock || result.isFinalized) {
    const records = result.filterRecords('contracts', types);

    if (records.length) {
      return fn(records);
    }
  }

  return undefined;
}
