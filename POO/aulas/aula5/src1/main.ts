import { Empregado } from "./empregado.js";
import { eEstado_Civil } from "./global_types.js"

function mostrarPessoa() {
    let empregado: Empregado = new 
    Empregado('Fulano', 'Rua sem fim', '99999999','montador',3000, eEstado_Civil.Uniao_Estavel);
    empregado.mostrarDetalhes();
}

mostrarPessoa();