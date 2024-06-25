var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/CATEGORY1')

/*CREATE CATEGORY*/
router.post('/CreateCategory',CONTROL.CreateCategory);

/*GET SINGLE CATEGORY*/
router.get('/ReadCategory/:id',CONTROL.ReadCategory);

module.exports = router;
