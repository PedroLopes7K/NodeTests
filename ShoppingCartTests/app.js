import Cart from './carrinho.js'
import Item from './item.js'

const cart = new Cart()

cart.add(new Item('Maçã', 1, 3))
cart.add(new Item('Banana', 1.4, 5))
cart.add(new Item('Melancia', 2, 1))
cart.add(new Item('Uva', 4.3, 2))
cart.add(new Item('Açaí', 3, 5))

cart.addDeliveryFee(15)

cart.calculateTotal()

cart.finishPurchase()

console.log(cart)
