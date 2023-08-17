
/**
 * @name isArray
 * @summary Tests for a Array instance.
 */
export function isArray <T> (value?: unknown): value is T[] {
  return Array.isArray(value);
}
