import { file } from 'bun';

export const parseFile = (filePath: string) => {
  const f = file(filePath);
  if (!f.exists()) {
    throw new Error('File doesnot exist');
  }
  return f.text();
};
