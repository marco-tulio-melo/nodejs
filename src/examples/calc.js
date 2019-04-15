const calc = {};

calc.add = (a, b) => a + b

calc.subtract = (a, b) => a - b

calc.multiply = (a, b) => a * b

calc.divide = (a, b) => b != 0 ? a / b : 0

module.exports = calc
