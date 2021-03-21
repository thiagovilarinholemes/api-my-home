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
const app = express();
require('dotenv/config');
const api = process.env.API_URL;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler')

/** ================================================================= */


/**
 * Middlewares
 */
app.use(cors());
app.options('*', cors()); 
app.use(morgan( `:method -- :status  -- :url`));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public')); 
app.use(authJwt());
app.use(errorHandler);

/** ================================================================= */

/**
 * Constants
 */
const port = process.env.PORT || process.env.PORT_LISTEM;
const indexRouter = require('./controllers/indexRouter');
const userRouter = require('./controllers/userRouter');
const typeFormRouter = require('./controllers/typeformationRouter');
const formationRouter = require('./controllers/formationRouter');
const userformationRouter = require('./controllers/userformationRouter');

/** ================================================================= */

/**
 * Routes
 */
app.use(`${api}/users`, userRouter);
app.use(`${api}/typForm`, typeFormRouter);
app.use(`${api}/formation`, formationRouter);
app.use(`${api}/userformation`, userformationRouter);
app.use(`${api}`, indexRouter);

app.use(function(req, res, next) {
    res.send({
        message: "Está rota não existe!!!"
    })
});

/** ================================================================= */

/**
 * Listem
 */
app.listen(port, () => {
    console.log(`Running port ${port}... \\(^_^)/`);
})
