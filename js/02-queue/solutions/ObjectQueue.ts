import Queue from '../Queue';

export default class ObjectQueue<T> implements Queue<T> {
  #items: Record<number, T> = {};
  #count: number = 0;
  #lowestCount: number = 0;

  size(): number {
    return this.#count - this.#lowestCount;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  enqueue(item: T): void {
    this.#items[this.#count] = item;
    this.#count++;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.#items[this.#lowestCount];

    delete this.#items[this.#lowestCount];
    this.#lowestCount++;

    return item;
  }

  clear(): void {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#lowestCount];
  }
}
