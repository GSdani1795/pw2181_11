var inicioApp = function(){
	var Aceptar = function(){
event.preventDefault();
var usuario=$("#txtUsuario").val();
var clave =$("#txtClave").val();
var parametros="opc = validaentrada"+"$usuario="+usuario+"$clave"+clave+"$id="+math.random();




&.ajax({
cache:false,
type: "POST",
datatype: "json",
url: "php/validaentrada.php",
data: parametros,
success: function(response){
if (response.respuesta == true) {
alert("Bienvenido");


}else{


error:function(xhr,ajaxOptions,thrownError){



	
}


}
},
error:function(xhr,ajaxOptions,thrownError){



}
});

	}
$("#btnAceptar").on("click",Aceptar);
}
$(document).on("ready",inicioApp);