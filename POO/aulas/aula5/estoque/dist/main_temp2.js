"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movimentacao_1 = require("./model/movimentacao");
const produto_1 = require("./model/produto");
let produto1 = new produto_1.Produto("001", "Arroz");
let produto2 = new produto_1.Produto("002", "Feijao");
let movimentacoes;
let movimento1 = new movimentacao_1.Movimentacao("100", Intl.DateTimeFormat().format(new Date), produto1, "E", 10);
let movimento2 = new movimentacao_1.Movimentacao("101", Intl.DateTimeFormat().format(new Date), produto2, "E", 5);
let movimento3 = new movimentacao_1.Movimentacao("102", Intl.DateTimeFormat().format(new Date), produto1, "S", 7);
function processarMovimentacao(movimentacao) {
    if (movimentacao.getQuantidade() < 0) {
        console.log("Movimentação " + movimento1.getNumero() + " não pode possuir quantidade menor que zero");
        return;
    }
    if (movimentacao.getTipo() === "E" && movimentacao.getProduto().getEstoque() < movimentacao.getProduto().getEstoque()) {
        console.log("Movimentação " + movimento1.getNumero() + " não pode ser realizada por falta de estoque do produto");
        return;
    }
    switch (movimentacao.getTipo()) {
        case "E":
            movimentacao.getProduto().incrementarEstoque(movimentacao.getQuantidade());
            break;
        case "S":
            movimentacao.getProduto().decrementarEstoque(movimentacao.getQuantidade());
            break;
        default:
            break;
    }
    console.log("Movimentação " + movimento1.getNumero() + " realizada com sucesso !!");
}
produto1.mostrarDetalhes();
produto2.mostrarDetalhes();
processarMovimentacao(movimento1);
processarMovimentacao(movimento2);
processarMovimentacao(movimento3);
produto1.mostrarDetalhes();
produto2.mostrarDetalhes();
//# sourceMappingURL=main_temp2.js.map