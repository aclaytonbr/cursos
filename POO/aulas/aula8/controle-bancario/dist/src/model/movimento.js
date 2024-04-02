"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movimento = void 0;
class Movimento {
    constructor(numero, conta, tipo, natureza, timestamp, valor) {
        this._numero = numero;
        this._conta = conta;
        this._tipo = tipo;
        this._natureza = natureza;
        this._timestamp = timestamp;
        this._valor = valor;
    }
    get numero() {
        return this._numero;
    }
    get tipo() {
        return this._tipo;
    }
    get natureza() {
        return this._natureza;
    }
    get timestamp() {
        return this._timestamp;
    }
    get valor() {
        return this._valor;
    }
    get conta() {
        return this._conta;
    }
}
exports.Movimento = Movimento;
//# sourceMappingURL=movimento.js.map