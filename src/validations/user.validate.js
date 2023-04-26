//importamos el express-validator
import {  body } from "express-validator";

export const userValidate = [
    body('nombres')
    .isString().
    withMessage('El nombre deber ser un texto')
    .notEmpty()
    .withMessage('Por favor llenar el campo'),


    body('apellidos')
    .isString()
    .withMessage('El apellido debe ser un texto')
    .notEmpty()
    .withMessage('Por favor llene este campo'),

    body('direccion')
    .isString()
    .withMessage('La direccion deber ser un texto')
    .notEmpty()
    .withMessage('Por favor llene este campo'),

    body('email')
    .isEmail()
    .withMessage('El correo electrónico no es válido')
    .notEmpty()
    .withMessage('Por favor llene este campo'),
  
  
    body('telefono')
    .isLength({ min: 10 })
    .withMessage('El teléfono debe tener al menos 10 caracteres')
    .notEmpty()
    .withMessage('Por favor llene este campo')

       
]