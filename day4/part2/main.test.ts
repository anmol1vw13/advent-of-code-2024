import { describe, test, expect } from 'bun:test';
import { run } from './main';

describe('run', () => {
  test('the number of X-MAS is 9', () => {
    const input = `.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;
    expect(run(input)).toEqual(9);
  });
});
