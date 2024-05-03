//manejador de db mysql con sequelize
const { Sequelize } = require('sequelize');
const config = require('../config');

/**
 * @config config objeto sequelize
 * setea los campos de conexion a base de datos
 */
const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    dialect: config.mysql.dialect,
    host: config.mysql.host
  }
);

/**
 * @function connectToDb
 * Funcion que realiza conexion con bd
 */
const connectToDb = async()=>{
  console.log('se ejecuta')
  try{
    await sequelize.authenticate();
    console.log('conexion establecida con exito!!');
  }catch(err){
    console.error(err);
  }
};

module.exports = {
  sequelize,
  connectToDb
}
