import { describe, test, expect } from 'bun:test';
import { checkSafe } from '../main';

describe('main', () => {
  test('tests if [7, 6, 4, 2, 1] is safe', () => {
    expect(checkSafe([7, 6, 4, 2, 1])).toEqual(true);
  });

  test('tests if [1 2 7 8 9] is unsafe', () => {
    expect(checkSafe([1, 2, 7, 8, 9])).toEqual(false);
  });

  test('tests if [9 7 6 2 1] is unsafe', () => {
    expect(checkSafe([9, 7, 6, 2, 1])).toEqual(false);
  });

  test('tests if [1 3 2 4 5] is unsafe', () => {
    expect(checkSafe([1, 3, 2, 4, 5])).toEqual(false);
  });
  test('tests if [8, 6, 4, 4, 1] is unsafe', () => {
    expect(checkSafe([8, 6, 4, 4, 1])).toEqual(false);
  });
  test('tests if [1 3 6 7 9] is safe', () => {
    expect(checkSafe([1, 3, 6, 7, 9])).toEqual(true);
  });
});
