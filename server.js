const express = require("express");
const cors = require('cors');
const app = express();
const morgan = require("morgan");

//setqings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./src/routes/clientesRoutes'));
app.use(require('./src/routes/mascotasRoutes'));
app.use(require('./src/routes/serviciosRoutes'));
app.use(require('./src/routes/agenda_citasRoutes'));


//Inicializar el servidor
app.listen(3000, () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
