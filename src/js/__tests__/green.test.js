import healthCheck from '../game';

test('green', () => {
  const result = healthCheck({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});
