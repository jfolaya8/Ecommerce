const express = require('express');
const router = express.Router();

const db = require('../database');

router.post('/links/auth',(req, res)=>{
    res.render('layouts/Usuarios');
});

const Principal = '/Principal';
const usuarios = '/links/Usuarios';
const productos = '/links/Productos';
const Solicitudes = '/links/Solicitudes';

router.get('', async(req, res) => {
    res.render('layouts/index');
})

router.get('/index', async(req, res) => {
    res.render('layouts/index');
})


//Al realizar el llamado a la url validateuser se valida credenciales de inicio de sesión
router.post('/validateuser', async(req, res) =>{

    //Variable con los datos enviados desde el login
    const {email, password} = req.body;

    //Validamos que los datos no vengan vacios
    if (email.length || password.length !== 0) {

        //Realizamos consulta con las credenciales del usuario 
        const emailvalidate = await db.query(`SELECT * FROM usuario WHERE UsuCorreo_Electronico = '${email}' AND UsuContrasena ='${password}'`);
        //Validamos si las credenciales son correctas
        if (emailvalidate.length > 0) {
            // const modulos = await db.query(`select ModNombre_Modulo from  roles inner join modulos on  roles.RolidModulos = modulos.idModulos
            // where RolNombre_Rol = (select roles.RolNombre_Rol from  usuario
            // inner join roles
            // on  usuario.UsuId_Rol = roles.idRoles
            // where UsuCorreo_Electronico = '${email}');`);

            // //Si es correcto se direcciona al usuario a la pantalla
            // console.log(modulos);             
            res.redirect(Principal);
        }else{
            //Si no son correctas se envia alerta
            var textalerta = "Usuario o contraseña incorrecta";
            var alerta = "alerta_visible";
            //Redireccionamos a la url y enviamos mensaje de alerta y nombre de la clase css
            res.render('layouts/index', {textalerta, alerta});
    
        }        
    } else {
        //Si las variables son vacias se direcciona a la pantalla de login
        var textalerta = "Los datos son obligatorios";
        var alerta = "alerta_visible";
        //Redireccionamos a la url y enviamos mensaje de alerta y nombre de la clase css
        res.render('layouts/index', {textalerta, alerta});        
    }

});





module.exports = router;
