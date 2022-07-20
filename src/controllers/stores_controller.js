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


module.exports = {
    getAll
}