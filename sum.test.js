const sum = require('./sum');

test('adds 10 + 5 to equal 20', () => {
  expect(sum(10, 5)).toBe(20);
});