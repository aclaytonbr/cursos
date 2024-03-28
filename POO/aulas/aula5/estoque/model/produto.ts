export class Produto {
  //atributos
  private _codigo: string;
  private _descricao: string;
  private _estoque: number;

  //construtor
  constructor(codigo: string, descricao: string) {
    this._codigo = codigo;
    this._descricao = descricao;
    this._estoque = 0;
  }

  //getters
  public getCodigo(): string {
    return this._codigo;
  }
  public getDescricao(): string {
    return this._descricao;
  }
  public getEstoque(): number {
    return this._estoque;
  }

  //métodos
  public mostrarDetalhes(): void {
    console.log("######### Detalhes do Produto #########");
    console.log("Código        : " + this._codigo);
    console.log("Descrição     : " + this._descricao);
    console.log("Estoque       : " + this._estoque);
  }

  public incrementarEstoque(quantidade: number) {
    this._estoque += quantidade;
  }

  public decrementarEstoque(quantidade: number) {
    this._estoque -= quantidade;
  }
}
