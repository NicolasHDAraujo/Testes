import { Message } from './message';
//factory function para criar o objeto
const createSut = () => {
  return new Message();
};

describe('Message', () => {
  afterEach(() => jest.clearAllMocks()); //limpar os mocks depois de cada test

  it('should return undefined', () => {
    //System under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined(); //espero que a classe não retorne nada
  });
});

describe('Message', () => {
  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log'); //observar ação
    sut.sendMessage(''); //chamando a classe para gerar o teste
    expect(consoleSpy).toHaveBeenCalledTimes(1); //espero que seja chamado uma vez
  });
});

describe('Message', () => {
  it('should call console.log whit Mensagem: , and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log'); //observar ação
    sut.sendMessage('teste'); //chamando a classe para gerar o teste
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem: ', 'teste'); //espero que seja chamado com
  });
});
