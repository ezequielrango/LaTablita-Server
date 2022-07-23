const mysqlConnection = require('../database/database');


const getAll = async (req, res) => {
    mysqlConnection.query("SELECT * FROM stores", async (err, rows, fields) => {
        try {
            if (!rows) {
                console.log(err);
                res.status(404).msg('Resource doesnt exist')
            } else {
                const data = await rows;
                res.status(200).json(data)
            };
        } catch (err) {
            console.log(err);
            res.status(500).json('Internal Server Error')
        }
    });
};

const getById = async (req, res) => {
    const {id} = req.params;
    mysqlConnection.query("SELECT * FROM stores WHERE id= ?",id, async (err, rows, fields) => {
        try {
            if (!rows) {
                console.log(err);
                res.status(404).msg('Resource doesnt exist')
            } else {
                const data = await rows;
                res.status(200).json(data)
            };
        } catch (err) {
            console.log(err);
            res.status(500).json('Internal Server Error')
        }
    });
};


const create = async (req,res) => {
    try {
        const {id, name, city} = req.body;
        const query = "CALL addOrEditStore(?,?,?)"; // cada ? representa un dato que le vamos a pasar para insertar en la db 
        
        mysqlConnection.query(query,[id, name, city],( err, rows, fields) => {// la query del procedimiento y los valores del body que le pasamos      
                if (err) {
                    res.status(400).msg('Error creating resource')
                }else{
                    const dataId = rows[0][0].id;
                    res.status(201).json(`La tienda(${dataId}) ${name} de la ciudad de ${city} ha sido agregada con éxito.`);
                }   
            }) 
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
};

const update = async (req,res) => {
    try {
        const {id} = req.params; 
        const {name, city} = req.body;
        const query = "CALL addOrEditStore(?,?,?)"; // cada ? representa un dato que le vamos a pasar para insertar en la db 
        mysqlConnection.query(query,[id, name, city],( err, rows, fields) => {// la query del procedimiento y los valores del body que le pasamos      
                if (err) {
                    res.status(400).json('Error creating resource')
                }else{
                    res.status(201).json(`El recurso ha sido actualizado con éxito.`);
                }   
            }) 
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update
    
}