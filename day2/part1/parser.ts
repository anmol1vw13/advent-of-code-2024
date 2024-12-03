import { file } from 'bun';

export const parseFile = async (path: string) => {
  const inputFile = file(path);
  if (!inputFile.exists()) {
    throw new Error(`No file exists at the path ${path}`);
  }
  const text = await inputFile.text();
  let left: number[] = [];
  let right: number[] = [];

  return text.split('\n').map((line) => {
    return line.split(/\s+/).map(Number);
  });
};
