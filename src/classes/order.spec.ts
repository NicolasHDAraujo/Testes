import { CustomerOrder } from './../interfaces/customer-protocol';
import { PersistencyProtocol } from './../interfaces/percistency-protocol';
import { MessageProtocol } from './../interfaces/message-protocol';
/* eslint-disable @typescript-eslint/no-empty-function */
import { CartItem } from '../interfaces/cart-item';
import { ShoppingCartProtocol } from './../interfaces/shopping-cart-protocol';
import { Order } from './order';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }
  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
}

class MessageMock implements MessageProtocol {
  sendMessage() {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder() {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    throw new Error('Method not implemented.');
  }
  getIDN() {
    return '';
  }
}
//factory de sut
const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messageMock = new MessageMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messageMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    persistencyMock,
    messageMock,
  };
};

describe('Order', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true); //fingindo o retorno da função
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout is cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false); //fingindo o retorno da função
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send an email to customer', () => {
    const { sut, messageMock } = createSut();
    const messageMockSpy = jest.spyOn(messageMock, 'sendMessage'); //fingindo o retorno da função
    sut.checkout();
    expect(messageMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder'); //fingindo o retorno da função
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear card', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear'); //fingindo o retorno da função
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
