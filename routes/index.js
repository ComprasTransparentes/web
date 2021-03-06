var express = require('express')
			, path = require('path')
			, http = require('http');
/* Api calls */
var api  = require('../models/api'); 
var config =require('../config/conf')
//var bodyParser = require('body-parser');

var router = express.Router();

//router.use(ro);
/* GET home page. */
router.get('/', function(req, res) {

	var json;
	var lic;
	var pro;
	var cat;
	
		api.getStats(function(json){
			json = json;
			
			if(json!=null){



				api.getTopLic(function(lic){
					lic = lic;
				
					if(lic!=null){

						api.getTopPro(function(pro){
							pro = pro;
							
							if(pro!=null){

								api.getTopCat(function(cat){
									cat = cat;
								
									if(cat!=null){


										res.render('application.ejs', { content: 'index',
									  									data: json,
									  									active_nav : "/",
							  											special: 'true',
							  											superspecial: 'false',
							  											config : config,
							  											lic: lic,
							  											pro: pro,
							  											cat: cat,
							  											 });								

										
									}
								
									else{
										res.render('404.ejs');
										  }
								});

								

								
							}
						
							else{
								res.render('404.ejs');
								  }
						});

						
					}
				
					else{
						res.render('404.ejs');
						  }
				});


			}
	
			else{
				res.render('404.ejs');
				  }
		});

});



router.get('/searchbar',function(req, res){

	var min,
		categorias;



	api.getAllProduct(function(categorias){
		categorias = categorias;
		

		api.getMins(function(min){
		min = min;


	res.render('application.ejs', { content: 'searchresults',
																element: '',
							  									lic: [],
							  									pro: [],
							  									org: [],
							  									NumeroRegistros : 0,
							  									categoria_aux : null,
							  									TipoBusqueda : 1,
							  									categorias : categorias,
					  											special: 'true',
					  											superspecial: 'true',
					  											active_nav : "/searchbar",
					  											elGatito: true,
					  											min: min,
					  											producto: '',
					  											config : config,
					  											estado: '',
					  											tipo: '',
					  											fecha_creacioni: '',
					  											fecha_creacione: '',
					  											montoi: '',
					  											montoe: '',
					  											na: 'search' });
});
	});
	


});										




