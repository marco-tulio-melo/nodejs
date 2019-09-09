const chai = require('chai')
const userService = require('../service/userService')

const expect = chai.expect

describe('Servico de usuario', () => {
  it('Retorna lista de usuarios', () => {
    expect(userService.show).to.have.lengthOf.above(0)
  })
})
