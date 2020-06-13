const express = require('express');
const expres = require('express');
const router = expres.Router();
const path = require('path');

const db = require('../database');

//Al realizar un llamado a la url /Login se redireccionara a la pantalla index.hbs
router.get('/productos', (req, res)=>{
    res.render('layouts/productos');
});

router.get('/about', (req, res)=>{
    res.render('layouts/about');
});

router.get('/contactenos', (req, res)=>{
    res.render('layouts/contactenos');
});


router.get('/registro', (req, res)=>{
    res.render('layouts/registro');
});

router.get('/login', (req, res)=>{
    res.render('layouts/login');
});

module.exports = router;