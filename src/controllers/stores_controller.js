const mysqlConnection = require('../database/database');


const getAll = async (req,res) => {
     mysqlConnection.query("SELECT * FROM stores", (err, rows,fields) => {
        try {
            if (err) {
                console.log(err);
                res.status(404).msg('Resource doesnt exist')
            } else {
                res.status(200).json(rows)
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