// const mysql = require('mysql');

module.exports = routes = function (app, con){

    // Iniciar sesión: Usuarios
    app.get('/usuarios', (req, res) => {
        let consulta = `SELECT * FROM USUARIOS WHERE nombreUsuario = "${req.query.nombreUsuario}" AND contrasena = "${req.query.contrasena}"`;
        con.query(consulta, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
};