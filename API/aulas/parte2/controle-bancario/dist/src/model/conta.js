"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../database/sequelize/sequelize"));
const agencia_1 = __importDefault(require("./agencia"));
const correntista_1 = __importDefault(require("./correntista"));
class Conta extends sequelize_1.Model {
}
Conta.init({
    idAgencia: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: agencia_1.default, //modelo de referencia
            key: 'id' //chave primaria do modelo de referencia
        }
    },
    idCorrentista: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: correntista_1.default, //modelo de referencia
            key: 'id' //chave primaria do modelo de referencia
        }
    },
    numero: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    saldo: {
        type: sequelize_1.DataTypes.DECIMAL,
        defaultValue: 0
    },
    limite_especial: {
        type: sequelize_1.DataTypes.DECIMAL,
        defaultValue: 0
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'Conta',
    tableName: 'tbl_conta',
    timestamps: false,
});
exports.default = Conta;
//# sourceMappingURL=conta.js.map