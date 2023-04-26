import {Router} from 'express'
//controlladores
import { multaGet,multasId,multaPost,multaUpdate,multaDelete } from '../controller/multa.controller.js';

//validate
import { multaValidate } from '../validations/multa.validate.js';

const router = Router();

//getVacio
router.get('/', (req,res)=> res.send('{Index multas}'))

//getAll
router.get('/multa',multaGet)

/** GET
 * @openapi
 * /Biblioteca/multa:
 *   get:
 *     tags:
 *       - multa
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: ID de un multa
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
 *                     $ref: "#/components/schemas/multa"
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
//getId
router.get('/multa/:id',multasId)

//post+
router.post('/multa', multaValidate,multaPost)

/** POST
 * @openapi
 * /Biblioteca/multa:
 *   post:
 *     tags:
 *       - multa
 *     requestBody:
 *       description: Información del multa a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/multa"
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
 *                     $ref: "#/components/schemas/multa"
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

//update
router.patch('/multa/:id',multaUpdate)
/** PATCH
 * @openapi
 * /Biblioteca/multa/{id}:
 *   patch:
 *     tags:
 *       - multa
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del multa a actualizar
 *     requestBody:
 *       description: Información del multa a actualizar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/multa"
 *     responses:
 *       200:
 *         description: La multa se ha sido actualizado con exito
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
 *                     $ref: "#/components/schemas/multa"
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
 *                       example: "No se encontró la multa con el ID proporcionado"
 */
//delete
router.delete('/multa/:id',multaDelete)
/** DELETE
 * @openapi
 * /Biblioteca/multa/{id}:
 *   delete:
 *     tags:
 *       - multa
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del multa a eliminar
 *     responses:
 *       200:
 *         description: La multa fue eliminado con exito
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
 *                   example: "multa eliminado con éxito"
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
 *                       example: "La multa no se ha encontrado"
 */

/*
usuario:mauricio lopez
libro: "la bella y la bestia"

*/
 



export default router