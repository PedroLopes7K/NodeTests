class Cart {
  constructor() {
    this.itens = []
    this.subtotal = null
    this.deliveryFee = null
    this.total = null
  }

  add(item) {
    this.itens.push(item)
  }

  addDeliveryFee(value) {
    this.deliveryFee = value
  }

  calculateTotal() {
    this.subtotal = this.itens.reduce(
      (acum, item) => acum + item.getTotalValueOfItem(),
      0
    )
    return this.subtotal + this.deliveryFee
  }

  finishPurchase() {
    if (this.itens.length === 0) {
      throw new Error('Shopping cart empty')
    }

    this.total = this.calculateTotal()

    return {
      subtotal: this.subtotal,
      deliveryFee: this.deliveryFee,
      total: this.total
    }
  }
}

export default Cart
