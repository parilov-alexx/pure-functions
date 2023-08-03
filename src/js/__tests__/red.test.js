import healthCheck from '../game';

test('red', () => {
  const result = healthCheck({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
