

var request = require('request');
var conf = require('../config/conf');

var ip = conf.ip;//'192.168.100.10';//'127.0.0.1';
var port = conf.port;
var host = conf.host;
var URI = require("uri-js");
var fs = require('fs');

module.exports.getItemLic = function(code,callback){

	request(host+'/licitacion/'+code+'/item?pagina=1', function (error, response, body){
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
				json = JSON.parse(body);		
			}
			else
				json = null;
			
			callback(json);

	});

}

module.exports.getCatSearch = function(code,callback){
	request(host+'/licitacion?producto='+code,function (error,response,body){
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
				json = JSON.parse(body);		
			}
			else
				json = null;
			
			callback(json);
	});
};


module.exports.getApiCode = function (type, code, pag, callback){

	if(type=="licitacion"){
		request(host+'/'+type+'/'+code+'/?p_items='+pag, function (error, response, body) {
			if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
				json = JSON.parse(body);		
			}
			else
				json = null;
			
			callback(json);
		});
	}else{
		console.log(host+'/'+type+'/'+code+ '/embed');
		request(host+'/'+type+'/'+code + '/embed', function (error, response, body) {
		
			if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
				json = JSON.parse(body);		
			}
			else
				json = null;

			
			callback(json);
		});
	}
};

module.exports.getStats = function (callback){

	request(host+'/stats/0', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getTopLic = function (callback){
	console.log("perro muerto");

	request(host+'/stats/top/licitaciones', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getTopPro = function (callback){

	request(host+'/stats/top/proveedores', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getTopCat = function (callback){

	request(host+'/stats/top/categorias', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiStats = function (callback){

	console.log(host+'/stats');
	request(host+'/stats', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		
		callback(json);
	});
};

module.exports.getApiFull = function (type, name, callback){

	request(host+'/'+type+'?nombre='+name, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiGeneral = function (name, callback){

	request(host+'/buscar?q='+name, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiLic = function (name, pag, callback){

	var encodeQueryString = URI.serialize(URI.parse(host+'/licitacion/?q='+name+'&pagina='+pag));
	
	request(encodeQueryString, function (error, response, body) {
		//console.log(response);
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else{
			json = null;
		}
		
		callback(json);
	});
};

module.exports.getApiOrg = function (name, pag, callback){

	var encode = URI.serialize(URI.parse(host+'/organismo/?q='+name+'&pagina='+pag));
	request(encode, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiPro = function (name, pag, callback){

	var encode = URI.serialize(URI.parse(host+'/proveedor/?q='+name+'&pagina='+pag));
	request(encode, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};


module.exports.getApiSimple= function (type, element , callback){

	request(host+'/'+type+'?q='+element, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getMins= function (callback){

	fs.readFile('assets/comparador.json', 'utf8', function (err, data) {
		
		if (err) throw err;
  		var obj = JSON.parse(data);
  		callback(obj);
	});
};

module.exports.getCategorias = function(callback){
	fs.readFile('assets/categorias.json', 'utf8', function (err, data) {
		
		if (err) throw err;
  		var obj = JSON.parse(data);
  		callback(obj);
	});
};

module.exports.getMinStats= function (min, cat , callback){

	request(host+'/ministerio/'+min+'/categoria/'+cat+'/stats', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiFilter= function (type, q ,pagina, producto, estado,tipo_fecha, fecha_creacioni, fecha_creacione,montoi,montoe,callback){

	request(host+'/'+type+'?q='+q+'&producto='+producto+'&estado='+estado+'&'+tipo_fecha+'='+fecha_creacioni+'|'+fecha_creacione+'&monto='+montoi+'|'+montoe+'&pagina='+pagina, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getAllTenderP = function (proveedor, callback)
{

	var licitaciones = [];

	request(host+"/proveedor/"+proveedor+"/licitacion", function (error, response, body){
				
				var json;
				var aux = [];


				if (!error && (response.statusCode == 200 || response.statusCode == 201)) 
				{
					json = JSON.parse(body);	
					licitaciones = licitaciones.concat( json.licitaciones);	
				}

			callback(licitaciones);				
	});
	
};

module.exports.getItemCategoria = function(callback)
{
	var categorias = [];

	request(host + "/organismo/10/categoria", function(error, response, body)
		{
			var json;
				var aux = [];


				if (!error && (response.statusCode == 200 || response.statusCode == 201)) 
				{
					json = JSON.parse(body);	
					categorias = categorias.concat( json.organismos);	
				}

			callback(categorias);	
		});
};

module.exports.getLicTopOrg = function(id_org,callback)
{
	var lic = {};

	request(host + "/licitacion/?organismo="+id_org+"&pagina=1&orden=-monto", function(error, response, body){
			var json;
			var aux = [];


			if (!error && (response.statusCode == 200 || response.statusCode == 201)) 
			{
				json = JSON.parse(body);	
				lic = json.licitaciones;	
			}

			callback(lic);
	});
};

module.exports.getProTopOrg = function(id_org, callback){
	var prov = {};

	request(host + "/proveedor/?monto_adjudicado=0|&organismo_adjudicador="+id_org+"&orden=-monto_adjudicado&pagina=1", function(error, response, body){

		var json; 

		if (!error && (response.statusCode == 200 || response.statusCode == 201)) 
			{
				json = JSON.parse(body);	
				prov = json.proveedores;	
			}

		callback(prov);
	});
};