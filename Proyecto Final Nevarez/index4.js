var data = null;

function primerPeticion(){
	var user= $("#txtusuario").val();
	var contra= $("#txtContraseña").val();		
var url= "http://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario=920&clave=12345678
";
url ;
$.ajax({
			url: url,
			dataType: "json",
			success:function(response){
if(response.respuesta == true){
					data = response;
					todosGrupos(data);

					alert("usuario valido")
    else{
					alert("usuario invalido")
				}
				console.log(response)
			}
		});
}

function todosGrupos(data){

var url= "http://itculiacan.edu.mx/dadm/apipaselista/data/obtienegrupos2.php?usuario=920&usuariovalida="+data.usuariovalida+"&periodoactual="+data.periodoactual
;
$.ajax({
			

			url: url,
			dataType: "json",
			success:function(response){
				console.log(response)
				var grupos = response.grupos;
				var gruposHtml = ""
				for (var i =  1; i < grupos.length; i++) {
				gruposHtml += "Grupos" Materia:"+ grupos[i].materia + "<button id ='grupo"+i+"'>Ver </button>"+ "<br>" 
				}	
				$("#grupos").html(gruposHtml);
			}
		});

}
var ingresaUsuario= function(tecla){
if(tecla.which==13){
primerPeticion();


}


}





$("#btnInicia").on("click",primerPeticion);