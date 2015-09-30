var express = require('express')
			, path = require('path')
			, http = require('http');
/* Api calls */
var api  = require('../models/api'); 

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	var json;
	var lic;
	var pro;
	var cat;
		api.getStats(function(json){
			json = json;
			console.log(json);
			if(json!=null){

				api.getTopLic(function(lic){
					lic = lic;
					console.log(lic);
					if(lic!=null){

						api.getTopPro(function(pro){
							pro = pro;
							console.log(pro);
							if(pro!=null){

								api.getTopCat(function(cat){
									cat = cat;
									console.log(cat);
									if(cat!=null){

										res.render('application.ejs', { content: 'index',
									  									data: json,
							  											special: 'true',
							  											superspecial: 'false',
							  											lic: lic,
							  											pro: pro,
							  											cat: cat });

										

										
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



router.get('/search', function(req, res) {
	//var type = 'licitacion';
	var element = req.query.q;

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
		var json;
		api.getApiGeneral(element,function(json){
			json = json;
			console.log(json);
			if(json!=null)
				res.render('application.ejs', { content: 'searchresults',
												element: element,
			  									data: json,
	  											special: 'false',
	  											superspecial: 'false' });
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
	api.getApiCode(type,code,function(json){
		json = json;
		if(json!=null)
			res.render('application.ejs', { content: cont,
	  									data: json,
	  									special: 'false',
	  									superspecial: 'false' });
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

router.get('/lucheto', function(req, res) {
	
	res.render('grafo.ejs');

});

router.get('/comparador', function(req, res) {
 	res.render('application.ejs', { content: 'comparador',
 									special: 'true',
 									superspecial: 'true'});	
});

router.get('/api', function(req, res) {
 	res.render('application.ejs', { content: 'api',
 									special: 'false',
 									superspecial: 'false'});	
});

router.get('/aboutus', function(req, res) {
 	res.render('application.ejs', { content: 'aboutus',
 									special: 'false',
 									superspecial: 'false'});	
});

router.get('/lucheto2', function(req, res) {
 	res.render('application.ejs', { content: 'fichaorganismo',
  									special: 'false',
  									superspecial: 'false'});
});

router.get('/embed1', function(req, res) {
 	res.render('embed1.ejs');
});


router.get('*', function(req, res){
	var num = Math.floor((Math.random() * 10) + 1);
	console.log(num)
	if(num==3 || num==7){
		res.render('404.ejs');
	}
	else
		res.render('404real.ejs');
});




module.exports = router;

