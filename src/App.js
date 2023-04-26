import  express  from 'express';
import UserRoutes from './routes/user.routes.js'
import librosRoutes from './routes/libros.routes.js'
import prestamoRoutes from './routes/prestamo.routes.js'
import detalleRoutes from './routes/detalles.routes.js'
import multaRoutes from './routes/multas.routes.js'
import { PORT } from './config.js';
//documentacion
import swaggerDocs from './swagger.js';

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}));//no recuerdo
//-- para dar accesos desde cualquier servidor​
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

//rutas

app.use('/Biblioteca', multaRoutes)
app.use('/Biblioteca', detalleRoutes)
app.use('/Biblioteca',prestamoRoutes)
app.use('/Biblioteca',librosRoutes )
app.use('/Biblioteca', UserRoutes)

//404
//   app.use((req,res,next) =>{
//       res.status(404).send('Oops, page not found')
    
//   })

//arranacmos el server
app.listen(PORT, () =>{
    console.log(`Servidor levantado en el puerto ${PORT}`)
    swaggerDocs(app,PORT)

})

export default app;
