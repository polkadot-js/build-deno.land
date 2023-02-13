
/**
 * @name base64Trim
 * @description Trims padding characters
 */
export function base64Trim (value: string): string {
  while (value.length && value[value.length - 1] === '=') {
    value = value.slice(0, -1);
  }

  return value;
}
