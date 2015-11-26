var ip = 'hacklab.errdd.com';
var port = '8000';
var host = ip+':'+port;
var maxitems = 10;

var licorg = {
            currentPage: 1,
            totalPages: Math.ceil(n_item/maxitems),
            onPageChanged: function(e,oldPage,newPage){
                var url = "http://"+host+"/organismo/"+ele+"/licitacion?pagina="+newPage;
                
                $.getJSON( url, function( data ) {
                    
                    $("[id=lici]").attr("style","visibility: hidden");
                    for(var b=0; b< data.licitaciones.length;b++){
                        $('#liclist').find("[code='"+b+"']").attr("style","visibility: visible");
                        $('[id=lici]').find("[nombrelic='"+b+"']").text(data.licitaciones[b].nombre);

                        var creacion;
                        var temp2 = new Date(data.licitaciones[b].fecha_creacion);
                        creacion = temp2.getDate()+'-'+temp2.getMonth()+'-'+temp2.getFullYear();

                        $('[id=lici]').find("[datelic='"+b+"']").text(creacion);

                        var estado;
                        if(data.licitaciones[b].estado==5){
                            estado = "Publicada";
                        }
                        else if(data.licitaciones[b].estado==6){
                            estado = "Cerrada";
                        }
                        else if(data.licitaciones[b].estado==7){
                            estado = "Desierta";
                        }
                        else if(data.licitaciones[b].estado==18){
                            estado = "Revocada";
                        }
                        else if(data.licitaciones[b].estado==19){
                            estado = "Suspendida";
                        }
                        else if(data.licitaciones[b].estado==8){
                            estado = "Adjudicada";
                        }
                        else{
                            estado = "Sin Estado"
                        }

                        $('[id=lici]').find("[estadolic='"+b+"']").text(estado);
                        $('#linklic').find("[linklic='"+b+"']").attr("href","/file?type=licitacion&code="+data.licitaciones[b].id);

                       

                    }
                    
                });

                 var num = newPage*maxitems;
                        if(num>n_item)
                            num = n_item;
                        $('#gat').text(num);

            }
        }

$('#licpag').bootstrapPaginator(licorg);

var licpro = {
            currentPage: 1,
            totalPages: Math.ceil(n_item/maxitems),
            onPageChanged: function(e,oldPage,newPage){
                var url = "http://"+host+"/proveedor/"+ele+"/licitacion?pagina="+newPage;
                
                $.getJSON( url, function( data ) {
                    
                    $("[id=lici]").attr("style","visibility: hidden");
                    for(var b=0; b< data.licitaciones.length;b++){
                        $('#liclist').find("[code='"+b+"']").attr("style","visibility: visible");
                        $('[id=lici]').find("[nombrelic='"+b+"']").text(data.licitaciones[b].nombre);

                        $('[id=lici]').find("[codelic='"+b+"']").text(data.licitaciones[b].codigo);

                        $('[id=lici]').find("[montoadjlic='"+b+"']").text(data.licitaciones[b].monto_adjudicado);

                        
                        $('[id=lici]').find("[montolic='"+b+"']").text(data.licitaciones[b].monto_total);
                        $('#linklic').find("[linklic='"+b+"']").attr("href","/file?type=licitacion&code="+data.licitaciones[b].id);

                       

                    }
                    
                });

                 var num = newPage*maxitems;
                        if(num>n_item)
                            num = n_item;
                        $('#gat').text(num);

            }
        }

$('#licpropag').bootstrapPaginator(licpro);