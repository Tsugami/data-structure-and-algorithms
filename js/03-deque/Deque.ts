export default interface Deque<T> {
  addFront(item: T): void;
  addBack(item: T): void;
  removeFront(): T | undefined;
  removeBack(): T | undefined;
  peekFront(): T | undefined;
  peekBack(): T | undefined;
  isEmpty(): boolean;
  clear(): void;
  size(): number;
}
