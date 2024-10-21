

export const DEFAULT_CAPACITY = 64;

class LRUNode {
  readonly key: string;
  #lastAccess: number;
  readonly createdAt: number;

  public next: LRUNode;
  public prev: LRUNode;

  constructor (key: string) {
    this.key = key;
    this.#lastAccess = Date.now();
    this.createdAt = this.#lastAccess;
    this.next = this.prev = this;
  }

  public refresh (): void {
    this.#lastAccess = Date.now();
  }

  public get lastAccess (): number {
    return this.#lastAccess;
  }
}

export class LRUCache {
  readonly capacity: number;

  readonly #data = new Map<string, unknown>();
  readonly #refs = new Map<string, LRUNode>();

  #length = 0;
  #head: LRUNode;
  #tail: LRUNode;

  readonly #ttl: number;
  readonly #ttlInterval: number;
  #ttlTimerId: ReturnType<typeof setInterval> | null = null;

  constructor (capacity = DEFAULT_CAPACITY, ttl = 30000, ttlInterval = 15000) {
    this.capacity = capacity;
    this.#ttl = ttl;
    this.#ttlInterval = ttlInterval;
    this.#head = this.#tail = new LRUNode('<empty>');

    // make sure the interval is not longer than the ttl
    if (this.#ttlInterval > this.#ttl) {
      this.#ttlInterval = this.#ttl;
    }
  }

  get ttl (): number {
    return this.#ttl;
  }

  get ttlInterval (): number {
    return this.#ttlInterval;
  }

  get length (): number {
    return this.#length;
  }

  get lengthData (): number {
    return this.#data.size;
  }

  get lengthRefs (): number {
    return this.#refs.size;
  }

  entries (): [string, unknown][] {
    const keys = this.keys();
    const count = keys.length;
    const entries = new Array<[string, unknown]>(count);

    for (let i = 0; i < count; i++) {
      const key = keys[i];

      entries[i] = [key, this.#data.get(key)];
    }

    return entries;
  }

  keys (): string[] {
    const keys: string[] = [];

    if (this.#length) {
      let curr = this.#head;

      while (curr !== this.#tail) {
        keys.push(curr.key);
        curr = curr.next;
      }

      keys.push(curr.key);
    }

    return keys;
  }

  get <T> (key: string): T | null {
    const data = this.#data.get(key);

    if (data) {
      this.#toHead(key);

      return data as T;
    }

    return null;
  }

  set <T> (key: string, value: T): void {
    if (this.#data.has(key)) {
      this.#toHead(key);
    } else {
      const node = new LRUNode(key);

      this.#refs.set(node.key, node);

      if (this.length === 0) {
        this.#head = this.#tail = node;
      } else {
        this.#head.prev = node;
        node.next = this.#head;
        this.#head = node;
      }

      if (this.#length === this.capacity) {
        this.#data.delete(this.#tail.key);
        this.#refs.delete(this.#tail.key);

        this.#tail = this.#tail.prev;
        this.#tail.next = this.#head;
      } else {
        this.#length += 1;
      }
    }

    if (this.#ttl > 0 && !this.#ttlTimerId) {
      this.#ttlTimerId = setInterval(() => {
        this.#ttlClean();
      }, this.#ttlInterval);
    }

    this.#data.set(key, value);
  }

  #ttlClean () {
  // Find last node to keep
    const expires = Date.now() - this.#ttl;

    // traverse map to find the lastAccessed
    while (this.#tail.lastAccess && this.#tail.lastAccess < expires && this.#length > 0) {
      if (this.#ttlTimerId && this.#length === 0) {
        clearInterval(this.#ttlTimerId);
        this.#ttlTimerId = null;
        this.#head = this.#tail = new LRUNode('<empty>');
      } else {
        this.#refs.delete(this.#tail.key);
        this.#data.delete(this.#tail.key);
        this.#length -= 1;
        this.#tail = this.#tail.prev;
        this.#tail.next = this.#head;
      }
    }
  }

  #toHead (key: string): void {
    const ref = this.#refs.get(key);

    if (ref && ref !== this.#head) {
      ref.refresh();
      ref.prev.next = ref.next;
      ref.next.prev = ref.prev;
      ref.next = this.#head;

      this.#head.prev = ref;
      this.#head = ref;
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async clearInterval (): Promise<void> {
    if (this.#ttlTimerId) {
      clearInterval(this.#ttlTimerId);
      this.#ttlTimerId = null;
    }
  }
}
