import { test, describe, expect } from 'bun:test';
import { calculate } from './main';

describe('calculate', () => {
  test("value of the instruction set xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5)) is 48", () => {
    expect(
      calculate(
        "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
      )
    ).toEqual(48);
  });
});
