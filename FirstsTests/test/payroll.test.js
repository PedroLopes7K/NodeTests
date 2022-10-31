import { addOvertime, calculateDiscounts } from '../index.js'

describe('Sheet calculation tests', () => {
  it('Must return the sum of overtime', () => {
    const expected = 2500
    const returned = addOvertime(2000, 500)

    expect(returned).toBe(expected)
  })

  it('Must discount the value of wage', () => {
    const expected = 2300
    const returned = calculateDiscounts(2500, 200)

    expect(returned).toBe(expected)
  })
})
