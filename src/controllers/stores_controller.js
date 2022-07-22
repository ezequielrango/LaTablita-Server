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
    const {id, name, city} = req.body;
    const query = "CALL addOrEditStore(?,?,?)"; // cada ? representa un dato que le vamos a pasar para insertar en la db 
    mysqlConnection.query(query,[id, name, city],( err, rows, fields) => {// la query del procedimiento y los valores del body que le pasamos
        try {
            if (!err) {
                const storeCreated = mysqlConnection.query('SELECT * FROM stores WHERE id = ?', id, async (err , rows, fields) => {
                    const data = await rows; 
                    res.status(200).json(data) 
                })
            }else {
                res.status(400).msg('Error creating resource')
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Internal Server Error')
        }
    }) 
    
};

module.exports = {
    getAll,
    getById,
    create
}