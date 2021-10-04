import { PersistencyProtocol } from './../interfaces/percistency-protocol';
export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo');
  }
}
