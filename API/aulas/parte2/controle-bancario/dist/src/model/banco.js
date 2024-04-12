"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../database/sequelize/sequelize"));
class Banco extends sequelize_1.Model {
}
Banco.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        //autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'Banco',
    tableName: 'tbl_banco',
    timestamps: false,
});
exports.default = Banco;
//# sourceMappingURL=banco.js.map