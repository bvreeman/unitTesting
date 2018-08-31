function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function prod(a, b) {
    return a * b;
}

function sayHelloTo(username) {
    return "Hello, " + username + "!";
}

function anomalyCode(x) {
    return '5' + x - x;
}

module.exports = {
    sum: sum,
    sub: sub,
    prod: prod,
    sayHelloTo: sayHelloTo,
    anomalyCode: anomalyCode,
}