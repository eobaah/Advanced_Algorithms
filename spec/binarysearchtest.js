import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import binarysearch from '../src/binarysearch'

chai.use(chaiChange)

describe('binarysearch', () => {
  'use strict'

  it('exists', () => {
    expect(binarysearch).to.be.a('function')
  })

  context('binarysearch(arr, target)', () => {
    it('Retrieves the index of 6.', () => {
      const numbers = [5, 6, 7, 8, 9]

      expect(binarysearch(numbers, 6)).to.equal(1)
    })
  })

  context('binarysearch(arr, target)', () => {
    it('Retrieves the index of 4.', () => {
      const numbers = [5, 6, 7, 8, 9]

      expect(binarysearch(numbers, 9)).to.equal(4)
    })
  })

  context('binarysearch(arr, target)', () => {
    it('Retrieves no value.', () => {
      const numbers = [5, 6, 7, 8, 9]

      expect(binarysearch(numbers, 10)).to.equal(-1)
    })
  })


})
