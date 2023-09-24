
import {join, dirname} from 'path'

import {fileURLToPath} from 'url'

import UserRoutes from './routes/user.routes.js'

import librosRoutes from './routes/libros.routes.js'

import prestamoRoutes from './routes/prestamo.routes.js'

import detalleRoutes from './routes/detalles.routes.js'

import multaRoutes from './routes/multas.routes.js'

import  express  from 'express';

import dotenv from 'dotenv'

dotenv.config()

//documentacion
import swaggerDocs from './swagger.js';

const app = express();

const port = process.env.PORT

app.use(express.json());

const publicpath = join(dirname(fileURLToPath(import.meta.url)), './public')

//-- para dar accesos desde cualquier servidor​
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(  express.static( publicpath ) )

//rutas

app.use('/Biblioteca', multaRoutes)
app.use('/Biblioteca', detalleRoutes)
app.use('/Biblioteca',prestamoRoutes)
app.use('/Biblioteca',librosRoutes )
app.use('/Biblioteca', UserRoutes)


//arranacmos el server
app.listen(port, () =>{
    console.log(`Servidor levantado en el puerto ${port}`)
    swaggerDocs(app,port)

})

export default app;
