import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize/sequelize';

class Correntista extends Model {
    public id!: number;
    public nome_completo!: string;
    public cpf!: string;
    public estado_civil!: string;
}

Correntista.init ({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    nome_completo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    estado_civil: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, 
    modelName: 'Correntista',
    tableName: 'tbl_correntista',
    timestamps: false
})


export default Correntista;