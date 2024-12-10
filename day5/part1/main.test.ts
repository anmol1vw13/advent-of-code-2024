import { test, expect } from 'bun:test';
import { run } from './main';

test('run', async () => {
  expect(await run('test.txt')).toEqual(143);
});
