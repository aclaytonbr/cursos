import { Movimentacao } from "./model/movimentacao.js";
import { Produto } from "./model/produto.js";

let produto1: Produto = new Produto("001", "Arroz");
let produto2: Produto = new Produto("002", "Feijão");

let movimento1: Movimentacao = new Movimentacao(
  "100",
  "07/03/2024",
  produto1,
  "E",
  10,
);
let movimento2: Movimentacao = new Movimentacao(
  "100",
  "07/03/2024",
  produto1,
  "S",
  3,
);

produto1.mostrarDetalhes();
movimento1.mostrarDetalhes();
movimento1.executar();
produto1.mostrarDetalhes();
movimento2.executar();
produto1.mostrarDetalhes();
