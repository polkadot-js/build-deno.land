
export const KNOWN_VERSIONS = [15, 14, 13, 12, 11, 10, 9] as const;
export const LATEST_VERSION = KNOWN_VERSIONS[0];

export const TO_CALLS_VERSION = 14; // LATEST_VERSION;

export type MetaVersionAll = typeof KNOWN_VERSIONS[number];
export type MetaVersionAsX = `asV${MetaVersionAll}`;
