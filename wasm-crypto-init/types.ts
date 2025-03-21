
import type { WasmBaseInstance } from 'https://deno.land/x/polkadot/wasm-bridge/types.ts';

/* eslint-disable camelcase */

export interface WasmCryptoInstance extends WasmBaseInstance {
  // exposed functions

  ext_bip39_generate(resLen: 8, words: number): void;

  ext_bip39_to_entropy(resLen: 8, ptrPhrase: number, lenPhrase: number): void;

  ext_bip39_to_mini_secret(resLen: 8, ptrPhrase: number, lenPhrase: number, ptrPass: number, lenPass: number): void;

  ext_bip39_to_seed(resLen: 8, ptrPhrase: number, lenPhrase: number, ptrPass: number, lenPass: number): void;

  ext_bip39_validate(ptrPhrase: number, lenPhrase: number): number;

  ext_ed_from_seed(resLen: 8, ptrSeed: number, lenSeed: number): void;

  ext_ed_sign(resLen: 8, ptrPub: number, lenPub: number, ptrSec: number, lenSec: number, ptrMsg: number, lenMsg: number): void;

  ext_ed_verify(ptrSig: number, lenSig: number, ptrMsg: number, lenMsg: number, ptrPub: number, lenPub: number): number;

  ext_blake2b(resLen: 8, ptrData: number, lenData: number, ptrKey: number, lenKey: number, size: number): void;

  ext_hmac_sha256(resLen: 8, ptrKey: number, lenKey: number, ptrData: number, lenData: number): void;

  ext_hmac_sha512(resLen: 8, ptrKey: number, lenKey: number, ptrData: number, lenData: number): void;

  ext_keccak256(resLen: 8, ptrData: number, lenData: number): void;

  ext_keccak512(resLen: 8, ptrData: number, lenData: number): void;

  ext_pbkdf2(resLen: 8, ptrData: number, lenData: number, ptrSalt: number, lenSalt: number, rounds: number): void;

  ext_scrypt(resLen: 8, ptrPass: number, lenPass: number, ptrSalt: number, lenSalt: number, log2n: number, r: number, p: number): void;

  ext_sha256(resLen: 8, ptrData: number, lenData: number): void;

  ext_sha512(resLen: 8, ptrData: number, lenData: number): void;

  ext_twox(resLen: 8, ptrData: number, lenData: number, rounds: number): void;

  ext_secp_from_seed(reslen: 8, ptrSec: number, lenSec: number): void;

  ext_secp_pub_compress(resLen: 8, ptrPub: number, lenPub: number): void;

  ext_secp_pub_expand(resLen: 8, ptrPub: number, lenPub: number): void;

  ext_secp_recover(resLen: 8, ptrMsgHash: number, lenMsgHash: number, ptrSig: number, lenSig: number, recovery: number): void;

  ext_secp_sign(resLen: 8, ptrMsgHash: number, lenMsgHash: number, ptrSec: number, lenSec: number): void;

  ext_sr_derive_keypair_hard(resLen: 8, ptrPair: number, lenPair: number, ptrCc: number, lenCc: number): void;

  ext_sr_derive_keypair_soft(resLen: 8, ptrPub: number, lenPub: number, ptrCc: number, lenCc: number): void;

  ext_sr_derive_public_soft(resLen: 8, ptrPub: number, lenPub: number, ptrCc: number, lenCc: number): void;

  ext_sr_from_seed(resLen: 8, ptrSeed: number, lenSeed: number): void;

  ext_sr_sign(resLen: 8, ptrPub: number, lenPub: number, ptrSec: number, lenSec: number, ptrMsg: number, lenMsg: number): void;

  ext_sr_verify(ptrSig: number, lenSig: number, ptrMsg: number, lenMsg: number, ptrPub: number, lenPub: number): number;

  ext_sr_agree(resLen: 8, ptrPub: number, lenPub: number, ptrSec: number, lenSec: number): void;

  ext_vrf_sign(resLen: 8, ptrSec: number, lenSec: number, ptrCtx: number, lenCtx: number, ptrMsg: number, lenMsg: number, ptrExtra: number, lenExtra: number): void;

  ext_vrf_verify(ptrPub: number, lenPub: number, ptrCtx: number, lenCtx: number, ptrMsg: number, lenMsg: number, ptrExtra: number, lenExtra: number, ptrProof: number, lenProof: number): number;
}
