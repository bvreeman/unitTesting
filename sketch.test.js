const { sum, prod } = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('prod calcualtes 2 * 10 = 20', () => {
    expect(prod(2, 10)).toBe(20);
})