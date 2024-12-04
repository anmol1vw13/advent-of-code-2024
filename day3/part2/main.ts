import { parseFile } from './parser';

export const calculate = (instruction: string) => {
  const matches = instruction.matchAll(/mul\(\d+,\d+\)|do\(\)|don\'t\(\)/g);
  let sum = 0;
  let cont = true;

  for (const match of matches) {
    if (match[0] === "don't()") {
      cont = false;
    }
    if (match[0] === 'do()') {
      cont = true;
    }

    if (!cont) {
      continue;
    }

    const numbers = match[0].matchAll(/\d+/g);
    let mul = 1;
    let isPresent = false;
    for (const num of numbers) {
      isPresent = true;
      mul = mul * parseInt(num[0]);
    }
    if (isPresent) sum += mul;
  }
  return sum;
};

console.log(
  calculate(
    await parseFile(
      '/Users/1.mole/Documents/repositories/personal/advent-of-code-2024/day3/part2/input.txt'
    )
  )
);
