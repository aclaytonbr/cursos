"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../database/sequelize/sequelize"));
const banco_1 = __importDefault(require("./banco"));
class Agencia extends sequelize_1.Model {
}
Agencia.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    idBanco: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: banco_1.default, //modelo de referencia
            key: 'id' //chave primaria do modelo de referencia
        }
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'Agencia',
    tableName: 'tbl_agencia',
    timestamps: false,
});
exports.default = Agencia;
//# sourceMappingURL=agencia.js.map