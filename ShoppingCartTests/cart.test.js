import Carrinho from './carrinho.js'
import Item from './item.js'

describe('Tests of cart', () => {
  it('Must initialize empty', () => {
    const cart = new Carrinho()
    expect(cart.subtotal).toBeNull()
  })
  it('must have items', () => {
    const item = new Item('Shirt', 2, 3)
    const item2 = new Item('mouse', 8, 4)

    const cart = new Carrinho()
    cart.adiciona(item)
    cart.adiciona(item2)

    expect(typeof cart).toBe('object')
    expect(cart.itens[0]).toBe(item)
    expect(cart.itens[1]).toBe(item2)

    //method for arrays
    expect(cart.itens).toContain(item)
    expect(cart.itens).toContain(item2)
  })

  it('Must have the property "total" in initialize', () => {
    const cart = new Carrinho()
    expect(cart).toHaveProperty('total')
  })

  it('Must throw exception at finish purchase with the cart empty', () => {
    function cartEmptyError() {
      const cart = new Carrinho()
      cart.finalizaCompra()
    }

    expect(cartEmptyError).toThrowError('Carrinho de compras vazio')
  })

  it('Must add fee', () => {
    const cart = new Carrinho()
    cart.adicionaFrete(12)
    expect(cart.frete).toBe(12)
  })

  it('Must finish purchase', () => {
    const item = new Item('Shirt', 2, 3)

    const cart = new Carrinho()
    cart.adiciona(item)
    cart.adicionaFrete(10)

    expect(cart.finalizaCompra()).toStrictEqual({
      subtotal: 6,
      frete: 10,
      total: 16
    })
  })
})
