const express = require('express');
const router = express.Router();
const storesRouter = require('./stores_router');
const staffRouter = require('./staff_router');

router.use('/stores', storesRouter);
router.use('/staff', staffRouter);


module.exports = router ;
