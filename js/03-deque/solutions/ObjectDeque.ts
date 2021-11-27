import Deque from '../Deque';

export default class ObjectDeque<T> implements Deque<T> {
  #items: Record<number, T> = {};
  #count: number = 0;
  #lowestCount: number = 0;

  size(): number {
    return this.#count - this.#lowestCount;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  addBack(item: T): void {
    this.#items[this.#count] = item;
    this.#count++;
  }

  addFront(item: T): void {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.#lowestCount > 0) {
      this.#lowestCount--;
      this.#items[this.#lowestCount] = item;
    } else {
      for (let i = this.#count; i >= 0; i--) {
        this.#items[i] = this.#items[i - 1];
      }

      this.#count++;
      this.#lowestCount = 0;
      this.#items[0] = item;
    }
  }

  peekBack(): T | undefined {
    return this.#items[this.#count - 1];
  }

  peekFront(): T | undefined {
    return this.#items[0];
  }

  removeBack(): T | undefined {
    if (this.isEmpty()) return undefined;

    const item = this.#items[this.#count - 1];
    delete this.#items[this.#count - 1];
    this.#count--;

    return item;
  }

  removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return result;
  }

  clear(): void {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }
}
