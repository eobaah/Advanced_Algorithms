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
    it('Sorts the values from lowest to highest', () => {
      const myList = [10, 6, 2, 4, 1]
      expect(bubbleSort(myList)).to.eql([1, 2, 4, 6, 10])
    })
  })

  context('bubbleSort(arr, target)', () => {
    it('Sorts the values from lowest to highest', () => {
      const myList = [8, 6, 12, 4, 3]
      expect(bubbleSort(myList)).to.eql([3, 4, 6, 8, 12])
    })
  })

  context('bubbleSort(arr, target)', () => {
    it('If array has one value then return value', () => {
      const myList = [1]
      expect(bubbleSort(myList)).to.eql([1])
    })
  })

})
