"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movimentacao_js_1 = require("./model/movimentacao.js");
const produto_js_1 = require("./model/produto.js");
let produto1 = new produto_js_1.Produto("001", "Arroz");
let produto2 = new produto_js_1.Produto("002", "Feijão");
let movimento1 = new movimentacao_js_1.Movimentacao("100", "07/03/2024", produto1, "E", 10);
let movimento2 = new movimentacao_js_1.Movimentacao("100", "07/03/2024", produto1, "S", 3);
produto1.mostrarDetalhes();
movimento1.mostrarDetalhes();
movimento1.executar();
produto1.mostrarDetalhes();
movimento2.executar();
produto1.mostrarDetalhes();
//# sourceMappingURL=main_aula4.js.map