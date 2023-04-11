
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { AnyFunction, Codec, DefinitionRpc } from 'https://deno.land/x/polkadot@0.2.35/types/types/index.ts';

export interface RpcInterfaceMethod {
  <T extends Codec> (...params: unknown[]): Observable<T>;
  raw (...params: unknown[]): Observable<unknown>;
  meta: DefinitionRpc;
}

export type AugmentedRpc<F extends AnyFunction> = F & {
  raw: <T> (...params: Parameters<F>) => Observable<T>;
  meta: DefinitionRpc;
};
