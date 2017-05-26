import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import closestPair from '../src/closestpair'

chai.use(chaiChange)

describe('closestPair', () => {
  'use strict'

  it('exists', () => {
    expect(closestPair).to.be.a('function')
  })

  context('closestPair(arr, target)', () => {
    it('Retrieves the index of 6.', () => {
      const numbers = [5, 6, 7, 8, 9]

      expect(closestPair(points)).to.equal(1)
    })
  })

  context('closestPair(arr, target)', () => {
    it('Retrieves no value.', () => {
      const numbers = [5, 6, 7, 8, 9]

      expect(closestPair(points)).to.equal(-1)
    })
  })


})
