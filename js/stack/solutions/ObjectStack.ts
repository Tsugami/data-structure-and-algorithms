import Stack from '../Stack';

export default class ObjectStack<T> implements Stack<T> {
  #items: Record<number, T> = {};
  #count: number = 0;

  clear() {
    this.#items = {};
    this.#count = 0;
  }

  isEmpty(): boolean {
    return this.#count === 0;
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#count - 1];
  }

  push(item: T): void {
    this.#items[this.#count] = item;
    this.#count++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;

    const item = this.#items[this.#count - 1];
    delete this.#items[this.#count - 1];
    this.#count--;

    return item;
  }

  size(): number {
    return this.#count;
  }
}
