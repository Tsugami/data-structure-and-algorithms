import Stacks from '../solutions';
import { baseConverter } from './baseConverter';

describe.each(Stacks)('baseConverter', ({ Stack, name }) => {
  describe(name, () => {
    let stack;

    beforeEach(() => {
      stack = new Stack<string>();
    });

    it('should return base 2', () => {
      expect(baseConverter(100345, 2, stack)).toBe('11000011111111001');
    });

    it('should return base 8', () => {
      expect(baseConverter(100345, 8, stack)).toBe('303771');
    });

    it('should return base 16', () => {
      expect(baseConverter(100345, 16, stack)).toBe('187F9');
    });

    it('should return base 35', () => {
      expect(baseConverter(100345, 35, stack)).toBe('2BW0');
    });
  });
});
