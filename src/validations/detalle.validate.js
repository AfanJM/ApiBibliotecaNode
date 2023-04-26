import { body } from "express-validator";


export const detalleValidate = [
    //validando el valor
    body('valor')
    .isNumeric()
    .withMessage('Este campo deber ser numerico')
    .isLength({min:5})
    .withMessage('El valor debe tener al menos 5 digitos')
    .notEmpty()
    .withMessage('Por favor llene este campo'),

    //validando libros_id
    body('libros_id')
    .isInt()
    .withMessage('deber ser un numero entero')
    .notEmpty()
    .withMessage('Por favor llene este campo'),

    //validando prestamos_id
    body('prestamos_id')
    .isInt()
    .withMessage('Deber ser un entero')
    .notEmpty()
    .withMessage('Por favor llene este campo')


]