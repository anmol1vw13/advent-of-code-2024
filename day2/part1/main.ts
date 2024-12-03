import { parseFile } from './parser';

export const checkSafe = (arr: number[]) => {
  let currentFlow: 'ASC' | 'DESC';
  let safe = true;
  arr.some((v, index) => {
    if (index + 1 === arr.length) {
      safe = true;
      return true;
    }

    const diff = Math.abs(v - arr[index + 1]);
    if (diff < 1 || diff > 3) {
      safe = false;
      return true;
    }

    if (currentFlow === 'ASC' && v > arr[index + 1]) {
      safe = false;
      return true;
    } else if (currentFlow === 'DESC' && v < arr[index + 1]) {
      safe = false;
      return true;
    }

    if (v < arr[index + 1]) {
      currentFlow = 'ASC';
    } else if (v > arr[index + 1]) {
      currentFlow = 'DESC';
    }
  });
  return safe;
};

const run = async (filePath: string) => {
  const twoDArray = await parseFile(filePath);
  return twoDArray.filter((arr) => checkSafe(arr)).length;
};

console.log(
  await run(
    '/Users/1.mole/Documents/repositories/personal/advent-of-code-2024/day2/part1/input.txt'
  )
);
