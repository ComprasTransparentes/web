var ip = 'hacklab.errdd.com';
var port = '8000';
var host = ip+':'+port;
var maxitems = 10;
var options1 = {
            currentPage: 1,
            totalPages: Math.ceil(n_lic/maxitems),
            onPageChanged: function(e,oldPage,newPage){
            	var url = "http://"+host+"/licitacion/?q="+ele+"&pagina="+newPage;
                
                $.getJSON( url, function( data ) {
                	console.log(data);
                    $('.search-result-item').attr("style","display: none");
					for(var b=0; b< data.licitaciones.length;b++){
                        $('#tipo1').find("[code='"+b+"']").attr("style","display: block");
	                	$('.search-result-item .collapsable-text').find("[namelinklic='"+b+"']").text(data.licitaciones[b].nombre);
                        $('.search-result-item .collapsable-text').find("[namelinklic='"+b+"']").attr("href","/file?type=licitacion&code="+data.licitaciones[b].codigo);
                        $('.search-result-item').find("[nameorglic='"+b+"']").text(data.licitaciones[b].organismo.nombre);
                        $('.search-result-item').find("[linkorglic='"+b+"']").attr("href","/file?type=organismo&code="+data.licitaciones[b].organismo.id);
                        $('.search-result-item').find("[deslic='"+b+"']").text(data.licitaciones[b].descripcion);
	                
                    }
                });

            }
        }

$('#pag1').bootstrapPaginator(options1);

var options3 = {
            currentPage: 1,
            totalPages: Math.ceil(n_org/10)
        }

$('#pag3').bootstrapPaginator(options3);

var options4 = {
            currentPage: 1,
            totalPages: Math.ceil(n_pro/10)
        }

$('#pag4').bootstrapPaginator(options4);