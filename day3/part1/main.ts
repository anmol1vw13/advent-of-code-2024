import { parseFile } from './parser';

export const calculate = (instruction: string) => {
  const matches = instruction.matchAll(/mul\(\d+,\d+\)/g);
  let sum = 0;
  for (const match of matches) {
    const numbers = match[0].matchAll(/\d+/g);
    let mul = 1;
    for (const num of numbers) {
      mul = mul * parseInt(num[0]);
    }
    sum += mul;
  }
  return sum;
};

console.log(
  calculate(
    await parseFile(
      '/Users/1.mole/Documents/repositories/personal/advent-of-code-2024/day3/part1/input.txt'
    )
  )
);
