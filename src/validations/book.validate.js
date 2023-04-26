import { body } from "express-validator";


export const bookValidate = [
    body('titulo')
    .isString()
    .withMessage('Este campo deber ser un texto')
    .isLength({min:8})

    .withMessage('El titulo debe tener al menos 8 digitos')
    .notEmpty()
    .withMessage('Por favor llene este campo'),

    //validando el autor
    body('autor')
    .isString()
    .withMessage('Este campo debe ser un texto')
    .isLength({min:12})
    .withMessage('El autor debe tener al menos 12 digitos')
    .notEmpty()
    .withMessage('Por favor llene este campo'),

    //validando anyo
    body('anyo')
    .isLength({min:4})
    .withMessage('Este campo deber tener al menos 4 digitos')
    .isInt()
    .withMessage('año deber ser represenado en numero entero ejemplo: 2022')
    .notEmpty()
    .withMessage('Por favor llene este campo')


]