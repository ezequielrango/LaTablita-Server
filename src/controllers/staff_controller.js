const mysqlConnection = require('../database/database');

const getAll = async (req,res) => {
    mysqlConnection.query("SELECT s.Name AS 'Nombre', p.Name AS 'Cargo'  FROM staff s LEFT JOIN position p ON s.position_id = p.id ;", (err, rows , fields) => {
        try {
            if (rows.length == 0) {
                res.status(404).json('Not Found');
            }else{
                res.status(200).json(rows);
            }
        } catch (err) {
            res.status(500).json('Internal Server Error')
        };
    })
};

const getById = async (req,res) => {
    const {id} = req.params;
    mysqlConnection.query("SELECT * FROM staff WHERE id= ?;", id, (err,rows,fields) => {
        try {
            if (err || rows.length === 0) {
                res.status(404).json('Not found');
            }else{
                res.status(200).json(rows);
            };
        } catch (err) {
            res.status(500).json('Internal Server Error')
        };
    });
};

const create = async (req,res) => {
    const {id,name, position_id,store_id} = req.body;
    mysqlConnection.query("CALL addOrEditStaff(?,?,?,?);",[id,name,position_id,store_id], (err, rows ,fields) => {
        try {
            if (!err) {
                res.status(201).json('Staff created');
            }else{
                res.status(400).json('Error create Staff');
            };
        } catch (err) {
            res.status(500).json('Internal Server Error');
        };
    });
};

const update = async (req,res) => {
    const {id} = req.params;
    const {name, position_id,store_id} = req.body;
    mysqlConnection.query('CALL addOrEditStaff(?,?,?,?);', [id,name, position_id,store_id], (err, rows, fields) => {
        try {
            if (err || !rows) {
                console.log(err);
                res.status(400).json('Error update Staff');
            }else{
                res.status(201).json('Update Staff succesfully');
            }
        } catch (err) {
            res.status(500).json('Internal Server Error');
        };
    });
};

const remove = async (req,res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM staff WHERE id= ?', id , (err, rows, fields) => {
        try {
            if (err) {
                res.status(400).json('Error staff delete');
            }else{
                res.status(201).json('Staff deleted');
            };
        } catch (err) {
            res.status(500).json('Internal Server Error');
        };
    });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};