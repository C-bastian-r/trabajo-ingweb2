const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

/**
 * Define los atributos de la entidad
 */
const Card = sequelize.define('Cards',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name:{
    type: DataTypes.STRING,
    validate:{max: 50}
  },
  imag:{
    type: DataTypes.STRING,
    validate:{max:250}
  },
  location:{
  type: DataTypes.STRING,
  validation: {max: 250}
  },
  status:{
    type: DataTypes.STRING,
    validation: {max: 50}
  }
})


/**
 * para sincronizar la bd (crearla automaticamente):
 * 1. "comente const Card ="
 * 2. "comente module.exports = Card;"
 * 3. ejecute en este archivo = node. models.js
 */
/* sequelize.sync() */

module.exports = Card;