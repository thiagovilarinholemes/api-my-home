/**
 * File: server.js
 * Description: Arquivo responsável por inicializar a aplicação
 * Athor: Thiago Vilarinho Lemes
 * Contact: lemes_vilarinho@yahoo.com.br / contatothiagolemes@gmail.com
 * site: thiagolemes.tech
 * Data: 19/03/2021
 * version: 1.0
 */

'use strict';

/** ================================================================= */

/**
 * Module dependencies.
 */
const express = require('express');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

/** ================================================================= */

/**
 * Constants
 */
const app = express();
const router = express.Router();
const port = process.env.PORT || process.env.PORT_LISTEM;
/** ================================================================= */

/**
 * Middlewares
 */
app.use(cors());
app.options('*', cors()) 
app.use(bodyParser.json());

/** ================================================================= */

/**
 * Routes
 */
app.get('/', (req, res, next) =>{
    res.status(200).json({
        Name: process.env.NAME,
        Description: process.env.DESCRIPTION,
        Version: process.env.VERSION,
        Author: process.env.AUTHOR,
        Site: process.env.SITE,
        Email: process.env.EMAIL
    });
});

/** ================================================================= */

/**
 * Listem
 */
app.listen(port, () => {
    console.log(`Running port ${port}... \\(^_^)/`);
})