router.get('/search', function(req, res) {
	//var type = 'licitacion';
	var element = req.query.q,
	TipoBusqueda = parseInt(req.query.TipoBusqueda, 10),
	categoria_aux = (req.query.categoria != null ? req.query.categoria : 0 )	; //Categoría desde ranking para búsqueda
	console.log(req.query);


	var cat = req.query.cat;
	if(cat!= undefined){
		api.getCatSearch(element,function(json){
			json= json;
			api.getCategorias(function(categorias){
				categorias = categorias.categorias;
				api.getMins(function(mins){
								min = mins;
			res.render('application.ejs', { content: 'searchresults',
																	element: element,
								  									lic: json,
								  									pro: 'null',
								  									org: 'null',
								  									categorias : categorias,
								  									NumeroRegistros : json.n_licitaciones,
								  									TipoBusqueda : TipoBusqueda,
								  									active_nav : "/searchbar",
						  											special: 'true',
						  											superspecial: 'true',
						  											elGatito: false,
						  											min: min,
						  											producto: '',
						  											estado: '',
						  											config : config,
						  											tipo: '',
						  											fecha_creacioni: '',
						  											fecha_creacione: '',
						  											montoi: '',
						  											montoe: '',
						  											na: 'search' });
		});
		});

		});


	}else{
	
		var token = false;
		if (element == undefined) {
			token = true;
		}

		if(element == "wissepi"){
			var num = Math.floor((Math.random() * 10) + 1);
			var secret;
			if(num==10 || num==1 || num==2 || num==3 || num==4){
				secret = "1172739485.webm";
			}
			if(num==5 || num==6 || num==7){
				secret = "8846251730.webm";			
			}
			if(num==8 || num==9 ){
				secret = "22568195112.webm";		
			}
			res.render('wissepi.ejs',{secreto : secret,
										
	  									special: 'false' });

		}
		else{
			//var element = 'agujeros';
			var lic = null;
			var pro = null;
			var org = null;
			var min = null;
			var categorias = null;

			

			api.getAllProduct(function(categorias){
				categorias = categorias;

				/*
				TipoBusqueda => 1 => Licitacion
				TipoBusqueda => 2 => Organismos
				TipoBusqueda => 3 => Provedores
				*/
				switch(TipoBusqueda)
				{
				case 1: 
					api.getApiLic(element, 1, function(lic){
						lic = lic;

						if(lic != null)
						{

							res.render('application.ejs', { content: 'searchresults',
																	element: element,
								  									lic: lic,
								  									pro: pro,
								  									org: org,
								  									categoria_aux : categoria_aux,
								  									categorias : categorias,
								  									NumeroRegistros : lic.n_licitaciones,
								  									TipoBusqueda : TipoBusqueda,
								  									active_nav : "/searchbar",
						  											special: 'true',
						  											superspecial: 'true',
						  											elGatito: token,
						  											min: min,
						  											producto: '',
						  											estado: '',
						  											config : config,
						  											tipo: '',
						  											fecha_creacioni: '',
						  											fecha_creacione: '',
						  											montoi: '',
						  											montoe: '',
						  											na: 'search' });
						}
						else
						{
							res.render('404.ejs');
						}
					});
					break;
					case 2:
					api.getApiOrg(element, 1, function(org){
						org = org;

						if(org != null)
						{

							api.getMins(function(mins){
								min = mins;

								if(min!=null){
											res.render('application.ejs', { content: 'searchresults',
																	element: element,
								  									lic: lic,
								  									pro: pro,
								  									org: org,
								  									categorias : categorias,
								  									categoria_aux : null,
								  									TipoBusqueda : TipoBusqueda,
								  									NumeroRegistros : org.n_organismos,
								  									active_nav : "/searchbar",
						  											special: 'true',
						  											superspecial: 'true',
						  											elGatito: token,
						  											min: min,
						  											producto: '',
						  											estado: '',
						  											config : config,
						  											tipo: '',
						  											fecha_creacioni: '',
						  											fecha_creacione: '',
						  											montoi: '',
						  											montoe: '',
						  											na: 'search' });

										}else{
											res.render('404.ejs');

										}
							});
						}
					});
					break;
					case 3:
					api.getApiPro(element, 1, function(pro){
						pro = pro;

						if(pro != null)
						{

							api.getMins(function(mins){
								min = mins;

								if(min!=null){
											res.render('application.ejs', { content: 'searchresults',
																	element: element,
								  									lic: lic,
								  									pro: pro,
								  									org: org,
								  									TipoBusqueda : TipoBusqueda,
								  									categorias : categorias,
								  									categoria_aux : null,
								  									NumeroRegistros : pro.n_proveedores,
								  									active_nav : "/searchbar",
						  											special: 'true',
						  											superspecial: 'true',
						  											elGatito: token,
						  											min: min,
						  											producto: '',
						  											estado: '',
						  											config : config,
						  											tipo: '',
						  											fecha_creacioni: '',
						  											fecha_creacione: '',
						  											montoi: '',
						  											montoe: '',
						  											na: 'search' });

										}else{
											res.render('404.ejs');

										}
							});
						}
					});
					break;

			}
			});

			

			/**
			 *
			 api.getApiLic(element,1,function(lic){
				lic = lic;
			
				if(lic!=null){

					api.getApiPro(element,1,function(pro){
						pro = pro;
		
						if(pro!=null){

							api.getApiOrg(element,1,function(org){
								org = org;
			
								if(org!=null){

									api.getMins(function(min){
										min = min;
										if(min!=null){
											res.render('application.ejs', { content: 'searchresults',
																	element: element,
								  									lic: lic,
								  									pro: pro,
								  									org: org,
						  											special: 'true',
						  											superspecial: 'true',
						  											elGatito: token,
						  											min: min,
						  											producto: '',
						  											estado: '',
						  											config : config,
						  											tipo: '',
						  											fecha_creacioni: '',
						  											fecha_creacione: '',
						  											montoi: '',
						  											montoe: '',
						  											na: 'search' });

										}else{
											var num = Math.floor((Math.random() * 10) + 1);
											if(num==3 || num==7){
													res.render('404.ejs');
												}
												else
											  		res.render('404real.ejs');

										}

									});

									
								}
									
								else{
									var num = Math.floor((Math.random() * 10) + 1);
									if(num==3 || num==7){
											res.render('404.ejs');
										}
										else
									  		res.render('404real.ejs');
									  }
							});


						}
							
						else{
							var num = Math.floor((Math.random() * 10) + 1);
							if(num==3 || num==7){
									res.render('404.ejs');
								}
								else
							  		res.render('404real.ejs');
							  }
					});


				}
					
				else{
					var num = Math.floor((Math.random() * 10) + 1);
					if(num==3 || num==7){
							res.render('404.ejs');
						}
						else
					  		res.render('404real.ejs');
					  }
			});
			 *
			 */
		
		}
		
	}
});

