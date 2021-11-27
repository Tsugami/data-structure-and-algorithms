import Deque from '../Deque';

export default class ArrayDeque<T> implements Deque<T> {
  #items: T[] = [];

  size(): number {
    return this.#items.length;
  }

  isEmpty(): boolean {
    return this.#items.length === 0;
  }

  addBack(item: T): void {
    this.#items.push(item);
  }

  addFront(item: T): void {
    this.#items.unshift(item);
  }

  peekBack(): T {
    return this.#items[this.#items.length - 1];
  }

  peekFront(): T {
    return this.#items[0];
  }

  removeBack(): T {
    return this.#items.pop();
  }

  removeFront(): T {
    return this.#items.shift();
  }

  clear(): void {
    this.#items = [];
  }
}
