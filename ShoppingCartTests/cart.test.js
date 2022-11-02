import Cart from './carrinho.js'
import Item from './item.js'

describe('Tests of cart', () => {
  it('Must initialize empty', () => {
    const cart = new Cart()
    expect(cart.subtotal).toBeNull()
  })
  it('must have items', () => {
    const item = new Item('Shirt', 2, 3)
    const item2 = new Item('mouse', 8, 4)

    const cart = new Cart()
    cart.add(item)
    cart.add(item2)

    expect(typeof cart).toBe('object')
    expect(cart.itens[0]).toBe(item)
    expect(cart.itens[1]).toBe(item2)

    //method for arrays
    expect(cart.itens).toContain(item)
    expect(cart.itens).toContain(item2)
  })

  it('Must have the property "total" in initialize', () => {
    const cart = new Cart()
    expect(cart).toHaveProperty('total')
  })

  it('Must throw exception at finish purchase with the cart empty', () => {
    function cartEmptyError() {
      const cart = new Cart()
      cart.finishPurchase()
    }

    expect(cartEmptyError).toThrowError('Shopping cart empty')
  })

  it('Must add fee', () => {
    const cart = new Cart()
    cart.addDeliveryFee(12)
    expect(cart.deliveryFee).toBe(12)
  })

  it('Must finish purchase', () => {
    const item = new Item('Shirt', 2, 3)

    const cart = new Cart()
    cart.add(item)
    cart.addDeliveryFee(10)

    expect(cart.finishPurchase()).toStrictEqual({
      subtotal: 6,
      deliveryFee: 10,
      total: 16
    })
  })
})
