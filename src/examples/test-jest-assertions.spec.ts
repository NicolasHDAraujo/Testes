//testes de valores primitivos
describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); //toBe -> o que espera do valor
    //expect(number).toEqual(10); //toEqual ->o que espera de um objeto

    //expect(number).not.toBeNull(); //Não espera nulo

    expect(number).toBeGreaterThan(9); //maior que
    expect(number).toBeGreaterThanOrEqual(10); //maior/igual que
    expect(number).toBeLessThan(11); //maior que

    expect(number).toBeCloseTo(10.5, 1); //valor está perto do valor passado

    expect(number).toHaveProperty('toString'); //valor está perto do valor passado
  });
});
//teste de objeto
describe('Primitive values', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 30);
    expect(person).not.toHaveProperty('lastname');

    expect(person.name).toBe('Luiz');
  });
});

/**
 * Para se criar um teste pode se utilizar
 * it() ou test()
 *
 * Pode se ter descrição, com describe

describe('Testando algo', () => {
  it('should return 1 (IT)'),
    () => {
      const number = 1;
      expect(number).toBe(1);
    };
});

describe('Testando algo 2', () => {
  test('should return Nicolas (TEST)'),
    () => {
      const nome = 'Nicolas';
      expect(nome).not.toBe('Nicolas');
    };
});
*/
