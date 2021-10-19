const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require('../../config/config');

const Banner = sequelize.define("Banner", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    bannerChose: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bannerSourc: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bannerTitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // bannerPrice: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
    // bannerInfo: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
    bannerDescription: {
        type: DataTypes.TEXT,
        allowNull: true
    },
})

//create table if not exists...
const init = (async () => {
    await Banner.sync();
})();

module.exports = Banner;