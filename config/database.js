/**
 * File: database.js
 * Description: Arquivo responsável por conectar e disconectar do Banco de Dados
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
var Sequelize = require('sequelize');
var database = null;
require('dotenv/config');
var config = require('./config.json')

/** ================================================================= */

/** 
 * Function connect database
 */
async function connect() {
    return database = await new Sequelize(
        process.env.DB_DATABASE || config.database,
        process.env.DB_USER || config.username,
        process.env.DB_PASSWORD || config.passowrd, {
            host: process.env.DB_HOST || config.host,
            dialect: process.env.DB_DIALECT || config.dialect
        }
    );
}
// Connection simple
// async function connect() { 
//     return database = await new Sequelize('postgres://postgres:123@localhost:5432/my_home')
// }

/** ================================================================= */

/** 
 * Function connect database
 */
async function disconnect() {
    const databaseClose = await database.close();
}

/** ================================================================= */

/** 
 * Function test connection
 * Test Sequelize
 */
async function testConnection() {
    var test = await database.authenticate()
        .then(function() {
            console.log('Conexão com o MySQL foi estabelecida com sucesso');
        })
        .catch(function(err) {
            console.log('Não foi possível se conectar com o banco de dados MySql');
        })
        .done();
}

/** ================================================================= */

/**
 * Modules exposts
 */
module.exports = { connect, disconnect, testEnvironment: 'node' }

/** ================================================================= */