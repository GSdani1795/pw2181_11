var inicioApp = function(){
	var Aceptar = function(){
		var usuario=$("#txtUsuario").val();
		var clave=$("#txtClave").val();
		var parametros="opc=validaentrada"+"&usuario="+usuario+"&clave="+clave+"&aleatorio="+Math.random();
		if (usuario != "") {
$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					//alert("Bienvenido");
					$("#secInicio").hide("slow");
					$("#frmUsuarios").show("slow");

					$("#txtNombreUsuario").focus();
				}else{
					alert("usuario o clave incorrecta(s)");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});


	}
	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#frmUsuarios").hide();






			
		}
		
}
$(document).ready(inicioApp);

$(document).ready(inicioApp);