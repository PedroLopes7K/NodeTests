class Item {
  constructor(name, value, quantity) {
    this.name = name
    this.value = value
    this.quantity = quantity
  }

  getTotalValueOfItem() {
    return this.quantity * this.value
  }
}

export default Item