router.get('/filter', function(req, res) {
	//var type = 'licitacion';
	var element = req.query.q;
	var producto = req.query.plic;
	var estado = req.query.elic;
	var tipo = req.query.tlic;
	var fecha_creacioni = req.query.filic;
	var fecha_creacione = req.query.felic;
	var montoi = req.query.alic;
	var montoe = req.query.xlic;
	var token = false;
	if (element == undefined) {
		token = true;
	}

	if(element == "wissepi"){
		var num = Math.floor((Math.random() * 10) + 1);
		var secret;
		if(num==10 || num==1 || num==2 || num==3 || num==4){
			secret = "1172739485.webm";
		}
		if(num==5 || num==6 || num==7){
			secret = "8846251730.webm";			
		}
		if(num==8 || num==9 ){
			secret = "22568195112.webm";		
		}
		res.render('wissepi.ejs',{secreto : secret,
									
  									special: 'false' });

	}
	else{
		//var element = 'agujeros';
		var lic;
		var pro;
		var org;
		var min;
		//api.getApiLic(element,1,function(lic){
		api.getApiFilter("licitacion",element,1,producto,estado,tipo,fecha_creacioni,fecha_creacione,montoi, montoe,function(lic){
			lic = lic;
	
			if(lic!=null){

				api.getApiPro(element,1,function(pro){
					pro = pro;
					
					if(pro!=null){

						api.getApiOrg(element,1,function(org){
							org = org;
							
							if(org!=null){

								api.getMins(function(min){
									min = min;
									if(min!=null){
										res.render('application.ejs', { content: 'searchresults',
																element: element,
							  									lic: lic,
							  									pro: pro,
							  									org: org,
					  											special: 'true',
					  											superspecial: 'true',
					  											elGatito: token,
					  											config : config,
					  											min: min,
					  											producto: producto,
					  											estado: estado,
					  											tipo: tipo,
					  											fecha_creacioni: fecha_creacioni,
					  											fecha_creacione: fecha_creacione,
					  											montoi: montoi,
					  											montoe: montoe,
					  											na: 'filter'
					  											 });

									}else{
										res.render('404.ejs');

									}

								});

								
							}
								
							else{
								res.render('404.ejs');
								  }
						});


					}
						
					else{
						res.render('404.ejs');
						  }
				});


			}
				
			else{
				res.render('404.ejs');
				  }
		});
	}
});




