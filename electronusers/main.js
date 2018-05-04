const app = require('electron').app;

const BrowserWindow= require('electron').BrowserWindow;
const path = require('path');
const url = require('url');

let PantallaPrincipal;

function  muestraPantallaPrincipal() {
	PantallaPrincipal = new BrowserWindow({width:620,height:825});
	//Le damos contenido a esa pantalla.
	PantallaPrincipal.loadURL(url.format({ pathname:path.join(__dirname,"index.html"),protocol:"file",slashes:true  }));
	PantallaPrincipal.
	PantallaPrincipal.show();

}
app.on('ready',muestraPantallaPrincipal);