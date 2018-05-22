<?php
include 'conexiones.php';
function valida(){
$usuario = $_POST["usuario"];
$clave   = md5($_POST["clave"]);
//Conectarnos al server de BD
$con=conecta();
$consulta= "select * from usuarios where usuario='".$usuario."' and clave='".$clave."' limit 1";
$reConsulta = mysql_query($con,$consulta);
if (mysql_num_rows($reConsulta)> 0){
 $respuesta = true;
}

$salidaJSON= array('respuesta' => , $respuesta);
print json_encode($salidaJSON);

}
$opc + $_POST["opc"];
switch ($opc){
case 'validaentrada':
valida();
break;
default:
# code...
break;

default:

#code
break;

}


