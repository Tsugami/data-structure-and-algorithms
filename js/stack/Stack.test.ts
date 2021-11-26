import ArrayStack from './ArrayStack';
import type Stack from './Stack';

const Stacks = describe.each([ArrayStack]);

Stacks('Stack', (Stack) => {
  it('should be empty when created', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should push items', () => {
    const stack = new Stack();
    stack.push(1);

    expect(stack.peek()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
  });

  it('should pop items', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  it('should clear items', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBe(false);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });
});
