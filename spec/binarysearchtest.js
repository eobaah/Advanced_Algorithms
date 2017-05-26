import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import bubbleSort from '../src/bubblesort'

chai.use(chaiChange)

describe('bubbleSort', () => {
  'use strict'

  it('exists', () => {
    expect(bubbleSort).to.be.a('function')
  })

  context('bubbleSort(arr, target)', () => {
    it('Retrieves the index of 6.', () => {
      const numbers = [5, 6, 7, 8, 9]

      expect(bubbleSort(numbers, 6)).to.equal(1)
    })
  })

  context('bubbleSort(arr, target)', () => {
    it('Retrieves no value.', () => {
      const numbers = [5, 6, 7, 8, 9]

      expect(bubbleSort(numbers, 10)).to.equal(-1)
    })
  })


})
