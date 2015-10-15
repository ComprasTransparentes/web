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

$(document).ready(function() {

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

	$('.numformat').each( function() {

		if(parseInt($(this).text()) > 10000000) {
			console.log("gatito");
		}

		$(this).text($(this).text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));

	});



    var clip = new ZeroClipboard($("#copy_button"), {
        moviePath: "assets/javascripts/ZeroClipboard.swf"
    });









  
  	// Select2

  	$(".standard").select2();

	$(".no-search").select2({
	  minimumResultsForSearch: Infinity
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

	if(dat1== "null"){

		$('#submit_compare').attr('disabled', true);
		


		var check1 = false;
		var check2 = false;
		var check3 = false;



		$('#add_min1').on('change', function(){

			check1 = true;
			if ( check1 && check2 && check3){
				$('#submit_compare').attr('disabled', false);					
			}

			else {
				$('#submit_compare').attr('disabled', true);	
			}
		});

		$('#add_item').on('change', function(){
			check2 = true;
			if ( check1 && check2 && check3){
				$('#submit_compare').attr('disabled', false);					
			}

			else {
				$('#submit_compare').attr('disabled', true);	
			}
		});

		$('#add_min2').on('change', function(){
			check3 = true;
			if ( check1 && check2 && check3){
				$('#submit_compare').attr('disabled', false);					
			}

			else {
				$('#submit_compare').attr('disabled', true);	
			}
		});
	}


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



});



	function magia(el) {

		$('#code_lic').text(data.extra.top_licitaciones[el.id].codigo);
		$('#nombre_lic').text(data.extra.top_licitaciones[el.id].nombre);
		$('#monto_lic').text(data.extra.top_licitaciones[el.id].monto_total);
		$('#monto_lic_pro').text(data.extra.top_licitaciones[el.id].monto_adjudicado);
		$('#link_lic').attr("href","/file?type=licitacion&code="+data.extra.top_licitaciones[el.id].codigo);


	}

	function magia2(el) {

		$('#code_pro').text(data.extra.top_proveedores[el.id].id);
		$('#nombre_pro').text(data.extra.top_proveedores[el.id].nombre);
		$('#rut_pro').text(data.extra.top_proveedores[el.id].rut);
		$('#monto_pro').text(data.extra.top_proveedores[el.id].monto);
		$('#link_pro').attr("href","/file?type=proveedor&code="+data.extra.top_proveedores[el.id].id);

	}

	function magia3(el) {

		var index = parseInt(el.id)+1;

		$('#rank_pro').text(index);
		$('#name_pro').text(pro.top_proveedores[el.id].nombre);
		$('#rut_pro').text("RUT: "+pro.top_proveedores[el.id].rut);
		$('#cash_pro').text(pro.top_proveedores[el.id].monto);
		$('#link_pro').attr("href","/file?type=proveedor&code="+pro.top_proveedores[el.id].id);

	}

	function magia4(el) {

		var index = parseInt(el.id)+1;

		$('#rank_lic').text(index);
		$('#name_lic').text(lic.top_licitaciones[el.id].nombre);
		$('#code_lic').text("CÓDIGO: "+lic.top_licitaciones[el.id].codigo);
		$('#cash_lic').text(lic.top_licitaciones[el.id].monto);
		$('#link_lic').attr("href","/file?type=licitacion&code="+lic.top_licitaciones[el.id].codigo);

	}

	function magia5(el) {

		var index = parseInt(el.id)+1;

		$('#rank_cat').text(index);
		$('#name_cate').text(cat.top_categorias[el.id].categoria);
		$('#cash_cat').text(cat.top_categorias[el.id].monto);

	}






