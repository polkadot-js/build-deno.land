
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';

type DeriveCreator = (instanceId: string, api: unknown) => (...args: unknown[]) => Observable<any>;

export type DeriveCustom = Record<string, Record<string, DeriveCreator>>;
