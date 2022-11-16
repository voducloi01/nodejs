const express = require('express')
const router = express.Router();

const newController = require('../app/controllers/Newcontroller')

router.use('/' , newController.index)

module.exports = router ; 