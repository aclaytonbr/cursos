import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize/sequelize';
import Agencia from './agencia';
import Correntista from './correntista';


class Conta extends Model {
    public idAgencia!: number; //chave estrangeira
    public idCorrentista!: number; //chave estrangeira
    public numero!: string;
    public saldo!: number;
    public limite_especial!: number;

    public readonly conta?: Conta;
    public readonly correntista?: Correntista;

}

Conta.init ({
    idAgencia: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Agencia, //modelo de referencia
            key: 'id'     //chave primaria do modelo de referencia
        }
    },
    idCorrentista: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Correntista, //modelo de referencia
            key: 'id'     //chave primaria do modelo de referencia
        }
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    saldo: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    },
    limite_especial: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    }
}, {
    sequelize, 
    modelName: 'Conta',
    tableName: 'tbl_conta',
    timestamps: false,
})


export default Conta;