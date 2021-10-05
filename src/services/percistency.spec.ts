import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should return undefined', () => {
    //System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined(); //espero que a classe não retorne nada
  });
});

describe('Persistency', () => {
  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); //observar ação
    sut.saveOrder(); //chamando a classe para gerar o teste
    expect(consoleSpy).toHaveBeenCalledTimes(1); //espero que seja chamado uma vez
  });
});

describe('Persistency', () => {
  it('should call console.log whit "Pedido salvo"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); //observar ação
    sut.saveOrder(); //chamando a classe para gerar o teste
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo'); //espero que seja chamado com
  });
});
