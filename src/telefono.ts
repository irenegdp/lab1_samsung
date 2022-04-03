export class Telefono {
  private _tipo: string;
  private _numero: number;

  constructor(tipo: string, numero: number) {
    this._tipo = tipo;
    this._numero = numero;
  }
  get tipo() {
    return this._tipo;
  }
  get numero() {
    return this._numero;
  }
  public set tipo(tipo: string) {
    this._tipo = tipo;
  }
  public set numero(numero: number) {
    this._numero = numero;
  }
}

