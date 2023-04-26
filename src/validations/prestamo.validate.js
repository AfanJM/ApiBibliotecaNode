import { body } from "express-validator";

export const prestamoValidate = [[
    
    body('fecha')
  .isISO8601().toDate()
  .withMessage('La fecha debe tener su formato respectivo ejemplo: 2023-02-10')],
  body('fecha')
  .notEmpty()
  .withMessage('Por favor llene este campo'),

  
  //validando estado
  body('estado')
  .isLength({min:1})
  .withMessage('El estado simplemente es activo o inactivo se expresa como: 1/0')
  .notEmpty()
  .withMessage('Por favor llene este campo'),

  //validando usuarios_id
  body('usuarios_id')
  .isInt()
  .withMessage('Este campo deber ser un entero')
  .notEmpty()
  .withMessage('Por favor llene este campo'),


]