const chai = require('chai')
const imc = require('../eloquent-javascript/imc')

const assert = chai.assert
const expect = chai.expect

describe('Testes de IMC', () => {
  it('Calcular IMC de uma pessoa de 50kg e 1.8m', () => {
    expect(imc.calc(50, 1.8)).to.equal(15.43)
  })

  it('Validar numeros negativos ou divisao por zero', () => {
    expect(imc.calc(-1, 0)).to.equal(0)
  })

  it('Buscar posicao de um IMC na tabela', () => {
    assert.equal(imc.getStatus(50, 1.8), 'Abaixo do peso')
  })

  it('Buscar posicao do IMC do pablo na tabela', () => {
    assert.equal(imc.getStatus(86, 1.85), 'Levemente acima do peso')
  })
})
