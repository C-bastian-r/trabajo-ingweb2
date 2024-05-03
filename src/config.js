require('dotenv').config();

module.exports = {
  //config puerto app
  app:{
    port: process.env.PORT || 4000
  },
  //config conn mysql
  mysql:{
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '1006',
    database: process.env.MYSQL_DB || 'cards_db',
    dialect: process.env.DIALECT || 'mysql'
  }
}