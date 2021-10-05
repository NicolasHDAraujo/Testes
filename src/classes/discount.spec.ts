import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';
//factory function para criar o objeto
const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should have nodiscount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
