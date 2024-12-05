import { parseFile } from './parser';

export const run = (text: string) => {
  const lines = text.split('\n');
  const matrix = lines.map((line) => line.split(''));
  let count = 0;
  const word = 'MAS';
  const eligibleWords = [word, word.split('').reverse().join('')];
  const map = new Map<string, Array<boolean>>();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (word.startsWith(matrix[i][j]) || word.endsWith(matrix[i][j])) {
        const words = ['', ''];
        const directions = [
          [1, -1],
          [1, 1],
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

        const index = i + '-' + j;

        map.set(
          index,
          words.map((w) => eligibleWords.some((ew) => ew === w))
        );
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const index1 = i + '-' + j;
      const index2 = i + '-' + (j + 2);
      if (map.has(index1) && map.has(index2)) {
        const rightWord = map.get(index1)![1];
        const leftWord = map.get(index2)![0];
        if (rightWord && leftWord) {
          count++;
        }
      }
    }
  }

  return count;
};

console.log(
  run(
    await parseFile(
      '/Users/1.mole/Documents/repositories/personal/advent-of-code-2024/day4/part2/input.txt'
    )
  )
);
