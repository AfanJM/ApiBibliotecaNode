import{Router} from 'express';
//controlladores
import { detallesGet,detallesId,detallePost,detalleUpdate,detalleDelete } from '../controller/detalles.controller.js';

//validate
import { detalleValidate } from '../validations/detalle.validate.js';
const router = Router();

//getVacio
router.get('/', (req,res)=> res.send('{Index Detalles}'))

//getAll
router.get('/detalle',detallesGet)

/** GET
 * @openapi
 * /Biblioteca/detalle:
 *   get:
 *     tags:
 *       - detalle
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         description: ID de un detalle
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
 *                     $ref: "#/components/schemas/detalles"
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
router.get('/detalle/:id',detallesId)

//Post
router.post('/detalle',detalleValidate,detallePost)

/** POST
 * @openapi
 * /Biblioteca/detalle:
 *   post:
 *     tags:
 *       - detalle
 *     requestBody:
 *       description: Información del detalle a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/detalles"
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
 *                     $ref: "#/components/schemas/detalles"
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
router.patch('/detalle/:id',detalleUpdate)
/** PATCH
 * @openapi
 * /Biblioteca/detalle/{id}:
 *   patch:
 *     tags:
 *       - detalle
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: El ID del detalle a actualizar
 *     requestBody:
 *       description: Información del detalle a actualizar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/detalles"
 *     responses:
 *       200:
 *         description: El detalle ha sido actualizado con exito
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
 *                     $ref: "#/components/schemas/detalles"
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
 *                       example: "No se encontró el detalle con el ID proporcionado"
 */


//delete
router.delete('/detalle/:id',detalleDelete)

/** DELETE
 * @openapi
 * /Biblioteca/detalle/{id}:
 *   delete:
 *     tags:
 *       - detalle
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: El ID del detalle a eliminar
 *     responses:
 *       200:
 *         description: El detalle fue eliminado con exito
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
 *                   example: "detalle eliminado con éxito"
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
 *                       example: "No se encontró el detalle con el ID proporcionado"
 */




//
export default router