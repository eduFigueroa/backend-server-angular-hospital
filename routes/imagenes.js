// Requires

var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
// inicializar variables
var app = express();


app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    var path = `./uploads/${tipo}/${img}`;

    fs.exists(path, existe => {

        if (!existe) { // sino existe la imagen se mandara una por defecto
            path = './assets/no-img.jpg';
        }
        res.sendfile(path);
    });

    // res.status(200).json({
    //     ok: true,
    //     mensaje: 'Peticion realizada correctamente'
    // });
});


module.exports = app;