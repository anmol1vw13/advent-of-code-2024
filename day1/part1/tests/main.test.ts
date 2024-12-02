import { expect, test, describe } from 'bun:test';
import { runArrays } from '../main';

describe('runArrays', () => {
  test('result when arrays are [3,9,4] and [1,8,5] is 4', () => {
    const left = [3, 9, 4];
    const right = [1, 8, 5];
    expect(runArrays(left, right)).toEqual(4);
  });
});

