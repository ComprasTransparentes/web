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

});



router.get('/searchbar',function(req, res){

	var min;
	api.getMins(function(min){
		min = min;

	res.render('application.ejs', { content: 'searchresults',
																element: '',
							  									lic: [],
							  									pro: [],
							  									org: [],
							  									NumeroRegistros : 0,
							  									TipoBusqueda : 0,
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




router.get('/search', function(req, res) {
	//var type = 'licitacion';
	var element = req.query.q,
	 	TipoBusqueda = parseInt(req.query.TipoBusqueda, 10);
	console.log (req.query.q);
	console.log(req.query);
	
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

						api.getMins(function(mins){
							min = mins;

							if(min!=null){
										res.render('application.ejs', { content: 'searchresults',
																element: element,
							  									lic: lic,
							  									pro: pro,
							  									org: org,
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
										var num = Math.floor((Math.random() * 10) + 1);
										if(num==3 || num==7){
												res.render('404.ejs');
											}
											else
										  		res.render('404real.ejs');

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
										var num = Math.floor((Math.random() * 10) + 1);
										if(num==3 || num==7){
												res.render('404.ejs');
											}
											else
										  		res.render('404real.ejs');

									}
						});
					}
				});
				break;

		}

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
	}
});



router.get('/file', function(req, res) {
	var type = req.query.type;
	//var type = 'licitacion';
	var code = req.query.code;
	//var code = '2393-298-L114';
	//var code = '1509-5-L114';
	var json;
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

				var licitaciones = json.extra.licitaciones,
					n_paginas = json.extra.n_licitaciones % 10;


				api.getAllTenderP(json.id, function(retorno)
				{
					console.log(retorno);
					json.extra.licitaciones = retorno;
				});
					
					


			}

			res.render('application.ejs', { content: cont,
	  									data: json,
	  									special: 'false',
	  									NumeroRegistros : 0,
	  									active_nav : "",
	  									superspecial: 'false',
	  									config : config,
	  									code: code,
	  									type: type });
		}
		else
		{
			var num = Math.floor((Math.random() * 10) + 1);
			if(num==3 || num==7){
						res.render('404.ejs');
					}
					else
						res.render('404real.ejs');
	  	}
	});  	
});

router.get('/lucheto', function(req, res) {
	
	res.render('grafo.ejs');

});

router.get('/comparador', function(req, res) {
	var min;
		
	var item = req.query.add_item;
	api.getMins(function(min) {
		min = min;

		res.render('application.ejs', { content: 'comparador',
		 									special: 'true',
		 									superspecial: 'true',
		 									active_nav : "/comparador",
		 									config : config,
		 									min: min,
		 									data1: 'null',
				 							data2: 'null'});
		/**
		 *
		 * if(m1!=undefined&&m2!=undefined&&item!=undefined){

			api.getMinStats(m1,item,function(json1){
				json1 = json1;
				
				api.getMinStats(m2,item,function(json2){
					json2 = json2;
					
					res.render('application.ejs', { content: 'comparador',
				 									special: 'true',
				 									active_nav : "/comparador",
				 									superspecial: 'true',
				 									config : config,
				 									min: min,
				 									data1: json1,
				 									data2: json2});

				});
			});


		}else{
		

			
		}
		 *
		 */
		
		
	});	
});

router.post('/comparar_mins', function(req,res){

	console.log(req.body);

	res.send("HolaHola");
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

