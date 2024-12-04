import { parseFile } from './parser';

export const run = (text: string) => {
  const lines = text.split('\n');
  const matrix = lines.map((line) => line.split(''));
  const word = 'XMAS';
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!word.includes(matrix[i][j])) {
        continue;
      }
      const words = ['', '', '', '', '', '', '', ''];
      const directions = [
        [1, 0],
        [0, 1],
        [1, 1],
        [1, -1],
        [-1, 0],
        [0, -1],
        [-1, -1],
        [-1, 1],
      ];
      for (let k = 0; k < word.length; k++) {
        for (let d = 0; d < directions.length; d++) {
          const [di, dj] = directions[d];
          const ni = i + k * di;
          const nj = j + k * dj;
          if (
            ni >= 0 &&
            ni < matrix.length &&
            nj >= 0 &&
            nj < matrix[ni].length
          ) {
            words[d] += matrix[ni][nj];
          }
        }
      }
      count += words.filter((w) => w === word).length;
    }
  }
  return count;
};

console.log(
  run(
    await parseFile(
      '/Users/1.mole/Documents/repositories/personal/advent-of-code-2024/day4/part1/input.txt'
    )
  )
);
