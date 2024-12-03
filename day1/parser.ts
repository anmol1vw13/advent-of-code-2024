import { file } from 'bun';

export const parseFile = async (path: string) => {
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
  return { left, right };
};
