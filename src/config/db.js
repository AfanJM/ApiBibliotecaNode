import { createPool } from "mysql2/promise";

export const pool = createPool({
    
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})
//

/**
 * @openapi
 * components:
 *   schemas:
 *     usuario:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 1
 *         nombres: 
 *           type: string
 *           example: juan sebastian   
 *         apellidos:
 *            type: string
 *            example: afanador mora
 *         direccion:
 *           type: string
 *           example: calle 63C#19-19
 *         telefono:
 *           type: string
 *           example: 3243014124
 *         email:
 *           type: string
 *           example: afanador1106@gmail.com
 */

//esquema de libro////////////////////////////

/**
 * @openapi
 * components:
 *   schemas:
 *     libro:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 1
 *         titulo: 
 *           type: string
 *           example: El principito    
 *         autor:
 *            type: string
 *            example: Antonie de Saint Exupery
 *         anyo:
 *           type: string
 *           example: 1943
 *        
 */

//esquema de los prestamo

/**
 * @openapi
 * components:
 *   schemas:
 *     prestamo:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 1
 *         fecha: 
 *           type: date
 *           example: 2023-02-10   
 *         estado:
 *            type: string
 *            example: 1
 *            description: 1:activo - 0:no activo
 *         usuarios_id:
 *           type: string
 *           example: 1
 *           description: ID del usuario que se le asigna el prestamo
 *        
 */

//esquema de multas

/**
 * @openapi
 * components:
 *   schemas:
 *     multa:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 1
 *         valor: 
 *           type: int
 *           example: 10000  
 *         fecha:
 *            type: date
 *            example: 2023-03-01
 *         estado:
 *           type: string   
 *           example: 1
 *           description: 1:activo - 0:no activo
 *         prestamos_id:
 *           type: string
 *           example: 1
 *           desctiption: ID del usuario al que se le asigna la multa
 *        
 */

//esquema detalles

/**
 * @openapi
 * components:
 *   schemas:
 *     detalles:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 1
 *         libros_id: 
 *           type: int
 *           example: 2
 *           description: ID del libro que se le asigna el detalle
 *         prestamos_id:
 *            type: int
 *            example: 1
 *            description: ID del prestamo que se le asigna el detalle
 *         valor:
 *           type: int   
 *           example: 500000
 *       
 *        
 */