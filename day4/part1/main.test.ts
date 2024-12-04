import { describe, test, expect } from 'bun:test';
import { run } from './main';

describe('run', () => {
  test('the number of XMAS is 18', () => {
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
expect(run(input)).toEqual(18);
  });
});
