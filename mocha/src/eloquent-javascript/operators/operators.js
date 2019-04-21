const operators = {}

operators.helloWorld = () => 'hello world!'

operators.testTypeOf = (v) => {
  return typeof v
}

operators.countList = (list) => {
  return list.length
}

module.exports = operators
