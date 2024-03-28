import { Produto } from "./produto";

export class Movimentacao {
  private _numero: string;
  private _data: string;
  private _produto: Produto;
  private _tipo: string;
  private _quantidade: number;

  constructor(
    numero: string,
    data: string,
    produto: Produto,
    tipo: string,
    quantidade: number,
  ) {
    this._numero = numero;
    this._data = data;
    this._produto = produto;
    this._tipo = tipo;
    this._quantidade = quantidade;
  }

  //getters
  public getNumero(): string {
    return this._numero;
  }
  public getData(): string {
    return this._data;
  }
  public getProduto(): Produto {
    return this._produto;
  }
  public getTipo(): string {
    return this._tipo;
  }
  public getQuantidade(): number {
    return this._quantidade;
  }

  //métodos
  public mostrarDetalhes(): void {
    console.log("######### Movimentação de Produto #########");
    console.log("Numero     : " + this._numero);
    console.log("Data       : " + this._data);
    console.log("Produto    : " + this._produto.getDescricao());
    console.log("Tipo       : " + this._tipo);
    console.log("Quantidade : " + this._quantidade);
  }

  public executar(): void {
    if (this._quantidade < 0) {
      console.log(
        "Movimentação " +
          this._numero +
          " não pode possuir quantidade menor que zero",
      );
      return;
    }

    if (this._tipo === "S" && this._produto.getEstoque() < this._quantidade) {
      console.log(
        "Movimentação " +
          this._numero +
          " não pode ser realizada por falta de estoque do produto",
      );
      return;
    }

    switch (this._tipo) {
      case "E":
        this._produto.incrementarEstoque(this._quantidade);
        break;
      case "S":
        this._produto.decrementarEstoque(this._quantidade);
        break;
      default:
        break;
    }

    console.log("Movimentação " + this._numero + " realizada com sucesso !!");
  }
}
