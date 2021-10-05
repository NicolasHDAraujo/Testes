import { CartItem } from './../interfaces/cart-item';
import { Discount } from './discount';
import { ShoppingCart } from './shopping-carts';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Caneta', 2);
  const cartItem2 = createCartItem('Bolsa', 200.59);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should be an empty cart when np product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(202.59);
    expect(sut.totalWithDiscount()).toBe(202.59);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });

  it('should call discount.calculate() once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
