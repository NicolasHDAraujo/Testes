/**
 * DIP
 * Modulos de alto nivel, não devem depender dos de baixo nivel, ambos devem depender de abstrações
 */

import { FiftyPercentDiscount } from './classes/dicount';
import { Product } from './classes/product';
import { Message } from './services/message';
import { Persistency } from './services/persistency';
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-carts';
import { Individual } from './classes/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const message = new Message();
const persistency = new Persistency();
const individual = new Individual('Nicolas', 'Araujo', '400.300.200-10');

const order = new Order(shoppingCart, message, persistency, individual);

shoppingCart.addItem(new Product('Camisa', 20.9));
shoppingCart.addItem(new Product('Bermuda', 50.9));
shoppingCart.addItem(new Product('Tenis', 120.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
