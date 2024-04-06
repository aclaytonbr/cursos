import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize/sequelize';
import Banco from './banco';

class Agencia extends Model {
    public id!: number;
    public codigo!: string;
    public nome!: string;
    public endereco!: string;
    public idBanco!: number; //chave estrangeira

    //Associação com o modelo Banco
    public readonly banco?: Banco;

}

Agencia.init ({
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
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idBanco: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Banco, //modelo de referencia
            key: 'id'     //chave primaria do modelo de referencia
        }
    }
}, {
    sequelize, 
    modelName: 'Agencia',
    tableName: 'tbl_agencia',
    timestamps: false,
})


export default Agencia;