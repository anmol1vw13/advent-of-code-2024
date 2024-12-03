import { expect, test, describe } from 'bun:test';
import { runArrays } from '../main';

describe('runArrays', () => {
  test('result when arrays are [3,9,4] and [3, 4, 3] is 10', () => {
    const left = [3, 9, 4];
    const right = [3, 4, 3];
    expect(runArrays(left, right)).toEqual(10);
  });
});
