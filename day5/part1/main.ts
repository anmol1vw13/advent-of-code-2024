import { parseFile } from './parser';

export const run = async (fileName: string) => {
  const text = await parseFile(fileName);
  const inputs = text.split('\n\n');

  const ruleLines = inputs[0].split('\n');
  const dataLines = inputs[1].split('\n');
  const ruleMap = formatRules(ruleLines);
  return dataLines.reduce((acc, line) => {
    const nums = line.split(',').map(Number);
    if (parseDataLine(nums, ruleMap)) {
      acc += nums[(nums.length - 1) / 2];
    }
    return acc;
  }, 0);
};

const formatRules = (ruleLines: string[]) => {
  return ruleLines.reduce((acc, line) => {
    const split = line.split('|').map(Number);
    if (!acc.has(split[0])) {
      acc.set(split[0], []);
    }
    acc.get(split[0])!.push(split[1]);
    return acc;
  }, new Map<number, number[]>());
};

const parseDataLine = (data: number[], ruleMap: Map<number, number[]>) => {
  return data.every((num, index) => {
    if (index + 1 === data.length) {
      return true;
    }
    if (!ruleMap.has(num)) {
      return false;
    }
    const rule = ruleMap.get(num)!;
    const elements = data.filter((_, i) => i > index);
    return elements.every((element) => rule.includes(element));
  });
};

console.log(await run('input.txt'));
