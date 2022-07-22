const express = require('express');
const router = express.Router();
const {getAll,getById,create} = require('../controllers/stores_controller');

router.get('/',getAll);
router.get('/:id',getById);
router.post('/',create);



module.exports = router ;