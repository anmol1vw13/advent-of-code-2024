import { file } from 'bun';

export const run = async (path: string): Promise<number> => {
  const inputFile = file(path);
  if (!inputFile.exists()) {
    throw new Error(`No file exists at the path ${path}`);
  }
  const text = await inputFile.text();
  let left: number[] = [];
  let right: number[] = [];

  text.split('\n').forEach((line) => {
    const [n1, n2] = line.split(/\s+/);
    left.push(parseInt(n1));
    right.push(parseInt(n2));
  });

  
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
