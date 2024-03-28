export class Movimento {
    private _valor: number;
    private _data: Date;

    constructor(valor: number) {
        this._data = new Date();
        this._valor = valor;
    }

    get valor():number {
        return this._valor;
    }

    get data():Date {
        return this._data;
    }
}