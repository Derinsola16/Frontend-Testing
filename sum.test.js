const sum = require('./sum');

test('adds 15 + 5 to equal 20', () => {
  expect(sum(15, 5)).toBe(20);
});