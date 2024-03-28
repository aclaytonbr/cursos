"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empregado_js_1 = require("./empregado.js");
const global_types_js_1 = require("./global_types.js");
function mostrarPessoa() {
    let empregado = new empregado_js_1.Empregado('Fulano', 'Rua sem fim', '99999999', 'montador', 3000, global_types_js_1.eEstado_Civil.Uniao_Estavel);
    empregado.mostrarDetalhes();
}
mostrarPessoa();
//# sourceMappingURL=main.js.map