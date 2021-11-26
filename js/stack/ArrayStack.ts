import Stack from './Stack';

export default class ArrayStack<T> implements Stack<T> {
  #items: T[] = [];

  clear() {
    this.#items = [];
  }

  isEmpty(): boolean {
    return this.#items.length === 0;
  }

  peek(): T {
    return this.#items[this.#items.length - 1];
  }

  push(item: T): void {
    this.#items.push(item);
  }

  pop(): T {
    return this.#items.pop();
  }

  size(): number {
    return this.#items.length;
  }
}