router.get('/file', function(req, res) {
	var type = req.query.type;
	//var type = 'licitacion';
	var code = req.query.code;
	//var code = '2393-298-L114';
	//var code = '1509-5-L114';
	var json;
	var json2;
	var cont;
	if(type=='licitacion'){
		cont = 'filesviewer';
	}
	else if(type=='organismo'){
		cont = 'fichaorganismo';
	}
	else if(type=='proveedor'){
		cont = 'fichaproveedor';
	}


	api.getApiCode(type,code,1,function(json){
		json = json;


		if(json!=null)
		{

			if(type=="proveedor")
			{

				//var licitaciones = json.extra.licitaciones,
				//	n_paginas = json.extra.n_licitaciones % 10;

				json.extra = {};

				api.getAllTenderP(json.id, function(retorno)
				{
					
			
					json.extra.top_licitaciones = retorno;

					json2 = null;
				res.render('application.ejs', { content: cont,
	  									data: json,
	  									special: 'false',
	  									NumeroRegistros : 0,
	  									active_nav : "",
	  									superspecial: 'false',
	  									config : config,
	  									code: code,
	  									type: type,
	  									item: json2 });
				});

				
	

			}
			else if(type=="licitacion"){
				api.getItemLic(code, function(json2){
					json2 = json2;
					
					res.render('application.ejs', { content: cont,
	  									data: json,
	  									special: 'false',
	  									NumeroRegistros : 0,
	  									active_nav : "",
	  									superspecial: 'false',
	  									config : config,
	  									code: code,
	  									type: type,
	  									item: json2 });

				});

			}else if(type=="organismo"){
				json2=null;
				var top_lic = [];

				api.getLicTopOrg(code, function(lics){
					top_lic = lics;

					json.extra = {};
					json.extra.top_licitaciones = [];
					json.extra.top_proveedores = [];
					json.extra.top_licitaciones = top_lic;

					api.getProTopOrg(code,function(provs){

						json.extra.top_proveedores = provs;

						res.render('application.ejs', { content: cont,
		  									data: json,
		  									special: 'false',
		  									NumeroRegistros : 0,
		  									active_nav : "",
		  									superspecial: 'false',
		  									config : config,
		  									code: code,
		  									type: type,
		  									item: json2 });

					});

					
				});
				
			}
		}
		else
		{
			res.render('404.ejs');
	  	}
	});  	
});

router.get('/lucheto', function(req, res) {
	
	res.render('grafo.ejs');

});

router.get('/comparador', function(req, res) {
	var min;
		
	var item = req.query.add_item;
	var categorias;
	api.getItemCategoria(function(cat){

		categorias = cat;

		api.getMins(function(min) {
		min = min;

		
		res.render('application.ejs', { 	content: 'comparador',
											categorias : categorias, 
		 									special: 'true',
		 									superspecial: 'true',
		 									active_nav : "/comparador",
		 									config : config,
		 									min: min,
		 									data1: 'null',
				 							data2: 'null'});
		
		
		
	});	

	});
	
});

router.get('/comparar_mins', function(req,res){

	

	var min1 = req.query.min1,
		min2 = req.query.min2,
		item = req.query.item;

	var info_min1,
		info_min2;

	api.getMinStats(min1,item,function(info_min1){
		info_min1 = info_min1;
		

		api.getMinStats(min2,item, function(info_min2){
			info_min2 = info_min2;
			
			res.send({"respuesta" : "1", "min1" : info_min1, "min2" : info_min2});
		});
	});
});

router.get('/api', function(req, res) {
 	res.render('application.ejs', { content: 'api',
 									special: 'false',
 									active_nav : "/api",
 									config : config,
 									superspecial: 'false'});	
});

router.get('/aboutus', function(req, res) {
 	res.render('application.ejs', { content: 'aboutus',
 									special: 'false',
 									active_nav : "/aboutus",
 									config : config,
 									superspecial: 'false'});	
});

router.get('/faq', function(req, res) {
 	res.render('application.ejs', { content: 'faq',
 									special: 'false',
 									active_nav : "/faq",
 									config : config,
 									superspecial: 'false'});	
});

router.get('/lucheto2', function(req, res) {
 	res.render('application.ejs', { content: 'fichaorganismo',
  									special: 'false',
  									config : config,
  									superspecial: 'false'});
});

router.get('/embed1', function(req, res) {
 	res.render('embed1.ejs');
});


router.get('*', function(req, res){
	res.render('404.ejs');
});




module.exports = router;

