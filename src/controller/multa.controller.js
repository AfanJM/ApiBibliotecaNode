import { pool } from "../db.js";
import { validationResult } from "express-validator";


//getAll
export const multaGet = async(req,res)=>{
    
  
   try {

       //obtener la cantidad total de registros
       const [rows] = await pool.query('SELECT *  FROM multas')
        res.send(rows)
       
   } catch (error) {
       res.status(500).json({
           message:'Algo salio mal'
       })
   }

}


//getId
export const multasId = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM multas WHERE id=?', [req.params.id])
        if(rows.length<= 0) return res.status(404).json({
            message:'LA multa no existe'
        })
        res.json(rows[0])

    } catch (error) {
        res.status(500).json({
            message:'Algo salio mal'
        })
        
    }
}


//post
export const multaPost = async(req,res)=>{
    //validacion
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json({
        errors: errors.array()
    })
    
    const {valor, fecha, estado, prestamos_id} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO multas (valor,fecha,estado,prestamos_id) VALUES (?,?,?,?)', 
        [valor,fecha,estado,prestamos_id])

        res.send({
            id: rows.insertId,
            valor,
            fecha,
            estado,
            prestamos_id
        })
    } catch (error) {
        return res.status(400).json({
            message:'La información proporcionada no es válida'
            
        })
    
    }
}


//update
export const multaUpdate = async(req,res)=>{
    const {id} = req.params;
    const {valor,fecha,estado ,prestamos_id} = req.body

    try {
        const [result] = await pool.query('UPDATE detalles SET valor=IFNULL (?,valor), fecha=IFNULL (?,fecha), estado=IFNULL (?,estado), prestamos_id=IFNULL (?,prestamos_id) WHERE id = ?',
        [valor,fecha,estado ,prestamos_id,id])

        if(result.affectedRows === 0) return res.send(404).json({
            message:'No se encontró la multa con el ID proporcionado'
        })

        const[rows] = await pool.query('SELECT * FROM detalles WHERE id =?', [id])
        res.status(200).json({
           message:`La multa ${id} se ha actualizado con exito`
           
       })
       
  

    } catch (error) {
         return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}

//delete
export const multaDelete = async(req,res)=>{
    try {
        const [result] = await pool.query('DELETE FROM multas WHERE id=? ', [req.params.id])
        if(result.affectedRows.length <= 0) return res.status(404).json({
            message:'La multa no se ha encontrado'
        })
        
        res.status(200).json({
            message:'La multa fue eliminada con exito'
        })

    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
        
    }
}

