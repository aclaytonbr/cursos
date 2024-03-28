"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movimento = void 0;
class Movimento {
    constructor(valor) {
        this._data = new Date();
        this._valor = valor;
    }
    get valor() {
        return this._valor;
    }
    get data() {
        return this._data;
    }
}
exports.Movimento = Movimento;
//# sourceMappingURL=movimento.js.map