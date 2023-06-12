
import type { Server } from 'https://esm.sh/mock-socket@9.2.1';

export type Global = typeof globalThis & {
  WebSocket: typeof WebSocket;
  fetch: any;
}

export interface Mock {
  body: Record<string, Record<string, unknown>>;
  requests: number;
  server: Server;
  done: () => Promise<void>;
}

export type MockStateSubscriptionCallback = (error: Error | null, value: any) => void;

export interface MockStateSubscription {
  callbacks: Record<number, MockStateSubscriptionCallback>;
  lastValue: any;
}

export interface MockStateSubscriptions {
  // known
  chain_subscribeNewHead: MockStateSubscription;
  state_subscribeStorage: MockStateSubscription;

  // others
  [key: string]: MockStateSubscription;
}

export type MockStateDb = Record<string, Uint8Array>;

export type MockStateRequests = Record<string, (db: MockStateDb, params: any[]) => string>;
