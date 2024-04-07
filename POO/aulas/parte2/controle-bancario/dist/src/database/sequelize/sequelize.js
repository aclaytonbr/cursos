"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DATA_BASE_NAME = process.env.DATA_BASE_NAME || 'financeiro';
const USER_NAME = process.env.USER_NAME || 'sban';
const PASSWORD = process.env.PASSWORD || 'banco2024';
const sequelize = new sequelize_1.Sequelize(DATA_BASE_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map