
const {app,BrowserWindow} = require('electron');
const path = require('path'); 
const url = require('url'); 

const electron = require('electron');

const fs = require('fs');

const os = require('os');

const ipc = electron.ipcMain;

const shell = electron.shell;
const $ = require('jquery');



let pantallaPrincipal;




 global.ASISTENCIA = {

incidencia:''

 }

function muestraPantallaPrincipal(){

pantallaPrincipal = new BrowserWindow({width:320,height:425})
pantallaPrincipal.loadURL(url.format({
	pathname: path.join(__dirname,'index.html'),
	protocol: 'file',
	slashes: true
	
}))

pantallaPrincipal.show();
}
app.on('ready',muestraPantallaPrincipal);












