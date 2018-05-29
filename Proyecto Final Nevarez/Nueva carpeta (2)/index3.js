const $ = require('jquery')

var nombre=require('electron').remote.getGlobal('index3.js').cantidad_alumnos;
$("#CantidadAlumnosID").html(cantidad_alumnos);
