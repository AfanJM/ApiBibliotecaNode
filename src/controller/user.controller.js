import {pool} from '../db.js'
import {validationResult} from 'express-validator'



//GetUsuario: todos los usuarios
export const userGet = async (req,res)=>{
  
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios')
        res.send(rows)
        
    } catch (error) {
        res.status(500).json({
            message:'Algo salio mal'
        })
    }

}

//GetID
export const userId = async(req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ? ', [req.params.id])
        //si las filas estan vacias, el usuario no existe
        if(rows.length <= 0 ) return res.status(404).json({
            message:'El usario no existe'
        })
        res.json(rows[0])

    } catch (error) {
         return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

//postUser
export const userPost = async(req,res)=>{
    
    //validando
    const errors = validationResult(req);
     if(!errors.isEmpty()) return res.status(422).json({
         errors: errors.array()
     })
  
    //

    const {nombres, apellidos,direccion, telefono, email} = req.body;
   
    try {
        const [rows] = await pool.query('INSERT INTO usuarios (nombres, apellidos,direccion, telefono, email) VALUES (?,?,?,?,?)',
         [nombres, apellidos,direccion, telefono, email])
        res.send({
            id:rows.insertId,
            nombres,
            apellidos,
            direccion,
            telefono,
            email
        })
        
        
    
    } catch (error) {
        return res.status(400).json({
        message:'La información proporcionada no es válida'
        
    })

    }
 
}

//Delete
export const userDelete = async(req,res)=>{
 
   try {
    const [result] = await pool.query('DELETE FROM usuarios WHERE id=? ', [req.params.id])
    if(result.affectedRows <= 0) return res.status(404).json({
        errorMessage:'El usuario no existe'
    })

    return res.status(200).json({
        message:'El usuario se ha eliminado correctamente'
    })

   } catch (error) {
    return res.status(404).json({
        errorMessage:'No se encontró el usuario con el ID proporcionado'
    })
   }
}

//Patch
export const userPatch = async(req,res)=>{
    const {id} = req.params;
    const {nombres, apellidos,direccion, telefono, email} = req.body;
    try {
        const [result] = await pool.query('UPDATE usuarios SET nombres =IFNULL (?,nombres), apellidos=IFNULL(?,apellidos),direccion=IFNULL(?,direccion),telefono=IFNULL(?,telefono),email=IFNULL(?,email) WHERE id=? ',
        [nombres, apellidos,direccion, telefono, email, id])
    
        if(result.affectedRows === 0) return res.status(404).json({
            message:'No se encontró el usuario con el ID proporcionado'
        })
        
        const[rows] = await pool.query('SELECT * FROM usuarios WHERE id=?', [id])
        res.json(rows[0])
        
        
    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}