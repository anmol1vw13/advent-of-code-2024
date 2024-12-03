import { file } from 'bun';
import { parseFile } from '../parser';

const run = async (path: string): Promise<number> => {
  const { left, right } = await parseFile(path);
  return runArrays(left, right);
};

export const runArrays = (left: number[], right: number[]): number => {
  left = left.sort();
  right = right.sort();
  let res = 0;
  left.forEach((leftNum, index) => {
    res += Math.abs(leftNum - right[index]);
  });
  return res;
};

const result = await run(
  '/Users/1.mole/Documents/repositories/personal/advent-of-code-2024/day1/part1/input.txt'
);
console.log(result);
