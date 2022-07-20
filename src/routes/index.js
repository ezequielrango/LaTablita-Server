const express = require('express');
const router = express.Router();
const storesRouter = require('./stores_router');

router.use('/stores', storesRouter);


module.exports = router ;
