
import type { Vec } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { ApprovalFlag } from 'https://deno.land/x/polkadot/types/interfaces/elections/index.ts';

/** @internal */
export function approvalFlagsToBools (flags: Vec<ApprovalFlag> | ApprovalFlag[]): boolean[] {
  const bools: boolean[] = [];

  for (let i = 0, count = flags.length; i < count; i++) {
    const str = flags[i].toString(2);

    // read from lowest bit to highest
    for (const bit of str.split('').reverse()) {
      bools.push(!!parseInt(bit, 10));
    }
  }

  // slice off trailing "false" values, as in substrate
  const lastApproval = bools.lastIndexOf(true);

  return lastApproval >= 0
    ? bools.slice(0, lastApproval + 1)
    : [];
}
