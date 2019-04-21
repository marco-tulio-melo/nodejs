const chai = require('chai')
const operators = require('../eloquent-javascript/operators/operators')

const assert = chai.assert
const expect = chai.expect

describe('Testes para operadores', () => {
  it('Validar resposta do hello world', () => {
    assert.equal(operators.helloWorld(), 'hello world!')
  })

  it('Validar o tipo de variavel de entrada (string)', () => {
    expect(operators.testTypeOf('teste')).to.equal('string')
  })

  it('Validar o tipo de variavel de entrada (number)', () => {
    expect(operators.testTypeOf(3.5)).to.equal('number')
  })

  it('Validar o tipo de variavel de entrada (object)', () => {
    expect(operators.testTypeOf({a: 0})).to.equal('object')
  })

  it('Validar o numero de itens de uma lista', () => {
    expect(operators.countList([1,2,3])).to.equal(3)
  })
})
