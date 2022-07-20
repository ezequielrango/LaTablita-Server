const express = require('express');
const router = express.Router();
const {getAll} = require('../controllers/stores_controller');

router.get('/',getAll);



module.exports = router ;