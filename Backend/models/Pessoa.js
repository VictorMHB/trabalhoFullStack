const { DataTypes, Model } = require('sequelize');

class Pessoa extends Model {}

Pessoa.init({
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    }, {
        sequelize,
        modelName: 'Pessoa',
        tableName: 'pessoa',
        timestamps: true,
    });

    module.exports = Pessoa;