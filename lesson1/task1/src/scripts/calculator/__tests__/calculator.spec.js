import { sum, mult } from '../calculator';

it('should return number sum', () => {
  expect(sum(1, 2)).toEqual(3);
});

it('should return number mult', () => {
  expect(mult(2, 2)).toEqual(4);
});

