import {Router} from 'express'
//importamos los controladores
import { prestamoGet,prestamoId,prestamoPost,prestamoDelete,prestamoUpdate } from '../controller/prestamo.controller.js'
import { prestamoValidate } from '../validations/prestamo.validate.js'
const router = Router()

//get vacio
router.get('/', (req,res) => res.send('{Index prestamo}'))

//getPrestamo
router.get('/prestamo', prestamoGet)

/** GET
 * @openapi
 * /Biblioteca/prestamo:
 *   get:
 *     tags:
 *       - prestamo
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         description: ID de un prestamo
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/prestamo"
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: Fracasado
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Algo salio mal :C "
 */
//getIdPrestamo
router.get('/prestamo/:id',prestamoId)

//postPrestamo
router.post('/prestamo',prestamoValidate,prestamoPost)

/** POST
 * @openapi
 * /Biblioteca/prestamo:
 *   post:
 *     tags:
 *       - prestamo
 *     requestBody:
 *       description: Información del prestamo a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/prestamo"
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/prestamo"
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: Fracasado
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "La información proporcionada no es válida"
 */

//updatePrestamo
router.patch('/prestamo/:id', prestamoUpdate)
/** PATCH
 * @openapi
 * /Biblioteca/prestamo/{id}:
 *   patch:
 *     tags:
 *       - prestamo
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: El ID del prestamo a actualizar
 *     requestBody:
 *       description: Información del prestamo a actualizar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/prestamo"
 *     responses:
 *       200:
 *         description: El prestamo ha sido actualizado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/prestamo"
 *       404:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: Fracasado
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "No se encontró el prestamo con el ID proporcionado"
 */


//deletePrestamo
router.delete('/prestamo/:id', prestamoDelete)
/** DELETE
 * @openapi
 * /Biblioteca/prestamo/{id}:
 *   delete:
 *     tags:
 *       - prestamo
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: El ID del prestamo a eliminar
 *     responses:
 *       200:
 *         description: El prestamo fue eliminado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string 
 *                   example: "prestamo eliminado con éxito"
 *       404:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: Fracasado
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "El prestamo no se ha encontrado"
 */



export default router