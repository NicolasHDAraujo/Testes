import { ShoppingCartProtocol } from './../interfaces/shopping-cart-protocol';
import { CartItem } from '../interfaces/cart-item';
import { Discount } from './dicount';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items //+ converte para number
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    //verificando se o carrinho está vazio
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho esvaziado!');
    this._items.length = 0;
  }
}
