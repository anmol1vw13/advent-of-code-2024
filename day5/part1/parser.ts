import { file } from 'bun';

export const parseFile = (fileName: string) => {
  const f = file(`${import.meta.dir}/${fileName}`);
  if (!f.exists()) {
    throw new Error('File doesnot exist');
  }
  return f.text();
};
