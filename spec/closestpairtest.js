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
    it.only('Retrieves the closest pair of [2,1] and [4,0].', () => {
      const points = [
        [2,1],
        [4,0],
        [-1,0],
        [5,3],
        [-2,5],
        [3,-3],
        [-2,0],
        [3,4],
        [5,-4],
        [0,-2]
      ]

      expect(closestPair(points)).to.eql([[ 2, 1 ], [ 4, 0 ]])
    })
  })

  context('closestPair(arr, target)', () => {
    it('Retrieves no value.', () => {
      const numbers = [5, 6, 7, 8, 9]

      expect(closestPair(points)).to.equal(-1)
    })
  })


})
