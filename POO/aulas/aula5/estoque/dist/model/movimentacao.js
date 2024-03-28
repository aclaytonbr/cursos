"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movimentacao = void 0;
class Movimentacao {
    constructor(numero, data, produto, tipo, quantidade) {
        this._numero = numero;
        this._data = data;
        this._produto = produto;
        this._tipo = tipo;
        this._quantidade = quantidade;
    }
    //getters
    getNumero() {
        return this._numero;
    }
    getData() {
        return this._data;
    }
    getProduto() {
        return this._produto;
    }
    getTipo() {
        return this._tipo;
    }
    getQuantidade() {
        return this._quantidade;
    }
    //métodos
    mostrarDetalhes() {
        console.log("######### Movimentação de Produto #########");
        console.log("Numero     : " + this._numero);
        console.log("Data       : " + this._data);
        console.log("Produto    : " + this._produto.getDescricao());
        console.log("Tipo       : " + this._tipo);
        console.log("Quantidade : " + this._quantidade);
    }
    executar() {
        if (this._quantidade < 0) {
            console.log("Movimentação " + this._numero + " não pode possuir quantidade menor que zero");
            return;
        }
        if (this._tipo === "S" && this._produto.getEstoque() < this._quantidade) {
            console.log("Movimentação " + this._numero + " não pode ser realizada por falta de estoque do produto");
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
exports.Movimentacao = Movimentacao;
//# sourceMappingURL=movimentacao.js.map