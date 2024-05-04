require('dotenv').config();

module.exports = {
  /**
   * configuracion de app
   */
  app:{
    port: process.env.PORT || 4000
  },
  
  /**
   * configuracion de conexion mysql con variables de entorno
   */
  mysql:{
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '1006',
    database: process.env.MYSQL_DB || 'cards_db',
    dialect: process.env.DIALECT || 'mysql'
  }
}