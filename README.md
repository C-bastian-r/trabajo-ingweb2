# trabajo-ingweb2

# Instrucciones para correr por primera vez el proyecto.
* 1. Descargue el proyecto.
* 2. Abra la terminal en la carpeta del proyecto.
* 3. Ejecute el comando npm init -y

# Base de datos:

## Configuración
*Dentro del src/config -> puede encontrar un objeto de configuración de la base de datos,
estos datos son usados para llevar a cabo la conexión, sientanse libres de configurarlo

dentro del script models en la ruta /src/DB/model/models.js
existen instrucciones para crear automaticamente la base de datos, que son las siguiente:

Para sincronizar la bd (crearla automaticamente):
 * 1. comente "const Card =" (desde la constante hasta el simbolo de igualdad),
   de manera tal que quede solo sequelize.define('Cards',{...})
 * 2. comente "module.exports = Card;" (la exportacion al final del archivo)
 * 3. descomente sequelize.sync()
 * 4. ejecute en la terminal de este archivo "node models.js" (sin las comillas)

## Como alternativa esta la creación de la BD mysql:

CREATE DATABASE cards_db;
USE cards_db;

CREATE TABLE cards(
id INTEGER PRIMARY KEY,
name VARCHAR(255),
imag VARCHAR(255),
location VARCHAR(255),
status VARCHAR(255),
createdAt DATETIME,
updatedAt DATETIME
)
