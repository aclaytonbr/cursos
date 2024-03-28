import { Pessoa } from "./model/pessoa";
import { Endereco } from "./model/pessoa";

let objeto_pessoa = new Pessoa(
  "Fulano",
  new Date(),
  new Endereco("Rua x", "0", "Bairro", "Manaus", "AM"),
);

console.log(objeto_pessoa.nome);
console.log(Intl.DateTimeFormat().format(objeto_pessoa.dataNascimento));
console.log(objeto_pessoa.endereco.logradouro);
console.log(objeto_pessoa.endereco.numero);
console.log(objeto_pessoa.endereco.bairro);
console.log(objeto_pessoa.endereco.cidade);
console.log(objeto_pessoa.endereco.uf);
