const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DATABASE_URL, 
    {
      dialectOptions:{
        ssl: {
          rejectUnauthorized: false,
        }
      }
    }
);

sequelize
    .authenticate()
    .then(() => console.log("Connection has been established"))
    .catch(err => console.error("Unable to connect: ", err));

module.exports = sequelize;