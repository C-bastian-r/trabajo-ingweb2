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
 * 1. Comente "const Card =" (desde la constante hasta el simbolo de igualdad),
 * de manera tal que quede solo sequelize.define('Cards',{...})
 * 
 * 2. Comente "module.exports = Card;" (la exportacion al final del archivo)
 * 
 * 3. Descomente sequelize.sync()
 * 
 * 4. Ejecute en la terminal de este archivo "node models.js" (sin las comillas)
 */


/* sequelize.sync() */

module.exports = Card;