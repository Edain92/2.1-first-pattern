import { hello } from '../gasBuilder';

describe('Testing jest config', () => {
  test('Const must have hello value', () => {
    expect(hello).toBe('HELLO CONFIGS');
  });
});
