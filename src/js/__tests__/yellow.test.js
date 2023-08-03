import healthCheck from '../game';

test('yellow', () => {
  const result = healthCheck({ name: 'Маг', health: 40 });
  expect(result).toBe('wounded');
});
