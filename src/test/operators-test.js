const chai = require('chai')
const operators = require('../eloquent-javascript/operators/operators')

const assert = chai.assert
const expect = chai.expect

describe('Testes para operadores', () => {
  it('Validar resposta do hello world', () => {
    assert.equal(operators.helloWorld(), 'hello world!')
  })
})
