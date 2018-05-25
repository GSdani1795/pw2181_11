<?php
include 'conexiones.php';

function buscausuario(){
	$respuesta = false;
	$usuario=$_POST["usuario"];
	$clave=md5($_POST["clave"]);
	// Conectarnos al servidor de BD.
	$con=conecta();
	$consulta="select * from usuarios where usuario='".$usuario."' and clave='".$clave."' limit 1";

	$resConsulta=mysqli_query($con,$consulta);
	$nombre ="";
	$clave  ="";

i

	if(mysqli_num_rows($resConsulta) > 0){
		$respuesta = true;
		while ($regConsulta = mysqli_fetch_array($resConsulta)) {
		$nombre =  utf8_decode($regConsulta["nombre"]);
			$clave = $regConsulta["clave"];

		}
	}
	$salidaJSON = array('respuesta' => $respuesta,'nombre' => $nombre,'clave' => $clave,'nombre' => $nombre,'clave'=> $consulta;
//var_dump($salidaJSON);
	print json_encode($salidaJSON);

	if (usuario != "") {
$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/buscausuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					//alert("Bienvenido");
					$("#txtNombre").val(response.nombre);
					$("txtClaveUsuario").val(response.clave);

				}else{

					$("#txtNombre").focus();
					$("#txtNombre").val("");
					$("#txtClaveUsuario").val("");


				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});


	}

}
var teclaNombreUsuario = function(tecla){
if(tecla.which == 13 ){ //enter
	buscausuario();



}



}	
$("#btnAceptar").on("click"Aceptar);
$("#txtNombreUsuario").on("keypress",teclaNombreUsuario)
$("#btnGuardar").on("click",Guardar);
$("#frmUsuarios").hide();


	$opc=$_POST["opc"];
	switch ($opc) {
		case 'buscausuario':		
		buscausuario();
			
			break;
		
		default:
			# code...
			break;
	}
?>