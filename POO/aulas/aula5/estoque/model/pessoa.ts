export class Pessoa {
  private _nome: string;
  private _data_nasc: Date;
  private _endereco: Endereco;

  constructor(
    nome: string,
    data_nasc: Date,

    endereco: Endereco,
  ) {
    this._nome = nome;
    this._data_nasc = data_nasc;
    this._endereco = endereco;
  }

  get nome(): string {
    return this._nome;
  }
  get dataNascimento(): Date {
    return this._data_nasc;
  }
  get endereco(): Endereco {
    return this._endereco;
  }
}

export class Endereco {
  // Atributos e métodos do endereço
  private _logradouro: string;
  private _numero: string;
  private _bairro: string;
  private _cidade: string;
  private _uf: string;

  constructor(
    logradouro: string,
    numero: string,
    bairro: string,
    cidade: string,
    uf: string,
  ) {
    this._logradouro = logradouro;
    this._numero = numero;
    this._bairro = bairro;
    this._cidade = cidade;
    this._uf = uf;
  }

  get logradouro(): string {
    return this._logradouro;
  }
  get numero(): string {
    return this._numero;
  }
  get bairro(): string {
    return this._bairro;
  }
  get cidade(): string {
    return this._cidade;
  }
  get uf(): string {
    return this._uf;
  }
}

class Funcionario extends Pessoa {
  private _cargo: string;
  private _salario: number;

  constructor(
    nome: string,
    data_nasc: Date,
    endereco: Endereco,
    cargo: string,
    salario: number,
  ) {
    super(nome, data_nasc, endereco);
    this._cargo = cargo;
    this._salario = salario;
  }
}
