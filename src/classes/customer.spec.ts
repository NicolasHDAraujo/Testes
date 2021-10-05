import { Individual, Enterprise } from './customer';
//factory function para criar o objeto
const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): Individual => {
  return new Individual(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): Enterprise => {
  return new Enterprise(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Nicolas', 'Araujo', '407.722.844-66');
    expect(sut).toHaveProperty('firstName', 'Nicolas');
    expect(sut).toHaveProperty('lastName', 'Araujo');
    expect(sut).toHaveProperty('cpf', '407.722.844-66');
  });
});

describe('Should have methods to get name and idn for Individual', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Nicolas', 'Araujo', '407.722.844-66');
    expect(sut.getName).toBe('Nicolas Araujo');
    expect(sut.getIDN).toBe('407.722.844-66');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should have name, cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '000.111.222-33');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '000.111.222-33');
  });
});

describe('Should have methods to get name and idn for Enterprise', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should have name, cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '555.444.333-22');
    expect(sut.getName).toBe('Udemy');
    expect(sut.getIDN).toBe('555.444.333-22');
  });
});
