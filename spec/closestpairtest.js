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
    it('Retrieves the closest pair of [-1,0] and [-2,0].', () => {
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

      expect(closestPair(points).points).to.eql([[ -1, 0 ], [ -2, 0 ]])
    })
  })

  context('closestPair(arr, target)', () => {
    it('Retrieves the closest pair of [3,9] and [3,10].', () => {
      const points = [
        [4,5],
        [1,0],
        [-4,-2],
        [3,9],
        [-2,2],
        [-3,3],
        [-2,-1],
        [2,5],
        [2,-1],
        [0,-4],
        [3,10]
      ]

      expect(closestPair(points).points).to.eql([[ 3, 9 ], [ 3, 10 ]])
    })
  })

  context('closestPair(points)', () => {
    it('Throws error invalid input', () => {
      const points = {1:3, 2:4, 6:7, 7:9}
      expect( () => closestPair(points)).to.throw('invalid input')
    })
  })


})
