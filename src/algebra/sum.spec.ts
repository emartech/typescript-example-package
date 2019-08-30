import { Sum } from './sum';

describe('Sum', () => {
  describe('#execute', () => {
    it('should add two numbers', () => {
      const subject = new Sum();

      expect(subject.execute(2, 2)).toEqual(4);
    });
  });
});
