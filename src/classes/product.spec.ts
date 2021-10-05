import { Product } from './product';
//factory function para criar o objeto
const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should have properties name and price', () => {
    //System under test
    const sut = createSut('Camisa', 32.9);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(32.9);
  });
});
