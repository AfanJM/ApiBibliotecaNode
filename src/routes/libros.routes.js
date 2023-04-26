import {Router} from "express"
import { librosGet, librosId, librosPost,libroUpdate,libroDelete } from '../controller/libros.controller.js';
import { bookValidate } from "../validations/book.validate.js";
const router = Router();


//endpoint

//get vacio
router.get('/', (req,res)=>{
    res.send('{index libros}')
})

//libroGet
router.get('/libro',librosGet )

/** GET
 * @openapi
 * /Biblioteca/libro:
 *   get:
 *     tags:
 *       - libro
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         description: ID de un libro
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
 *                     $ref: "#/components/schemas/libro"
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


//libroId
router.get('/libro/:id',librosId)

//libroPost
router.post('/libro',bookValidate, librosPost)

/** POST
 * @openapi
 * /Biblioteca/libro:
 *   post:
 *     tags:
 *       - libro
 *     requestBody:
 *       description: Información del libro a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/libro"
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
 *                     $ref: "#/components/schemas/libro"
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

//libroUpdate
router.patch('/libro/:id', libroUpdate)
/** PATCH
 * @openapi
 * /Biblioteca/libro/{id}:
 *   patch:
 *     tags:
 *       - libro
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: El ID del usuario a actualizar
 *     requestBody:
 *       description: Información del usuario a actualizar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/libro"
 *     responses:
 *       200:
 *         description: El libro se ha actualizado correctamente
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
 *                     $ref: "#/components/schemas/libro"
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
 *                       example: "No se encontró el libro con el ID proporcionado"
 */


//libroDelete
router.delete('/libro/:id',libroDelete )
/** DELETE
 * @openapi
 * /Biblioteca/libro/{id}:
 *   delete:
 *     tags:
 *       - libro
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: El ID del libro a eliminar
 *     responses:
 *       200:
 *         description: El libro se ha eliminado correctamente
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
 *                   example: "Usuario eliminado con éxito"
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
 *                       example: "No se encontró el lbro con el ID proporcionado"
 */



//exportamos
export default router;
