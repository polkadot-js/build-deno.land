
import type { EventRecord } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { SubmittableResult } from '../index.ts';

export const logEvents = (done: () => Record<string, unknown>): (r: SubmittableResult) => void =>
  ({ events, status }: SubmittableResult): void => {
    console.log('Transaction status:', status.type);

    if (status.isInBlock) {
      console.log('Completed at block hash', status.value.toHex());
      console.log('Events:');

      events.forEach(({ event: { data, method, section }, phase }: EventRecord): void => {
        console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
      });

      if (events.length) {
        done();
      }
    }
  };
