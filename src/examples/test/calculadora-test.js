const chai = require('chai')
const calc = require('../examples/calc')

const assert = chai.assert
const expect = chai.expect
const should = chai.should()

describe('TDD de operacoes de calculadora', () => {
  it('Teste: deve somar dois numeros', () => {
    assert.equal(calc.add(1, 2), 3)
  })

  it('Teste: deve dividir 2 numeros', () => {
    assert.equal(calc.divide(2, 1), 2)
  })

  it('Teste: divisao por zero deve ser validada', () => {
    expect(calc.divide(2, 0)).to.equal(0)
  })

  it('Teste: deve multiplica 2 numeros', () => {
    (calc.multiply(2, 0)).should.equal(0)
  })
})
