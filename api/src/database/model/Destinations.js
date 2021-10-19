const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require('../../config/config');

const Destination = sequelize.define("Destination", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    destinationTitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    destinationPrice: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    destinationSize: {
        type: DataTypes.STRING,
        allowNull: true
    },
    destinationSource: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

//create table if not exists...
const init = (async () => {
    await Destination.sync();
})();

module.exports = Destination;