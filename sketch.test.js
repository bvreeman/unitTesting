const { sum, sub, prod, sayHelloTo, anomalyCode } = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
})

test('prod calcualtes 2 * 10 = 20', () => {
    expect(prod(2, 10)).toBe(20);
})

function helloTest() {
    expect(sayHelloTo("Dan")).toBe("Hello, Dan!");
}

test('sayHelloTo function exists', () => {
    expect(sayHelloTo).toBeDefined();
});

test('sayHelloTo Dan should be Hello, Dan!', () => {
    helloTest;
})

test('anomalyCode ten should be 500', () => {
    expect(anomalyCode(78)).toBe(500);
})

test('anomalyCode hundred should be 5000', () => {
    expect(anomalyCode(789)).toBe(5000);
})

test('anomalyCode thousand should be 50000', () => {
    expect(anomalyCode(7891)).toBe(50000);
})

