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
const { TypeFormation } = require('../models');
var express = require('express');
var router = express.Router();

/** ================================================================= */

/**
 * Routes.
 */

/* GET List Users */
router.get('/', async (req, res) => {
    let listFormation = await TypeFormation.findAll({
        attributes: ['id', 'name', 'description', 'tag'],
    });

    if (listFormation) {
        res.status(200).json(listFormation)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* GET By Id User */
router.get('/:id', async (req, res) => {
    let formation = await TypeFormation.findOne({
        where: {
            id: req.params.id
        },
    });

    if (formation) {
        res.status(200).json(formation)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* Post User */
router.post('/', async (req, res) => {
    let typeformation = await TypeFormation.create({
        name: req.body.name,
        description: req.body.description,
        tag: req.body.tag,
    });

    if (typeformation) {
        res.status(200).json(typeformation)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* PUT By Id User */
router.put('/:id', async (req, res) => {
    let typeformation = await TypeFormation.update(
        {
            name: req.body.name,
            description: req.body.description,
            tag: req.body.tag,
        },
        { returning: true, where: { id: req.params.id } }
    );

    if (typeformation) {
        res.status(200).json(typeformation)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* DELETE By Id User */
router.delete('/:id', async (req, res) => {
    
    let id = req.params.id
    await TypeFormation.destroy({
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