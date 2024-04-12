import { Sequelize } from 'sequelize';

const DATA_BASE_NAME = <string> process.env.DATA_BASE_NAME || 'financeiro';
const USER_NAME = <string> process.env.USER_NAME || 'sban';
const PASSWORD = <string> process.env.PASSWORD || 'banco2024';


const sequelize = new Sequelize(DATA_BASE_NAME,USER_NAME,PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

export default sequelize;