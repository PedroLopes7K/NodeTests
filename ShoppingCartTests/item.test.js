import Item from './item.js'

describe('Test of items', () => {
  it('Must have three fields : name, value and quantity', () => {
    const item = new Item('banana', 2.5, 10)

    expect(item.name).toBe('banana')
    expect(item.value).toBe(2.5)
    expect(item.quantity).toBe(10)
  })

  it('Must have the price calculated according to the quantity', () => {
    const item = new Item('potato', 0.1, 3)

    expect(item.getTotalValueOfItem()).toBeCloseTo(0.3)
  })
})
