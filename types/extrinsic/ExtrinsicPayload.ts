
import type { Bytes } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { AnyJson, BareOpts, Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { HexString } from 'https://deno.land/x/polkadot/util/types.ts';
import type { BlockHash } from '../interfaces/chain/index.ts';
import type { ExtrinsicPayloadV4 } from '../interfaces/extrinsics/index.ts';
import type { Hash, MultiLocation } from '../interfaces/types.ts';
import type { ExtrinsicPayloadValue, ICompact, IKeyringPair, INumber, IOption } from '../types/index.ts';
import type { GenericExtrinsicEra } from './ExtrinsicEra.ts';

import { AbstractBase } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import { u8aToHex } from 'https://deno.land/x/polkadot/util/mod.ts';

import { DEFAULT_VERSION } from './constants.ts';

interface ExtrinsicPayloadOptions {
  version?: number;
}

type ExtrinsicPayloadVx = ExtrinsicPayloadV4;

const VERSIONS = [
  'ExtrinsicPayloadUnknown', // v0 is unknown
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadV4'
];

/** @internal */
function decodeExtrinsicPayload (registry: Registry, value?: GenericExtrinsicPayload | ExtrinsicPayloadValue | Uint8Array | string, version: number = DEFAULT_VERSION): ExtrinsicPayloadVx {
  if (value instanceof GenericExtrinsicPayload) {
    return value.unwrap();
  }

  return registry.createTypeUnsafe(VERSIONS[version] || VERSIONS[0], [value, { version }]);
}

/**
 * @name GenericExtrinsicPayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export class GenericExtrinsicPayload extends AbstractBase<ExtrinsicPayloadVx> {
  constructor (registry: Registry, value?: Partial<ExtrinsicPayloadValue> | Uint8Array | string, { version }: ExtrinsicPayloadOptions = {}) {
    super(registry, decodeExtrinsicPayload(registry, value as ExtrinsicPayloadValue, version));
  }

  /**
   * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): BlockHash {
    return this.inner.blockHash;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): GenericExtrinsicEra {
    return this.inner.era;
  }

  /**
   * @description The genesis block [[BlockHash]] the signature applies to
   */
  public get genesisHash (): BlockHash {
    // NOTE only v3+
    return this.inner.genesisHash || this.registry.createTypeUnsafe('Hash', []);
  }

  /**
   * @description The [[Bytes]] contained in the payload
   */
  public get method (): Bytes {
    return this.inner.method;
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): ICompact<INumber> {
    return this.inner.nonce;
  }

  /**
   * @description The specVersion as a [[u32]] for this payload
   */
  public get specVersion (): INumber {
    // NOTE only v3+
    return this.inner.specVersion || this.registry.createTypeUnsafe('u32', []);
  }

  /**
   * @description The [[Balance]]
   */
  public get tip (): ICompact<INumber> {
    // NOTE from v2+
    return this.inner.tip || this.registry.createTypeUnsafe('Compact<Balance>', []);
  }

  /**
   * @description The transaction version as a [[u32]] for this payload
   */
  public get transactionVersion (): INumber {
    // NOTE only v4+
    return this.inner.transactionVersion || this.registry.createTypeUnsafe('u32', []);
  }

  /**
   * @description The (optional) asset id as a [[u32]] or [[MultiLocation]] for this payload
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.inner.assetId;
  }

  /**
   * @description The (optional) [[Hash]] of the genesis metadata for this payload
   */
  public get metadataHash (): IOption<Hash> {
    return this.inner.metadataHash;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public override eq (other?: unknown): boolean {
    return this.inner.eq(other);
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): { signature: HexString } {
    const signature = this.inner.sign(signerPair);

    // This is extensible, so we could quite readily extend to send back extra
    // information, such as for instance the payload, i.e. `payload: this.toHex()`
    // For the case here we sign via the extrinsic, we ignore the return, so generally
    // this is applicable for external signing
    return {
      signature: u8aToHex(signature)
    };
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (isExtended?: boolean, disableAscii?: boolean): AnyJson {
    return this.inner.toHuman(isExtended, disableAscii);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (): any {
    return this.toHex();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'ExtrinsicPayload';
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return this.toHex();
  }

  /**
   * @description Returns a serialized u8a form
   */
  public override toU8a (isBare?: BareOpts): Uint8Array {
    // call our parent, with only the method stripped
    return super.toU8a(isBare ? { method: true } : false);
  }
}
