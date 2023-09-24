import { pool } from "../config/db.js";
import { validationResult } from "express-validator";


//getAll
export const detallesGet = async(req,res)=>{
    
  
   try {

       //obtener la cantidad total de registros
       const [rows] = await pool.query('SELECT * FROM detalles')
        res.send(rows)
       
   } catch (error) {
       res.status(500).json({
           message:'Algo salio mal'
       })
   }

}


//getId
export const detallesId = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM detalles WHERE id=?', [req.params.id])
        if(rows.length<= 0) return res.status(404).json({
            message:'El detalle no existe'
        })
        res.json(rows[0])

    } catch (error) {
        res.status(500).json({
            message:'Algo salio mal'
        })
        
    }
}

//post
export const detallePost = async(req,res)=>{
    //validacion
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json({
        errors: errors.array()
    })
    
    const {valor, libros_id, prestamos_id} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO detalles (valor,libros_id,prestamos_id) VALUES (?,?,?)', 
        [valor,libros_id,prestamos_id])

        res.send({
            id: rows.insertId,
            valor,
            libros_id,
            prestamos_id
        })
    } catch (error) {
        return res.status(400).json({
            message:'La información proporcionada no es válida'
            
        })
    
    }
}

//update
export const detalleUpdate = async(req,res)=>{
    const {id} = req.params;
    const {valor,libros_id ,prestamos_id} = req.body

    try {
        const [result] = await pool.query('UPDATE detalles SET valor=IFNULL (?,valor), libros_id=IFNULL (?,libros_id), prestamos_id=IFNULL (?,prestamos_id) WHERE id = ?',
        [valor,libros_id ,prestamos_id,id])

        if(result.affectedRows === 0) return res.send(404).json({
            message:'No se encontró el detalle con el ID proporcionado'
        })

        const[rows] = await pool.query('SELECT * FROM detalles WHERE id =?', [id])
        res.status(200).json({
           message:`El deetalle ${id} ha sido actualizado con exito`
           
       })
       
  

    } catch (error) {
         return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}


//delete
export const detalleDelete = async(req,res)=>{
    try {
        const [result] = await pool.query('DELETE FROM detalles WHERE id=? ', [req.params.id])
        if(result.affectedRows.length <= 0) return res.status(404).json({
            message:'El detalle no se ha encontrado'
        })

        res.status(200).json({
            message:'El detalle fue eliminado con exito'
        })

    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
        
    }
}