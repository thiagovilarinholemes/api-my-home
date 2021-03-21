/**
 * Athor: Thiago Vilarinho Lemes
 * contact: lemes_vilarinho@yahoo.com.br / contatothiagolemes@gmail.com
 * site: thiagolemes.rf.gd
 * Data: 21/03/2020
 * version: 1.0
 */

'use strict';

/** ================================================================= */

/**
 * Module dependencies.
 */
const { UserFormation } = require('../models');
var express = require('express');
var router = express.Router();

/** ================================================================= */

/**
 * Routes.
 */

/* GET List User Formation */
router.get('/', async (req, res) => {
    let listUserFormation = await UserFormation.findAll({
        attributes: ['id', 'userId', 'formationId'],
    });

    if (listUserFormation) {
        res.status(200).json(listUserFormation)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* GET By Id User */
router.get('/:id', async (req, res) => {
    let userFormation = await UserFormation.findOne({
        attributes: ['id', 'userId', 'formationId'],
        where: {
            id: req.params.id
        }, 
    });

    if (userFormation) {
        res.status(200).json(userFormation)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* Post User */
router.post('/', async (req, res) => {
    let userFormation = await UserFormation.create({
        userId: req.body.userId,
        formationId: req.body.formationId
    });

    if (userFormation) {
        res.status(200).json(userFormation)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* PUT By Id User */
router.put('/:id', async (req, res) => {
    let userFormation = await UserFormation.update(
        {
            userId: req.body.userId,
            formationId: req.body.formationId
        },
        { returning: true, where: { id: req.params.id } }
    )
    
    if (userFormation) {
        res.status(200).json(userFormation)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* DELETE By Id User */
router.delete('/:id', async (req, res) => {
    
    let id = req.params.id
    await UserFormation.destroy({
        where: {
            id: id
        }
    })
    .then(function (rowDeleted) { 
        if (rowDeleted === 1) {
            res.status(200).json({success: true, message: 'Tipo de formação deletado com sucesso!'})
        }
    },
        function (err) {
            res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição! ' + err})
    });
});

module.exports = router;

/** ================================================================= */