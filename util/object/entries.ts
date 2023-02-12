
type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];

/**
 * @name objectEntries
 * @summary A version of Object.entries that is typed for TS
 */
export function objectEntries<T extends object> (obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>;
}
