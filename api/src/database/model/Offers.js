const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require('../../config/config');

const Offer = sequelize.define("Offer", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    offerSource: {
        type: DataTypes.STRING,
        allowNull: true
    },
    offerTitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    offerRating: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    offerPrice: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    offerDescription: {
        type: DataTypes.STRING,
        allowNull: true
    },
    offerInfo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    offerBlog: {
        type: DataTypes.BOOLEAN,
    }
})

//create table if not exists...
const init = (async () => {
    await Offer.sync();
})();

module.exports = Offer;