const app = require('./app');
const router = require("../src/api/routes/router.routes");
const cors = require("cors");
const {sequelize, connectToDb} = require('../src/DB/db');

//autorizacion de cors
app.use(cors());
//rutas
app.use("/",router);

//iniciando servidor
app.listen(app.get('port'), async()=>{
  console.log('corriendo en el puerto', app.get('port'))
  //conexion con sequelize
  await connectToDb();
});