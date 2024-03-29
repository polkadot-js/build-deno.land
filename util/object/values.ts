
/**
 * @name objectValues
 * @summary A version of Object.values that is typed for TS
 */
export function objectValues<T extends object> (obj: T): T[keyof T][] {
  return Object.values(obj) as T[keyof T][];
}
