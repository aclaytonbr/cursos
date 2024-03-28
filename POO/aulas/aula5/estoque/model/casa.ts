class Casa {
  private _quartos: Comodo[];
  private _sala: Comodo;
  private _cozinha: Comodo;

  constructor(quartos: Comodo[], sala: Comodo, cozinha: Comodo) {
    this._quartos = quartos;
    this._sala = sala;
    this._cozinha = cozinha;
  }
}

class Comodo {
  // Atributos e métodos do cômodo
  private _largura: number;
  private _comprimento: number;
  private _pe_direito: number;

  constructor(largura: number, comprimento: number, pe_direito: number) {
    this._largura = largura;
    this._comprimento = comprimento;
    this._pe_direito = pe_direito;
  }
}
