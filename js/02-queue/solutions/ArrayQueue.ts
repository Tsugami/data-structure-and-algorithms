import Queue from '../Queue';

export default class ArrayQueue<T> implements Queue<T> {
  #items: T[] = [];

  size(): number {
    return this.#items.length;
  }

  isEmpty(): boolean {
    return this.#items.length === 0;
  }

  enqueue(item: T): void {
    this.#items.push(item);
  }

  dequeue(): T | undefined {
    return this.#items.shift();
  }

  clear(): void {
    this.#items = [];
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items[0];
  }
}
