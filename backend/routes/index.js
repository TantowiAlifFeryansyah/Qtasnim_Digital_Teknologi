var express = require('express');
var router = express.Router();

const controller = require('../controller')

/* GET home page. */
router.get('/', controller.getSales)

/* Create. */
router.post('/create', controller.create)

/* Update. */
router.patch('/update/:id', controller.update)

module.exports = router;
