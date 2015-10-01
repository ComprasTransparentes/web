var ip = 'hacklab.errdd.com';
var port = '8000';
var host = ip+':'+port;
var maxitems = 10;

var items = {
            currentPage: 1,
            totalPages: Math.ceil(n_item/maxitems),
            onPageChanged: function(e,oldPage,newPage){
                var url = "http://"+host+"/licitacion/"+ele+"/?p_items="+newPage;
                
                $.getJSON( url, function( data ) {
                    console.log(data);
                    $('.itemdetalle').attr("style","display: none");
                    for(var b=0; b< data.items.length;b++){
                        $('#itemsdetalle').find("[code='"+b+"']").attr("style","display: block");
                        var it = (newPage-1)*maxitems+b+1
                        $('.col-xs-6').find("[iditem='"+b+"']").text("item "+it);
                        if(data.items[b].adjudicacion == null){
                       		$('.col-xs-6').find("[estadoitem='"+b+"']").text('no adjudicada');
                    	}else{
                        	$('.col-xs-6').find("[estadoitem='"+b+"']").text('adjudicada');}
                        $('.teapot').find("[cantidaditem='"+b+"']").text(data.items[b].cantidad);
                        $('.teapot').find("[unidaditem='"+b+"']").text(data.items[b].unidad);
                        $('.8cho').find("[nameitem='"+b+"']").text(data.items[b].nombre_producto);
                        $('.8cho').find("[desitem='"+b+"']").text(data.items[b].descripcion);
                        if(data.items[b].adjudicacion == null ){
                        	$('.panel').find("[ifitem='"+b+"']").attr("style","display: block");
                        	$('.panel').find("[elseitem='"+b+"']").attr("style","display: none");

                        }else{
                        	$('.panel').find("[ifitem='"+b+"']").attr("style","display: none");
                        	$('.panel').find("[elseitem='"+b+"']").attr("style","display: block");
                        	$('.collapsable-text').find("[hrefitem='"+b+"']").attr("href","/file?type=proveedor&code="+data.items[b].adjudicacion.proveedor.id);
                        	$('.collapsable-text').find("[hrefitem='"+b+"']").text(data.items[b].adjudicacion.proveedor.nombre);
                        	$('.panel-body').find("[rutitem='"+b+"']").text(data.items[b].adjudicacion.proveedor.rut);
                        	$('#bine').find("[cantitem='"+b+"']").text(data.items[b].adjudicacion.cantidad);
                        	$('.info-box').find("[cashitem='"+b+"']").text(data.items[b].adjudicacion.monto_unitario);
                        	var tot = data.items[b].adjudicacion.cantidad*data.items[b].adjudicacion.monto_unitario;
                        	$('.text-resp').find("[totalitem='"+b+"']").text(tot);
                        	$('.pull-right').find("[netoitem='"+b+"']").text(tot);                         	
                        }
                    }
                    
                });

            }
        }

$('#itempag').bootstrapPaginator(items);