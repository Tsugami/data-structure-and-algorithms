import solutions from './solutions';

describe.each(solutions)('Deque', ({ Deque, name }) => {
  describe(name, () => {
    let deque;

    beforeEach(() => {
      deque = new Deque<number>();
    });

    it('starts empty', () => {
      expect(deque.size()).toEqual(0);
      expect(deque.isEmpty()).toEqual(true);
    });

    it('add elements in the back', () => {
      deque.addBack(1);
      expect(deque.size()).toEqual(1);

      deque.addBack(2);
      expect(deque.size()).toEqual(2);

      deque.addBack(3);
      expect(deque.size()).toEqual(3);
    });

    it('add elements in the front', () => {
      deque.addFront(1);
      expect(deque.size()).toEqual(1);

      deque.addFront(2);
      expect(deque.size()).toEqual(2);

      deque.addFront(3);
      expect(deque.size()).toEqual(3);

      deque.removeFront();
      deque.addFront(4);
      expect(deque.size()).toEqual(3);
    });

    it('remove elements from the back', () => {
      deque.addBack(1);
      deque.addBack(2);
      deque.addBack(3);
      deque.addFront(0);

      expect(deque.removeBack()).toEqual(3);
      expect(deque.removeBack()).toEqual(2);
      expect(deque.removeBack()).toEqual(1);
      expect(deque.removeBack()).toEqual(0);
      expect(deque.removeBack()).toEqual(undefined);
    });

    it('remove elements from the front', () => {
      deque.addFront(1);
      deque.addBack(2);
      deque.addBack(3);
      deque.addFront(0);
      deque.addFront(-1);
      deque.addFront(-2);

      expect(deque.removeFront()).toEqual(-2);
      expect(deque.removeFront()).toEqual(-1);
      expect(deque.removeFront()).toEqual(0);
      expect(deque.removeFront()).toEqual(1);
      expect(deque.removeFront()).toEqual(2);
      expect(deque.removeFront()).toEqual(3);
      expect(deque.removeFront()).toEqual(undefined);
    });

    it('allows to peek at the front element in the deque without removing it', () => {
      expect(deque.peekFront()).toEqual(undefined);

      deque.addFront(1);
      expect(deque.peekFront()).toEqual(1);
      deque.addBack(2);
      expect(deque.peekFront()).toEqual(1);
      deque.addBack(3);
      expect(deque.peekFront()).toEqual(1);
      deque.addFront(0);
      expect(deque.peekFront()).toEqual(0);
      deque.addFront(-1);
      expect(deque.peekFront()).toEqual(-1);
      deque.addFront(-2);
      expect(deque.peekFront()).toEqual(-2);
    });

    it('allows to peek at the last element in the deque without removing it', () => {
      expect(deque.peekBack()).toEqual(undefined);

      deque.addFront(1);
      expect(deque.peekBack()).toEqual(1);
      deque.addBack(2);
      expect(deque.peekBack()).toEqual(2);
      deque.addBack(3);
      expect(deque.peekBack()).toEqual(3);
      deque.addFront(0);
      expect(deque.peekBack()).toEqual(3);
      deque.addFront(-1);
      expect(deque.peekBack()).toEqual(3);
      deque.addFront(-2);
      expect(deque.peekBack()).toEqual(3);
    });

    it('returns the correct size', () => {
      expect(deque.size()).toEqual(0);

      deque.addFront(1);
      expect(deque.size()).toEqual(1);
      deque.addBack(2);
      expect(deque.size()).toEqual(2);
      deque.addBack(3);
      expect(deque.size()).toEqual(3);
      deque.addFront(0);
      expect(deque.size()).toEqual(4);
      deque.addFront(-1);
      expect(deque.size()).toEqual(5);
      deque.addFront(-2);
      expect(deque.size()).toEqual(6);

      deque.clear();
      expect(deque.size()).toEqual(0);

      deque.addFront(1);
      deque.addBack(2);
      expect(deque.size()).toEqual(2);

      deque.removeFront();
      deque.removeBack();
      expect(deque.size()).toEqual(0);
    });

    it('returns if it is empty', () => {
      expect(deque.isEmpty()).toEqual(true);

      deque.addFront(1);
      expect(deque.isEmpty()).toEqual(false);
      deque.addBack(2);
      expect(deque.isEmpty()).toEqual(false);

      deque.clear();
      expect(deque.isEmpty()).toEqual(true);

      deque.addFront(1);
      deque.addBack(2);
      expect(deque.isEmpty()).toEqual(false);

      deque.removeFront();
      expect(deque.isEmpty()).toEqual(false);
      deque.removeBack();
      expect(deque.isEmpty()).toEqual(true);
    });

    it('clears the queue', () => {
      deque.clear();
      expect(deque.isEmpty()).toEqual(true);

      deque.addFront(1);
      deque.addBack(2);
      expect(deque.isEmpty()).toEqual(false);

      deque.clear();
      expect(deque.isEmpty()).toEqual(true);
    });
  });
});
