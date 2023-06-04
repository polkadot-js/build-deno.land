
/**
 * @name objectClear
 * @summary Removes all the keys from the input object
 */
export function objectClear <T> (value: Record<string, T>): Record<string, T> {
  const keys = Object.keys(value);

  for (let i = 0, count = keys.length; i < count; i++) {
    delete value[keys[i]];
  }

  return value;
}
