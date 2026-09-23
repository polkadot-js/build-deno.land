
import type { Server } from 'https://esm.sh/mock-socket@9.3.1';


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
