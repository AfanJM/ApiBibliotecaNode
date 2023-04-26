import { pool } from "../db.js";
import {validationResult} from 'express-validator'

//getAll
export const prestamoGet = async(req,res)=>{
   
    try {

        //obtener la cantidad total de registros
        const [rows] = await pool.query('SELECT * FROM  prestamos')
        res.send(rows)
        
    } catch (error) {
        res.status(500).json({
            message:'Algo salio mal'
        })
    }

}

//getId
export const prestamoId = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM prestamos WHERE id=?', [req.params.id])
        if(rows.length<= 0) return res.status(404).json({
            message:'El prestamo no existe'
        })
        res.json(rows[0])

    } catch (error) {
        res.status(500).json({
            message:'Algo salio mal'
        })
        
    }
}

//post
export const prestamoPost = async(req,res)=>{
     //validacion
     const errors = validationResult(req)
     if(!errors.isEmpty()) return res.status(422).json({
         errors: errors.array()
     })
     //
     const {fecha, estado, usuarios_id} = req.body;
     
 
     try {
         const [rows] = await pool.query('INSERT INTO prestamos (fecha,estado,usuarios_id) VALUES (?,?,?)', 
         [fecha,estado,usuarios_id])
   
         res.send({
             id: rows.insertId,
             fecha,
             estado,
             usuarios_id
         })
     } catch (error) {
         return res.status(400).json({
             message:'La información proporcionada no es válida'
             
         })
     
     }
}

//delete
export const prestamoDelete = async(req,res)=>{
    try {
        const [result] = await pool.query('DELETE FROM prestamos WHERE id=? ', [req.params.id])
        if(result.affectedRows.length <= 0) return res.status(404).json({
            message:'El prestamo no se ha encontrado'
        })

        res.status(200).json({
            message:'El prestamo fue eliminado con exito'
        })

    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
        
    }
}

//update
export const prestamoUpdate = async(req,res)=>{
    const {id} = req.params;
    const {fecha,estado,usuarios_id} = req.body

    try {
        const [result] = await pool.query('UPDATE prestamos SET fecha=IFNULL (?,fecha), estado=IFNULL (?,estado), usuarios_id=IFNULL (?,usuarios_id) WHERE id = ?',
        [fecha,estado,usuarios_id,id])

        if(result.affectedRows === 0) return res.send(404).json({
            message:'No se encontró el prestamo con el ID proporcionado'
        })

        const[rows] = await pool.query('SELECT * FROM prestamos WHERE id =?', [id])
        res.status(200).json({
           message:`El prestamo ${id} ha sido actualizado con exito`
           
       })
       
  

    } catch (error) {
         return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}