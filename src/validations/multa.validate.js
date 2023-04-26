import { body } from "express-validator";


export const multaValidate = [[
    //validando el valor
  body('valor')
  .isDecimal()
  .withMessage('El valor tiene que ser numerico')
  .notEmpty()
  .withMessage('Por favor llene este campo'),

  //validando la fecha
  body('fecha')
  .isISO8601().toDate()
  .withMessage('La fecha debe tener su formato respectivo ejemplo: 2023-02-10')],
  body('fecha')
  .notEmpty()
  .withMessage('Por favor lle este campo')
]