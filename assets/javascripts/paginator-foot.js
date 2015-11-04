var ip = 'hacklab.errdd.com';
var port = '8000';
var host = ip+':'+port;
var maxitems = 10;
var options1 = {
            currentPage: 1,
            totalPages: Math.ceil(n_lic/maxitems),
            onPageChanged: function(e,oldPage,newPage){
            	//var url = "http://"+host+"/licitacion/?q="+ele+"&pagina="+newPage;
                var url = "http://"+host+'/licitacion?q='+ele+'&producto='+producto+'&estado='+estado+'&'+tipo_fecha+'='+fecha_creacioni+'|'+fecha_creacione+'&monto='+montoi+'|'+montoe+'&pagina='+newPage;
                //console.log(url);
                $.getJSON( url, function( data ) {
                	console.log(data);
                    $('#tipo1').find("[type='lic']").attr("style","display: none");
					for(var b=0; b< data.licitaciones.length;b++){
                        $('#tipo1').find("[code='"+b+"']").filter("[type='lic']").attr("style","display: block");
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
            totalPages: Math.ceil(n_org/maxitems),
            onPageChanged: function(e,oldPage,newPage){
                var url = "http://"+host+"/organismo/?q="+ele+"&pagina="+newPage;
                
                $.getJSON( url, function( data ) {
                    console.log(data);
                    $('#tipo3').find("[type='org']").attr("style","display: none");
                    for(var b=0; b< data.organismos.length;b++){
                        $('#tipo3').find("[code='"+b+"']").filter("[type='org']").attr("style","display: block");
                        $('.search-result-item .collapsable-text').find("[namelinkorg='"+b+"']").text(data.organismos[b].nombre);
                        $('.search-result-item .collapsable-text').find("[namelinkorg='"+b+"']").attr("href","/file?type=organismo&code="+data.organismos[b].codigo);
                        $('.search-result-item').find("[namecat='"+b+"']").text(data.organismos[b].categoria);                    
                    }
                });

            }
        }

$('#pag3').bootstrapPaginator(options3);

var options4 = {
            currentPage: 1,
            totalPages: Math.ceil(n_pro/maxitems),
            onPageChanged: function(e,oldPage,newPage){
                var url = "http://"+host+"/proveedor/?q="+ele+"&pagina="+newPage;
                
                $.getJSON( url, function( data ) {
                    console.log(data);
                    $('#tipo4').find("[type='pro']").attr("style","display: none");
                    for(var b=0; b< data.proveedores.length;b++){
                        $('#tipo4').find("[code='"+b+"']").filter("[type='pro']").attr("style","display: block");
                        $('.search-result-item .collapsable-text').find("[namelinkpro='"+b+"']").text(data.proveedores[b].nombre);
                        $('.search-result-item .collapsable-text').find("[namelinkorg='"+b+"']").attr("href","/file?type=proveedores&code="+data.proveedores[b].id);
                        $('.search-result-item').find("[rutpro='"+b+"']").text(data.proveedores[b].rut);                    
                    }
                });

            }
        }



