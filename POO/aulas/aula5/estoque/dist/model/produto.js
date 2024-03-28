"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    //construtor
    constructor(codigo, descricao) {
        this._codigo = codigo;
        this._descricao = descricao;
        this._estoque = 0;
    }
    //getters
    getCodigo() {
        return this._codigo;
    }
    getDescricao() {
        return this._descricao;
    }
    getEstoque() {
        return this._estoque;
    }
    //métodos
    mostrarDetalhes() {
        console.log("######### Detalhes do Produto #########");
        console.log("Código        : " + this._codigo);
        console.log("Descrição     : " + this._descricao);
        console.log("Estoque       : " + this._estoque);
    }
    incrementarEstoque(quantidade) {
        this._estoque += quantidade;
    }
    decrementarEstoque(quantidade) {
        this._estoque -= quantidade;
    }
}
exports.Produto = Produto;
//# sourceMappingURL=produto.js.map