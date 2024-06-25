var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/PUZZLE1')

/*CREATE PUZZLE*/
router.post('/CreatePuzzle',CONTROL.CreatePuzzle);

/*GET SINGLE PUZZLE*/
router.get('/ReadPuzzle/:id',CONTROL.ReadPuzzle);

/*UPDATE PUZZLE*/
router.patch('/UpdatePuzzle/:id',CONTROL.UpdatePuzzle);

/*DELETE PUZZLE*/
router.delete('/DeletePuzzle/:id',CONTROL.DeletePuzzle);

module.exports = router;