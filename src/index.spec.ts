import { sum } from './index';

describe('#execute', () => {
  it('should add two numbers', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
