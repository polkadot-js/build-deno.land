
import 'https://deno.land/x/polkadot@0.2.35/types-augment/mod.ts';

import type { Bytes, Compact, Option, u32 } from 'https://deno.land/x/polkadot@0.2.35/types-codec/mod.ts';
import type { IOption, ITuple } from 'https://deno.land/x/polkadot@0.2.35/types-codec/types/index.ts';
import type { AccountId, BlockAttestations, SessionKeys7 } from './interfaces/index.ts';

import { assert } from 'https://deno.land/x/polkadot@0.2.35/util/mod.ts';

import { TypeRegistry } from './create/index.ts';

const registry = new TypeRegistry();

const oo0 = registry.createType('Something' as 'u32');
const oo1 = registry.createType<BlockAttestations>('u32');
const oo2 = registry.createType<SessionKeys7>('u32');
const oo3 = registry.createType<u32>('Something');
const oo4 = registry.createType<AccountId>('Option<u32>');
const oo5 = registry.createType<IOption<u32>>('u32');
const oo6 = registry.createType<Option<Compact<u32>>>('u32');
const oo7 = registry.createType<Bytes>('u64');
const oo8 = registry.createType<ITuple<[Bytes, u32]>>('(u32)');

assert(oo0.divn(123) && [...oo1.values()] && oo2[6].isAscii && oo3.divn(3) && oo4.isAscii && oo5.unwrap().divn(1) && oo6.unwrap().unwrap().divn(1) && oo7.isAscii && oo8[1].toNumber(), 'All ok');

const aa0 = registry.createType(' AccountId');
const aa1 = registry.createType('BlockAttestations');
const aa2 = registry.createType('ExtrinsicEra');
const aa3 = registry.createType('VestingInfo');
const aa4 = registry.createType('(Vec<ValidatorIndex>, CompactAssignmentsTo257, PhragmenScore, EraIndex)');

assert(aa0.isAscii && aa1.receipt && aa2.isMortalEra && aa3.toHuman() && aa4[3].toNumber(), 'All ok');

const bb = registry.createType('Something');

assert(bb.toHuman(), 'All ok');

const ee = registry.createType('Vec<Option<Compact<ReferendumIndex>>>');
const vb = registry.createType('Option< Vec< u8 > >');
const vv = registry.createType('Vec< Vec< Vec< Vec<u8>> > >');
const vt = registry.createType('Vec<(u8, u16)>');
const vn = registry.createType('Vec<(u32, (u32, u64), Vec<u8>, Vec<u32>, Vec<(u32, u64)>, [u8;32], [u128;32])>');
const nf = registry.createType('[[[u8;32];5];3]');
const tl = registry.createType('(ValidatorPrefsWithCommission, Linkage<AccountId>)');

assert(ee[0].unwrap().unwrap().divn(123) && vb.unwrap().bitLength() && vv.toHuman() && vn[0][3][0].bitLength() && vt.toHuman() && nf.toHuman() && tl[1].next, 'All ok');

const vs = registry.createType('(u8, {"a":"u32","b":"(u32,u64)"},(u8,u16),{"foo":"Bar"},u16)');
const st = registry.createType('{"_set": { "A": 1, "B": 2, "C": 4 } }');
const en = registry.createType('{"_enum": { "A": 1, "B": 2, "C": 4 } }');

assert(vs.toHuman() && st.strings && en.index, 'All ok');

const gg = registry.createType('[ u8   ;678]');

assert(gg.subarray(1), 'All ok');

const hh = registry.createType('[u128; 32]');
const ms = registry.createType('(BTreeSet<u8>, BTreeMap<u16, u32>, HashMap<u64, u128>)');

assert(hh[0].bitLength() && ms[0].strings && ms[1].values() && ms[2].keys, 'All ok');

const tt1 = registry.createType('(u32, Compact<u64>,    u128  , Something)');
const tt2 = registry.createType('(((u32)))');
const tt4 = registry.createType('(u8,u16,u32,u64,u128,u256,u8,u16,u32,u64,u128,u256,u8,u16,u32,u64,u128,u256,u8)');
const tt5 = registry.createType('()');
const tt6 = registry.createType('(u8, (u16, (u32, u64, u128)), (u64, u128))');
const tt7 = registry.createType('(((u8, u16, u32), (u32, u16, u8)), u128, u256)');
const tt8 = registry.createType('(u8, Vec<(u16, u32)>, Option<(u128, u128)>)');
const tt9 = registry.createType('(u32, (u32, u64), Vec<u8>, Vec<(u32, u64)>, [u8;32], [u128;32])');
const tta = registry.createType('([u8;32], [u16;5])');

assert(tt1[2].bitLength() && tt2.bitLength() && tt4[3].bitLength() && tt5.isEmpty && tt6[1].toHuman() && tt7.toHuman() && tt8.toHuman() && tt9.toHuman() && tta[1][1].bitLength(), 'All ok');
