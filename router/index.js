const express = require('express');
const router = express.Router();
const con = require('../controllers/myControllers')

router.get('/', con.defaultCon);

router.get('/about', con.aboutCon);

router.get('/service',con.serviceCon);

router.get('/contact',con.contactCon);

module.exports = router;
    