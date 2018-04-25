var marvel = function () {
	var Buscar = function () {
		var personaje = $("txtPersonaje").val();
		var url = 




		var cantidadComics =0;
		var comics = "";
		url = url + personaje;
		$.ajax({ url: url,
        datatype: "json",success:function(response){
        	if (response.code == 200) {
$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);


        	}


        }
		})
	}
	$("btnBuscar").on("click",Buscar);
}
$(document).ready(marvel);