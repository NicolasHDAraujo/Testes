import { PersistencyProtocol } from './../interfaces/percistency-protocol';
import { MessageProtocol } from './../interfaces/message-protocol';
import { ShoppingCartProtocol } from './../interfaces/shopping-cart-protocol';
import { CustomerOrder } from '../interfaces/customer-protocol';
import { OrderStatus } from '../interfaces/order-status';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    //injeção de dependencias
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `O pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();

    console.log(
      `O cliente é ${this.customer.getName},
       e seu identificador é ${this.customer.getIDN}`,
    );
  }
}
