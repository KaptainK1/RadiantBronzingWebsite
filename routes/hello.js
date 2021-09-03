const express = require('express');
const router = express.Router();
const hello = require("../controllers/test");

router.get('/', hello.test);


module.exports = router;