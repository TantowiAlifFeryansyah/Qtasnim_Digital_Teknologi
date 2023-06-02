var express = require('express');
var router = express.Router();

const controller = require('../controller')

/* GET home page. */
router.get('/', controller.getSales)

/* Create. */
router.post('/create', controller.create)

/* Update. */
router.patch('/update/:id', controller.update)

/* Delete. */
router.delete('/delete/:id', controller.delete)

module.exports = router;
