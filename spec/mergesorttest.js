import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import mergeSort from '../src/mergesort'

chai.use(chaiChange)

var describe, context, it

describe('mergesort', () => {
  'use strict'

  it('exists', () => {
    expect(mergeSort).to.be.a('function')
  })

  context('mergeSort(list)', () => {
    it('Sorts list from lowest to highest', () => {
      const list = [34, 203, 3, 746, 200, 984, 198, 764, 9]

      expect(mergeSort(list)[8]).to.equal(984)
    })
  })

  context('mergeSort(list)', () => {
    it('Sorts list from lowest to highest and first number should be 3', () => {
      const list = [34, 203, 3, 746, 200, 984, 198, 764, 9]

      expect(mergeSort(list)[0]).to.equal(3)
    })
  })

  context('mergeSort(list)', () => {
    it('List with one number is automatically sorted so returns 9', () => {
      const list = [9]

      expect(mergeSort(list)[0]).to.equal(9)
    })
  })

  context('mergeSort(list)', () => {
    it('Throws an error with invalid input.', () => {
      expect( () => mergeSort(12)).to.throw('invalid input')
    })
  })


})
