export default interface Stack<T> {
  push(item: T): void;
  pop(): T;
  peek(): T;
  isEmpty(): boolean;
  clear(): void;
  size(): number;
}
