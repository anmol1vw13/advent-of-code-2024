import { file } from 'bun';
import { parseFile } from '../parser';

const run = async (path: string): Promise<number> => {
  const { left, right } = await parseFile(path);
  return runArrays(left, right);
};

export const runArrays = (left: number[], right: number[]): number => {
  const rightCounterMap = right.reduce((acc, cur) => {
    if (!acc.has(cur)) {
      acc.set(cur, 0);
    }
    acc.set(cur, acc.get(cur)! + 1);
    return acc;
  }, new Map<number, number>());
  return left.reduce((res, num) => {
    res += num * (rightCounterMap.get(num) ?? 0);
    return res;
  }, 0);
};

const result = await run(
  '/Users/1.mole/Documents/repositories/personal/advent-of-code-2024/day1/part2/input.txt'
);
console.log(result);
