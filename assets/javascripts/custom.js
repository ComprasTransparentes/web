//paste this code under head tag or in a seperate js file.
// Wait for window load
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;


});


function checkOverflow(el)
{
   var curOverflow = el.style.overflow;
   if ( !curOverflow || curOverflow === "visible" )
      el.style.overflow = "hidden";

   var isOverflowing = el.clientWidth < el.scrollWidth;

   el.style.overflow = curOverflow;

   return isOverflowing;
};

function numberPoint(num){
	var numbers = [];
	while(1){
		if(num==0){
			break;
		}
		numbers.push(num%1000);
		num = (num-num%1000)/1000;
	}
	var ret = "";

	for(var k=numbers.length-1;k>=0;k--){
		ret = ret.concat(numbers[k]);
		if(k!=0){
			ret = ret.concat(".");
		}
	}
	console.log(ret);
	return ret;
};

function isRut(element){

	if(element.indexOf("-")!=-1 && element.indexOf(".")==-1){

		var rut = element.split("-");
		var num = numberPoint(rut[0]);
		return num.concat("-",rut[1]);

	}
	else{
		return element;
	}
};



$(document).ready(function() {

	String.prototype.formatNumber = function (c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    Number.prototype.formatNumber = function (c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

	var notime = { 
		format: 'DD/MM/YYYY',
		minDate: '01/01/2013',
		maxDate: moment()
	};

	$('#picker1').datetimepicker(notime);
	$('#picker2').datetimepicker(notime);
	$('#picker3').datetimepicker(notime);
	$('#picker4').datetimepicker(notime);
	$('#picker5').datetimepicker(notime);
	$('#picker6').datetimepicker(notime);
	$('#picker7').datetimepicker(notime);
	$('#picker8').datetimepicker(notime);
	$('#picker9').datetimepicker(notime);
	$('#picker10').datetimepicker(notime);

	/**
	 	$('.numformat').each( function() {

		$(this).text($(this).text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));

		});
	 */
	
	
	$('.numformat').each( function() {
		$(this).text($(this).text().formatNumber(0,",", "."));

	});


	// Unable spinner on input[type="number"]

	// $(":input[type=number]").on('mousewheel', function(e){
	//     e.preventDefault();
	// });

	//checkOverflow($(".long-text"));

	var col = $(".long-text");
	for(var i=0; i<col.length; i++) {
		console.log(i);
		if(!checkOverflow(col[i])) {
			$(col[i]).siblings('.more-text').toggleClass('hidden');
		}
	}

	$('.more-text').click(function(){
		$(this).closest('.collapsable-text').toggleClass('kitten');
	});

	$('.ho-btn').click(function(){
		$('.ho').toggleClass('show');
		$('.lower-searchbar').toggleClass('hidden');
	})

	$('.bo-btn').click(function(){
		$(this).closest('.panel-footer').siblings('.bo').slideToggle();
	})

	$('#addrule').click(function(){
		$('.no-filters').toggleClass('hidden');
		$('.cosa-temporal').toggleClass('show');
	})

	$('.clickable-table tbody tr').click(function(){
		$(this).closest('tbody').find('tr').removeClass('active');
		$(this).toggleClass('active');
	})

	// Scroll to top
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


    // Start Carousel
    $('.carousel').carousel({
  		interval: false
	});

	// $('.selector2-container').on( 'click', function(){
	// 	console.log("gatito");
	// });


	// Select form check thingy 

	$('#submit_compare').on('click', function(){
		$('.comparator-results').removeClass('hidden');
		$('.explanation').addClass('hidden');

		// Paste title from option selected to paragragh
		$('#ministerio_option_1').text($('#add_min1 option:selected').text());
		$('#ministerio_option_2').text($('#add_min2 option:selected').text());
		$('#item_option').text($('#add_item option:selected').text());
	});


	/* Validación de Etapa 1 y Etapa 2 del comparador */

	var checkA = false;
	var checkB = false;
	var checkC = false;
	
	$( '#firststep .btn-next' ).attr('disabled', true);
	$( '#secondstep .btn-next' ).attr('disabled', true);

	$( '.min-1' ).on( 'change', function() {
		checkA = true;
		if(checkB) {
			$( '#firststep .btn-next' ).removeClass('disabled');
			$( '#firststep .btn-next' ).attr('disabled', false);
		}
	});

	$( '.min-2' ).on( 'change', function() {
		checkB = true;
		if( checkA) {
			$( '#firststep .btn-next' ).removeClass('disabled');
			$( '#firststep .btn-next' ).attr('disabled', false);
		}
	});

	$( '.cat-step-2' ).on( 'change', function() {
		$( '#secondstep .btn-next' ).removeClass('disabled');
		$( '#secondstep .btn-next' ).attr('disabled', false);
	});	

	/* Fin */


	$('.min-selector').on('change', function() {
		$(this).closest('.min-parent')
				.siblings('.min-parent')
				.find('option[value=' + this.value + ']')
        		.attr('disabled', true)
        		.siblings().removeAttr('disabled');;
	})

	

	$('.dateselector').on('change', function() {

		var option = $($('.dateselector option:selected')).val();
		var fecha = "#fecha";

		if( option == "fechastodas") {
			$("#fechacreacion").addClass('invisible');
			$("#fechaapertura").addClass('invisible');
			$("#fechacierre").addClass('invisible');
			$("#fechaadjudicacion").addClass('invisible');
			console.log("Malilla");
		}

		$( fecha + option).toggleClass('invisible');

	});

	$('#firststep .btn-next').on('click', function(){
		$(this).closest('.comparator-step').addClass('hidden');
		$(this).closest('.comparator-step').siblings('.comparator-step').removeClass('hidden');
	});

	$('#secondstep .btn-prev').on('click', function(){
		$(this).closest('.comparator-step').addClass('hidden');
		$(this).closest('.comparator-step').siblings('.comparator-step').removeClass('hidden');
	});

	$('#secondstep .btn-next').on('click', function(){
		$(this).closest('.comparator-step').addClass('hidden');
		$(this).closest('.comparator-step').siblings('.comparator').removeClass('hidden');
	});


	//===========================//
	//==== BUSCADOR AVANZADO ====//
	//===========================//

	$('.btn-add-filter').on('click', function(){
		$(this).toggleClass('active').closest('.input-group').toggleClass('border-thingy').closest('.col-sm-12').siblings('.col-sm-12').find('.advanced-filters-container').toggleClass('hidden');		
	});

	// elementos = {
	// 	add_select: ( $('<div class="filter-module follow-up"><select class="selector flat standard full-width" placeholder="Selecciona una categoría"><option></option><option>1</option><option>2</option></select></div>') ),
	// 	add_plata: ( $('<p class="mockup">elPerrito</p>') ),
	// 	add_picker: ( $('<p class="mockup">elManolo</p>') )
	// }

	// $('#lic_adv_fil').on('change', function(){
	// 	$('.mockup').remove();
	// 	var option = $($('#lic_adv_fil option:selected')).val();
	// 	$(this).closest('.filter-module').after(elementos[option]);
	// });
	
	var loadoption = $($('#lookfor option:selected')).val();
	var AliasBusqueda = "licitacion";
	
	$('#filters_search_'+loadoption).toggleClass('hidden');
	$('#filters_list_'+loadoption).removeClass('hidden');

	$('#lookfor').on('change', function(){
		
		$('.filters-container-panel').addClass('hidden');
		$('.filters-list-container').addClass('hidden');
		

		switch(parseInt($($('#lookfor option:selected')).val(), 10 ))
		{
			case 0:
				break;
			case 1:
				AliasBusqueda = "licitacion";
				
				break;
			case 2:
				AliasBusqueda = "organismo";
				
				
				break;
			case 3:
				AliasBusqueda = "proveedor";
				
				
				break;
		}

		loadoption = AliasBusqueda;
		
		$('#filters_search_'+loadoption).removeClass('hidden');
		$('#filters_list_'+loadoption).removeClass('hidden');
	});

	// Tipos de elementos en option del select de filtros de LICITACIONES
	elementosLicitacion = {
		add_select: "otro_select",
		add_plata: "youtubemoney",
		add_picker: "fechapicker"
	}

	// Remueve y agrega el tipo de elemento acorde según lo seleccionado en el select de filtros de licitación
	$('#lic_adv_fil').on('change', function(){
		$('.follow-up').addClass('hidden');
		var option = $($('#lic_adv_fil option:selected')).val();
		$(this).closest('.filter-module').siblings("#"+elementosLicitacion[option]).removeClass('hidden');
	});

	// Tipos de elementos en option del select de filtros de ORGANISMOS
	elementosOrganismo = {
		add_cant_lic: "cant_lic",
		add_mont_lic: "mont_lic",
		add_mont_prov_lic: "mont_prov_lic",
		add_cant_prov_lic: "cant_prov_lic"
	}

	// Remueve y agrega el tipo de elemento acorde según lo seleccionado en el select de filtros de organismo
	$('#org_adv_fil').on('change', function(){
		$('.follow-up').addClass('hidden');
		var option = $($('#org_adv_fil option:selected')).val();
		$(this).closest('.filter-module').siblings("#"+elementosOrganismo[option]).removeClass('hidden');
	});

	// Tipos de elementos en option del select de filtros de PROVEEDORES
	elementosProveedor = {
		sum_cant_lic: "cant_licitacion",
		sum_mont_lic: "mont_licitacion",
		sum_mont_org_lic: "mont_org_licitacion",
		sum_cant_org_lic: "cant_org_licitacion"
	}

	// Remueve y agrega el tipo de elemento acorde según lo seleccionado en el select de filtros de organismo
	$('#prov_adv_fil').on('change', function(){
		$('.follow-up').addClass('hidden');
		var option = $($('#prov_adv_fil option:selected')).val();
		$(this).closest('.filter-module').siblings("#"+elementosProveedor[option]).removeClass('hidden');
	});




	// Borrar Filtros y Modal Confirmación

	$('.close-thing').on('click', function(){
		$(this).closest('.filter-list-item').remove();
	});

	$('.erase-all').on('click', function(){
		var aBorrar = $(this).siblings('.filter-list-item');

		$('.btn-borrar').click(function(){
			$(aBorrar).remove();
		});

	});




	// $('.btn-filtros').on('click', function(){

	// });

	// Select2

  	$(".standard").select2();

	$(".no-search").select2({
	  minimumResultsForSearch: Infinity
	}); 

	$('[data-toggle="tooltip"]').tooltip();


});



	function magia(el) {

		console.log(data.extra.top_licitaciones[el.id]);

		$('#code_lic').text(data.extra.top_licitaciones[el.id].codigo);
		$('#nombre_lic').text(data.extra.top_licitaciones[el.id].nombre);
		$('#link_lic').attr("href","/file?type=licitacion&code="+data.extra.top_licitaciones[el.id].codigo);

		//$('#monto_lic').text(data.extra.top_licitaciones[el.id].monto_total.formatNumber(0,",","."));
		//$('#monto_lic_pro').text(data.extra.top_licitaciones[el.id].monto_adjudicado.formatNumber(0,",","."));

		/**
		 *
		 * Entra al if si, se accede desde ficha organismo y else ficha proveedor
		 *
		 */

		 if($("#fecha_adjudicacion").length > 0)
		 {
		 	var fecha_adjudicacion_aux = new Date(data.extra.top_licitaciones[el.id].fecha_adjudicacion);
		 	$("#fecha_adjudicacion").text( fecha_adjudicacion_aux.getDate() + "-" + (fecha_adjudicacion_aux.getMonth() + 1) + "-" + fecha_adjudicacion_aux.getFullYear()  );
		 }
		
		if(data.extra.top_licitaciones[el.id].monto != null)
		{

			$('#monto_lic').text(data.extra.top_licitaciones[el.id].monto.formatNumber(0,",","."));
		}
		else
		{
			$('#monto_lic').text(data.extra.top_licitaciones[el.id].monto_total.formatNumber(0,",","."));
			$('#monto_lic_pro').text(data.extra.top_licitaciones[el.id].monto_adjudicado.formatNumber(0,",","."));
		}

	}

	function magia2(el) {

		$('#code_pro').text(data.extra.top_proveedores[el.id].id);
		$('#nombre_pro').text(data.extra.top_proveedores[el.id].nombre);
		$('#rut_pro').text(data.extra.top_proveedores[el.id].rut);
		$('#monto_pro').text(data.extra.top_proveedores[el.id].monto.formatNumber(0,",","."));
		$('#link_pro').attr("href","/file?type=proveedor&code="+data.extra.top_proveedores[el.id].id);

	}

	function magia3(el) {

		var index = parseInt(el.id)+1;

		$('#rank_pro').text(index);
		$('#name_pro').text(pro.top_proveedores[el.id].nombre);
		$('#rut_pro').text("RUT: "+pro.top_proveedores[el.id].rut);
		$('#cash_pro').text(pro.top_proveedores[el.id].monto.formatNumber(0, ",", "."));
		$('#link_pro').attr("href","/file?type=proveedor&code="+pro.top_proveedores[el.id].id);

	}

	function magia4(el) {

		var index = parseInt(el.id)+1;

		$('#rank_lic').text(index);
		$('#name_lic').text(lic.top_licitaciones[el.id].nombre);
		$('#code_lic').text("CÓDIGO: "+lic.top_licitaciones[el.id].codigo);
		$('#cash_lic').text(lic.top_licitaciones[el.id].monto.formatNumber(0, ",", "."));
		$('#link_lic').attr("href","/file?type=licitacion&code="+lic.top_licitaciones[el.id].codigo);

	}

	function magia5(el) {

		var index = parseInt(el.id)+1;

		$('#rank_cat').text(index);
		$('#name_cate').text(cat.top_categorias[el.id].categoria);
		$('#cash_cat').text(cat.top_categorias[el.id].monto.formatNumber(0, ",", "."));

	}

	function getNombreLicitacion(IdEstado)
	{
		var estados = CONST.estadosLicitacion,
			nombreEstado = "Indefinido - " + IdEstado; 

			
		$.each(estados, function(i,obj){
			if(parseInt(obj.idEstado,10) == parseInt(IdEstado,10))
			{
				
				nombreEstado = obj.nombre;
				return false;
			}
		});

		return nombreEstado;
	}

	function getListAllLicProve(prove)
	{
		$(".se-pre-con-2").show();
			$.getJSON( CONST.API + "/proveedor/"+prove+"/licitacion", function(data){
			
			var rows = [];
			//tabla.fnClearTable();
			

			if(data.licitaciones.length > 0)
			{

				if(data.licitaciones.length > 8000)
				{
					for (var i = 0; i < data.licitaciones.length; i++) 
					{
						var row = [];

						row.push(data.licitaciones[i].nombre);
						row.push(data.licitaciones[i].codigo);
						row.push("$" + data.licitaciones[i].monto_adjudicado.formatNumber(0,",", "."));
						//row.push("$" + data.licitaciones[i].monto_total.formatNumber(0,",", "."));
						row.push('<a href="/file?type=licitacion&code='+data.licitaciones[i].codigo+'">Ver ficha <i class="fa fa-arrow-circle-right"></i></a>');

						rows.push(row); 
					};	
					setTimeout(function(){
						
						tabla.fnAddData(rows);
					},1500);
					
				}
				else
				{
					for (var i = 0; i < data.licitaciones.length; i++) 
					{
						var row = [];

						row.push(data.licitaciones[i].nombre);
						row.push(data.licitaciones[i].codigo);
						row.push("$" + data.licitaciones[i].monto_adjudicado.formatNumber(0,",", "."));
						row.push("$" + data.licitaciones[i].monto_total.formatNumber(0,",", "."));
						row.push('<a href="/file?type=licitacion&code='+data.licitaciones[i].codigo+'">Ver ficha <i class="fa fa-arrow-circle-right"></i></a>');

						 rows.push(row); 
					};	

					tabla.fnAddData(rows);
				}
			}

			$(".se-pre-con-2").hide();

		});

	}

	function getListAllLicOrg(org)
	{
		$(".se-pre-con-2").show();
			$.getJSON( CONST.API + "/organismo/"+org+"/licitacion", function(data){
			
			var rows = [];
			//tabla.fnClearTable();
			
			console.log(data.licitaciones.length);
			if(data.licitaciones.length > 0)
			{

				if(data.licitaciones.length > 8000)
				{
					for (var i = 0; i < data.licitaciones.length; i++) 
					{
						var row = [];

						var d = new Date(data.licitaciones[i].fecha_creacion);

						row.push(data.licitaciones[i].nombre);
						row.push(d.getDate() + "-" +  (d.getMonth() + 1) + "-" + d.getFullYear());
						// if ( typeof(data.licitaciones[i].monto_adjudicado) == "undefined"){
						// 	row.push("0");
						// }
						// else {
						// 	row.push("$" + data.licitaciones[i].monto_adjudicado.formatNumber(0,",", "."));
						// }
						row.push(getNombreLicitacion(data.licitaciones[i].estado));
						row.push('<a href="/file?type=licitacion&code='+data.licitaciones[i].codigo+'">Ver ficha <i class="fa fa-arrow-circle-right"></i></a>');
						
						rows.push(row); 
					};	
					setTimeout(function(){
						
						tabla.fnAddData(rows);
					},1500);
					
				}
				else
				{
					for (var i = 0; i < data.licitaciones.length; i++) 
					{
						var row = [];

						var d = new Date(data.licitaciones[i].fecha_creacion);

						row.push(data.licitaciones[i].nombre);
						row.push(d.getDate() + "-" +  (d.getMonth() + 1) + "-" + d.getFullYear());
						// if ( typeof(data.licitaciones[i].monto_adjudicado) == "undefined"){
						// 	row.push("0");
						// }
						// else {
						// 	row.push("$" + data.licitaciones[i].monto_adjudicado.formatNumber(0,",", "."));
						// }
						row.push(getNombreLicitacion(data.licitaciones[i].estado));
						row.push('<a href="/file?type=licitacion&code='+data.licitaciones[i].codigo+'">Ver ficha <i class="fa fa-arrow-circle-right"></i></a>');

						rows.push(row); 
					};	

					tabla.fnAddData(rows);
				}
			}

			$(".se-pre-con-2").hide();

		});

	}

	



	


