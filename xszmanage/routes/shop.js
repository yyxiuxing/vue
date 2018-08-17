var express = require('express');
var router = express.Router();
var admission = require('./shop/admission');
var login = require('./shop/check');
/* GET users listing. */

router.use('/admission',admission);
router.use('/login',login)

module.exports = router;
