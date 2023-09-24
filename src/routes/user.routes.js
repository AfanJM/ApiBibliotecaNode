import { Router } from "express";
import { userGet, userId, userPost,userDelete, userPatch } from "../controller/user.controller.js";
import { userValidate } from "../validations/user.validate.js";
const router = Router();
//


//endpoint:

//documentacion con swagger


//getUser
router.get('/usuario', userGet)

/** GET
 * @openapi
 * /Biblioteca/usuario:
 *   get:
 *     tags:
 *       - usuario
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         description: ID de un usuario
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
 *                     $ref: "#/components/schemas/usuario"
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
router.get('/usuario/:id',userId )

//postUSer
router.post('/usuario', userValidate, userPost, )

/** POST
 * @openapi
 * /Biblioteca/usuario:
 *   post:
 *     tags:
 *       - usuario
 *     requestBody:
 *       description: Información del usuario a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/usuario"
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
 *                     $ref: "#/components/schemas/usuario"
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


//updateUser
router.patch('/usuario/:id', userPatch)
/** PATCH
 * @openapi
 * /Biblioteca/usuario/{id}:
 *   patch:
 *     tags:
 *       - usuario
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
 *             $ref: "#/components/schemas/usuario"
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
 *                     $ref: "#/components/schemas/usuario"
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
 *                       example: "No se encontró el usuario con el ID proporcionado"
 */

//deleteUser
router.delete('/usuario/:id', userDelete)
/** DELETE
 * @openapi
 * /Biblioteca/usuario/{id}:
 *   delete:
 *     tags:
 *       - usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: El ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: El usuario se ha eliminado correctamente
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
 *                       example: "No se encontró el usuario con el ID proporcionado"
 */








//exportamos
export default router;