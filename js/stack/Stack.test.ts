import ArrayStack from './solutions/ArrayStack';
import ObjectStack from './solutions/ObjectStack';

const Stacks = describe.each([
  { Stack: ArrayStack, name: 'ArrayStack' },
  { Stack: ObjectStack, name: 'ObjectStack' },
]);

Stacks('Stack', ({ Stack, name }) => {
  let stack;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it(`[${name}] starts empty`, () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it(`[${name}] pushes elements`, () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
    stack.push(3);
    expect(stack.size()).toBe(3);

    expect(stack.isEmpty()).toBe(false);
  });

  it(`[${name}] pops elements`, () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });

  it(`[${name}] implements LIFO logic`, () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });

  it(`[${name}] allows to peek at the top element in the stack without popping it`, () => {
    expect(stack.peek()).toBe(undefined);

    stack.push(1);
    expect(stack.peek()).toBe(1);

    stack.push(2);
    expect(stack.peek()).toBe(2);

    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  it(`[${name}] returns the correct size`, () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    expect(stack.size()).toBe(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
    stack.push(3);
    expect(stack.size()).toBe(3);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.size()).toBe(2);
    stack.pop();
    expect(stack.size()).toBe(1);
    stack.pop();
    expect(stack.size()).toBe(0);
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  it(`[${name}] returns if it is empty`, () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it(`[${name}]  clears the stack`, () => {
    stack.clear();
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });
});
