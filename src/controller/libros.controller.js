import {pool} from '../config/db.js'
import {validationResult} from 'express-validator'


//getLiros:todos los libros 
export const librosGet = async(req,res)=>{

    try {

        //obtener la cantidad total de registros
        const [rows] = await pool.query('SELECT * FROM libros')
        res.send(rows)
        
        
    } catch (error) {
        res.status(500).json({
            message:'Algo salio mal'
        })
    }

}

//getId
export const librosId = async(req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM libros WHERE id=?', [req.params.id])
        if(rows.length<= 0) return res.status(404).json({
            message:'El libro no existe'
        })
        res.json(rows[0])

    } catch (error) {
        res.status(500).json({
            message:'Algo salio mal'
        })
        
    }
}

//postLibros
export const librosPost = async(req,res)=>{
    //validacion
    const errors = validationResult(req)
    if(!errors.isEmpty()) return res.status(422).json({
        errors: errors.array()
    })
    //
    const {titulo, autor, anyo} = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO libros (titulo,autor,anyo) VALUES (?,?,?)', 
        [titulo,autor,anyo])

        res.send({
            id: rows.insertId,
            titulo,
            autor,
            anyo
        })
    } catch (error) {
        return res.status(400).json({
            message:'La información proporcionada no es válida'
            
        })
    
    }
}

//libroDelete
export const libroDelete = async(req,res)=>{
    try {
        const [result] = await pool.query('DELETE FROM libros WHERE id=? ', [req.params.id])
        if(result.affectedRows.length <= 0) return res.status(404).json({
            message:'No se encontró el lbro con el ID proporcionado'
        })

        res.status(200).json({
            message:'El libro se ha eliminado correctamente'
        })

    } catch (error) {
        return res.status(500).json({
            message:'Algo salio mal'
        })
        
    }
}

//libroUpdate
export const libroUpdate = async(req,res)=>{
    const {id} = req.params;
    const {titulo,autor,anyo} = req.body

    try {
        const [result] = await pool.query('UPDATE libros SET titulo=IFNULL (?,titulo), autor=IFNULL (?,autor), anyo=IFNULL (?,anyo) WHERE id = ?',
        [titulo,autor,anyo,id])

        if(result.affectedRows === 0) return res.send(404).json({
            message:'No se encontró el libro con el ID proporcionado'
        })

        const[rows] = await pool.query('SELECT * FROM libros WHERE id =?', [id])
        res.status(200).json({
           message:`Libro ${id} se ha actualizado con exito`
           
       })
       
  

    } catch (error) {
         return res.status(500).json({
            message:'Algo salio mal'
        })
    }
}