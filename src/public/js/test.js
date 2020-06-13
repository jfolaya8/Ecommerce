
let editUser = function (idUsuario){

    let identificacion = document.getElementById( 'usuIden' + idUsuario ).textContent,
        nombreUser = document.getElementById( 'usuNombre' + idUsuario ).textContent,
        rolUser = document.getElementById( 'usuRol' + idUsuario ).attributes[1].nodeValue,
        cargoUser = document.getElementById( 'usuCargo' + idUsuario ).textContent,
        correoUser = document.getElementById( 'usuCorreo' + idUsuario ).textContent;
    

    document.getElementById( 'idUser' ).value = idUsuario;
    document.getElementById( 'ccUser' ).value = identificacion;
    document.getElementById( 'nombreUser' ).value = nombreUser;
    document.getElementById( 'listRol' ).value = rolUser;
    document.getElementById( 'cargoUser' ).value = cargoUser;
    document.getElementById( 'correoUser' ).value = correoUser;


    $('#editarusuario').modal('show');        
}