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
const { User, Formation } = require('../models');
var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/** ================================================================= */

/**
 * Routes.
 */

/* GET List Users */
router.get('/', async (req, res) => {
    await User.findAll({
        attributes: ['id', 'firstName', 'email', 'password'],
        include: [{
            model: Formation,
            as: 'formations',
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    }).then((listUsers) => {
        return res.status(200).json(listUsers)
    }).catch((err) => {
        return res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição! ' + err })
    })
});

/* GET By Id User */
router.get('/:id', async (req, res) => {
    await User.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Formation,
            as: 'formations',
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    }).then((user => {
        res.status(200).json(user)
    })).catch((err) => {
        return res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição! ' + err })
    })
});

/* Post User */
router.post('/', async (req, res) => {
    let user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        image: req.body.image,
        isAdmin: req.body.isAdmin,
    });

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* PUT By Id User */
router.put('/:id', async (req, res) => {
    let listUsers = await User.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            phone: req.body.phone,
            image: req.body.image,
            isAdmin: req.body.isAdmin,
        },
        { returning: true, where: { id: req.params.id } }
    );

    if (listUsers) {
        res.status(200).json(listUsers)
    } else {
        res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição!' })
    }
});

/* DELETE By Id User */
router.delete('/:id', async (req, res) => {

    let id = req.params.id
    await UserFormation.destroy({
        where: {
            userId: id
        }
    })
        .then(function (rowDeleted) {
            if (rowDeleted) {
                res.status(200).json({ success: true, message: 'Usuário deletado com sucesso!' })
                User.destroy(
                    {
                        where: {
                            id: id
                        }
                    }
                )
            }
        },
            function (err) {
                res.status(400).json({ success: false, message: 'Ocorreu um erro na requisição! ' + err })
            });
});

module.exports = router;

/** ================================================================= */