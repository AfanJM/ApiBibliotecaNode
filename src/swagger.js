//swagger
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

//data de la api
const option = {
    definition:{
        openapi: "3.0.0",
        info: {title: "Biblioteca API", version: "1.0.0"},
    },
    apis:['src/routes/user.routes.js', 'src/db.js', 'src/routes/libros.routes.js',
     'src/routes/prestamo.routes.js', 'src/routes/multas.routes.js', 'src/routes/detalles.routes.js'],
}

//documentacion en formato json
export const swaggerSpec = swaggerJSDoc(option);

//
const swaggerDocs = (app,port) =>{
    app.use('/Biblioteca/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('/Biblioteca/api/v1/docs.json', (req,res)=>{
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec)
    });

    console.log(`version 1 Docs: http//localhost:${port}/Biblioteca/api/v1/docs`)
}

export default swaggerDocs;
