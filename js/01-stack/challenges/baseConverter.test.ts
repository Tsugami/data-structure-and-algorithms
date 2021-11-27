import Stacks from '../solutions';
import { baseConverter } from './baseConverter';

describe.each(Stacks)('Stack', ({ Stack, name }) => {
  let stack;

  beforeEach(() => {
    stack = new Stack<string>();
  });

  it(`[${name}] should return base 2`, () => {
    expect(baseConverter(100345, 2, stack)).toBe('11000011111111001');
  });

  it(`[${name}] should return base 8`, () => {
    expect(baseConverter(100345, 8, stack)).toBe('303771');
  });

  it(`[${name}] should return base 16`, () => {
    expect(baseConverter(100345, 16, stack)).toBe('187F9');
  });

  it(`[${name}] should return base 35`, () => {
    expect(baseConverter(100345, 35, stack)).toBe('2BW0');
  });
});
