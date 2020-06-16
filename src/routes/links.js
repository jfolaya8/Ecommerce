const express = require('express');
const expres = require('express');
const router = expres.Router();
const path = require('path');

const db = require('../database');
const helpers = require('../public/lib/helpers');

router.get('', async(req, res) => {
    res.render('layouts/index');
})

router.get('/index', async(req, res) => {
    var nameUser  = helpers.localStorage();
    console.log(nameUser); 
    res.render('layouts/index', {nameUser});
})

//Al realizar un llamado a la url /Login se redireccionara a la pantalla index.hbs
router.get('/productos', (req, res)=>{
    var nameUser  = helpers.localStorage();
    console.log(nameUser); 
    res.render('layouts/productos', {nameUser});
    
});

router.get('/about', (req, res)=>{
    var nameUser  = helpers.localStorage();
    console.log(nameUser);   
    res.render('layouts/about', {nameUser});

});

router.get('/contactenos', (req, res)=>{
    var nameUser  = helpers.localStorage();
    console.log(nameUser);      
    res.render('layouts/contactenos', {nameUser});
});

router.get('/perfil', (req, res) =>{
    var nameUser  = helpers.localStorage();
    console.log(nameUser);      
    res.render('layouts/perfil', {nameUser});
})


router.get('/registro', (req, res)=>{
    res.render('layouts/registro');
});

router.get('/login', (req, res)=>{
    res.render('layouts/login');
});


module.exports = router;