
import type { SignOptions } from 'https://deno.land/x/polkadot/keyring/types.ts';
import type { Hash, MultiLocation } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { Bytes } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { Inspect, Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { HexString } from 'https://deno.land/x/polkadot/util/types.ts';
import type { BlockHash } from '../../interfaces/chain/index.ts';
import type { ExtrinsicEra } from '../../interfaces/extrinsics/index.ts';
import type { ExtrinsicPayloadValue, ICompact, IKeyringPair, INumber, IOption } from '../../types/index.ts';

import { Enum, Struct } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import { objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { decodeAssetId } from '../ExtrinsicPayload.ts';
import { sign } from '../util.ts';

/**
 * @name GenericExtrinsicPayloadV4
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is
 * variable length based on the contents included
 */
export class GenericExtrinsicPayloadV4 extends Struct {
  #signOptions: SignOptions;

  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | HexString) {
    super(registry, objectSpread(
      { method: 'Bytes' },
      registry.getSignedExtensionTypes(),
      registry.getSignedExtensionExtra()
    ), decodeAssetId(registry, value));

    // Do detection for the type of extrinsic, in the case of MultiSignature
    // this is an enum, in the case of AnySignature, this is a Hash only
    // (which may be 64 or 65 bytes)
    this.#signOptions = {
      withType: registry.createTypeUnsafe('ExtrinsicSignature', []) instanceof Enum
    };
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public override inspect (): Inspect {
    return super.inspect({ method: true });
  }

  /**
   * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): BlockHash {
    return this.getT('blockHash');
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.getT('era');
  }

  /**
   * @description The genesis [[BlockHash]] the signature applies to (mortal/immortal)
   */
  public get genesisHash (): BlockHash {
    return this.getT('genesisHash');
  }

  /**
   * @description The [[Bytes]] contained in the payload
   */
  public get method (): Bytes {
    return this.getT('method');
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  /**
   * @description The specVersion for this signature
   */
  public get specVersion (): INumber {
    return this.getT('specVersion');
  }

  /**
   * @description The tip [[Balance]]
   */
  public get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  /**
   * @description The transactionVersion for this signature
   */
  public get transactionVersion (): INumber {
    return this.getT('transactionVersion');
  }

  /**
   * @description The (optional) asset id for this signature for chains that support transaction fees in assets
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  /**
   * @description The (optional) asset id for this signature for chains that support transaction fees in assets
   */
  public get metadataHash (): IOption<Hash> {
    return this.getT('metadataHash');
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): Uint8Array {
    // NOTE The `toU8a({ method: true })` argument is absolutely critical, we
    // don't want the method (Bytes) to have the length prefix included. This
    // means that the data-as-signed is un-decodable, but is also doesn't need
    // the extra information, only the pure data (and is not decoded) ...
    // The same applies to V1..V3, if we have a V5, carry this comment
    return sign(this.registry, signerPair, this.toU8a({ method: true }), this.#signOptions);
  }
}
