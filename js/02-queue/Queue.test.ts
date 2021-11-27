import solutions from './solutions';

describe.each(solutions)('Queue', ({ Queue, name }) => {
  describe(name, () => {
    let queue;

    beforeEach(() => {
      queue = new Queue<number>();
    });

    it('starts empty', () => {
      expect(queue.size()).toEqual(0);
      expect(queue.isEmpty()).toEqual(true);
    });

    it('enqueues elements', () => {
      queue.enqueue(1);
      expect(queue.size()).toEqual(1);
      queue.enqueue(2);
      expect(queue.size()).toEqual(2);
      queue.enqueue(3);
      expect(queue.size()).toEqual(3);

      expect(queue.isEmpty()).toEqual(false);
    });

    it('dequeue elements', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.dequeue()).toEqual(undefined);
    });

    it('implements FIFO logic', () => {
      queue.enqueue(1);
      expect(queue.peek()).toEqual(1);
      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);
      queue.enqueue(3);
      expect(queue.peek()).toEqual(1);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.dequeue()).toEqual(undefined);
    });

    it('allows to peek at the front element in the queue without dequeuing it', () => {
      expect(queue.peek()).toEqual(undefined);

      queue.enqueue(1);
      expect(queue.peek()).toEqual(1);

      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);

      queue.dequeue();
      expect(queue.peek()).toEqual(2);
    });

    it('returns the correct size', () => {
      expect(queue.size()).toEqual(0);
      queue.enqueue(1);
      expect(queue.size()).toEqual(1);
      queue.enqueue(2);
      expect(queue.size()).toEqual(2);
      queue.enqueue(3);
      expect(queue.size()).toEqual(3);

      queue.clear();
      expect(queue.isEmpty()).toEqual(true);

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.size()).toEqual(3);

      queue.dequeue();
      expect(queue.size()).toEqual(2);
      queue.dequeue();
      expect(queue.size()).toEqual(1);
      queue.dequeue();
      expect(queue.size()).toEqual(0);
      queue.dequeue();
      expect(queue.size()).toEqual(0);
    });

    it('returns if it is empty', () => {
      expect(queue.isEmpty()).toEqual(true);
      queue.enqueue(1);
      expect(queue.isEmpty()).toEqual(false);
      queue.enqueue(2);
      expect(queue.isEmpty()).toEqual(false);
      queue.enqueue(3);
      expect(queue.isEmpty()).toEqual(false);

      queue.clear();
      expect(queue.isEmpty()).toEqual(true);

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.isEmpty()).toEqual(false);

      queue.dequeue();
      expect(queue.isEmpty()).toEqual(false);
      queue.dequeue();
      expect(queue.isEmpty()).toEqual(false);
      queue.dequeue();
      expect(queue.isEmpty()).toEqual(true);
      queue.dequeue();
      expect(queue.isEmpty()).toEqual(true);
    });

    it('clears the queue', () => {
      queue.clear();
      expect(queue.isEmpty()).toEqual(true);

      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.isEmpty()).toEqual(false);

      queue.clear();
      expect(queue.isEmpty()).toEqual(true);
    });
  });
});
