import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize/sequelize';

class Banco extends Model {
    public id!: number;
    public codigo!: string;
    public nome!: string;
}

Banco.init ({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize, 
    modelName: 'Banco',
    tableName: 'tbl_banco',
    timestamps: false,
})


export default Banco;