/**
 * File: server.js
 * Description: Arquivo responsável pela rota index "/"
 * Athor: Thiago Vilarinho Lemes
 * contact: lemes_vilarinho@yahoo.com.br / contatothiagolemes@gmail.com
 * site: thiagolemes.rf.gd
 * Data: 07/04/2020
 * version: 1.0
 */

'use strict';

/** ================================================================= */

/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();

/** ================================================================= */

/**
 * Routes.
 */

/* GET home page. */
router.get('/', (req, res) => {
    res.status(200).json({ 
        Name: process.env.NAME,
        Description: process.env.DESCRIPTION,
        Version: process.env.VERSION,
        Author: process.env.AUTHOR,
        Site: process.env.SITE,
        Email: process.env.EMAIL,
        Facebook: process.env.FACEBOOK,
        Linkedin: process.env.LINKEDIN,
        Github: process.env.GITHUB,
    });
});
module.exports = router;

/** ================================================================= */