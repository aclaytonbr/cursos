"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./model/pessoa");
const pessoa_2 = require("./model/pessoa");
let objeto_pessoa = new pessoa_1.Pessoa("Fulano", new Date(), new pessoa_2.Endereco("Rua x", "0", "Bairro", "Manaus", "AM"));
console.log(objeto_pessoa.nome);
console.log(Intl.DateTimeFormat().format(objeto_pessoa.dataNascimento));
console.log(objeto_pessoa.endereco.logradouro);
console.log(objeto_pessoa.endereco.numero);
console.log(objeto_pessoa.endereco.bairro);
console.log(objeto_pessoa.endereco.cidade);
console.log(objeto_pessoa.endereco.uf);
//# sourceMappingURL=main.js.map