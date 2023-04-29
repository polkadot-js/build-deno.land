
type Types = string | Types[];

/** @internal */
export function flattenUniq (list: Types[], result: string[] = []): string[] {
  for (let i = 0, count = list.length; i < count; i++) {
    const entry = list[i];

    if (Array.isArray(entry)) {
      flattenUniq(entry, result);
    } else {
      result.push(entry);
    }
  }

  return [...new Set(result)];
}
