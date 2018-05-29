const $ = require('jquery');
const {BrowserWindow}= require('electron').remote
const app = require('electron').app
const path = require('path')
const url = require('url')


const ipc = require('electron').ipcRenderer
const botonPDF = document.getElementById('btnPDF');
botonPDF.addEventListener('click',function(event){
botonPDF.style.display = "none"
ipc.send('print-to-pdf');

let Informacion;

function inicia(){
var grupos = null;
var resultado = "";	
var clave_materia = "";
var nombre_materia= "";
var clave_grupo= "";
var nombre_usuario= "";
var cantidad_alumnos = "";
var hora_lunes="";
var hora_martes="";
var hora_miercoles="";
var hora_jueves="";
var hora_viernes="";
var url= "http://itculiacan.edu.mx/dadm/apipaselista/data/obtienegrupos2.php?usuario=920&usuariovalida="+data.usuariovalida+"&periodoactual="+data.periodoactual
;
$.ajax({
			
			url: url,
			dataType: "json",
			success:function(response){
				console.log(response)
				 grupos=response.grupos;
				var gruposHtml = ""
				for (var i =  1; i < grupos.length; i++) {
				gruposHtml += "Materia:"+ grupos[i].materia +"Clave de la  Materia:"+grupos[i].clavemateria+"Grupo:"+grupos[i].grupo+"Hora Lunes:"+grupos[i].horalunes+"Hora Martes:"+grupos[i].horamartes++"Hora Miercoles:"+grupos[i].horamiercoles+"Hora Juves:"+grupos[i].horajueves++"Hora Viernes:"+grupos[i].horaviernes"<button id ='Monstrar Alumnos de esta materia'>Ver </button>"+ "<br>" 
				}	
				$("#Gruposdemaestros").append(gruposHtml);
			}
		});

}













function Muestraalumnos(){

function Alumnos(){

var url= "http://itculiacan.edu.mx/dadm/apipaselista/data/obtienealumnos2.php?usuario=920&usuariovalida= 49nc8Eznl4dnU&periodoactual=2181&materia=AEB1055&grupo=8B"

$.ajax({
			
			url: url,
			dataType: "json",
			success:function(response){
				console.log(response)
				var alumnos = response.alumnos;
				
				for (var i =  1; i < alumnos.length; i++) {
				alumnosHtml += "Numero de Control:"+ alumnos[i].ncontrol +"Apellido Parterno:"+alumnos[i].apellidopaterno+"Apellido Materno:"+alumnos[i].apellidomaterno++"Nombre:"+ alumnos[i].nombre"<button id ='Asistencia"+i+"'>Asistencia</button>"+ "<br>" 
				}	
				$("#CantidadAlumnosID").append(gruposHtml);
			}
		});



muestracantidad = new BrowserWindow({width:320,height:425})
muestracantidad.loadURL(url.format({
	pathname: path.join(__dirname,'index3.html'),
	protocol: 'file',
	slashes: true
	
}));

muestracantidad.show();

}








}

function Asistencia(){

muestracantidad = new BrowserWindow({width:120,height:125})
muestracantidad.loadURL(url.format({
	pathname: path.join(__dirname,'Asistencia.html'),
	protocol: 'file',
	slashes: true
	
}));


$.ajax({
			 
			url: "http://itculiacan.edu.mx/dadm/apipaselista/data/asignaincidencia.php?usuario=920&usuariovalida=49nc8Eznl4dnU&periodoactual=2181&materia=AEB1055&grupo=8B&ncontrol=12170713&incidencia="+require('electron').remote.getGlobal('ASISTENCIA').incidencia,
type: "GET",
			dataType: "json",
			success:function(response){
				console.log(response)
			
				
			}
		});


}

$("body").on("click","li > button",Muestraalumnos);
inicia();

$("body").on("click","li > button",Asistencia);
inicia();

