
var request = require('request');
var ip = '192.168.1.86';//'127.0.0.1';
var port = '8000';
var host = ip+':'+port;


module.exports.getApiCode = function (type, code, pag, callback){

	if(type=="licitacion"){
		request("http://"+host+'/'+type+'/'+code+'/?p_items='+pag, function (error, response, body) {
			if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
				json = JSON.parse(body);		
			}
			else
				json = null;
			console.log(json);
			callback(json);
		});
	}else{

		request("http://"+host+'/'+type+'/'+code, function (error, response, body) {
			if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
				json = JSON.parse(body);		
			}
			else
				json = null;
			console.log(json);
			callback(json);
		});
	}
};

module.exports.getStats = function (callback){

	request("http://"+host+'/stats/0', function (error, response, body) {
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

	request("http://"+host+'/stats/top/licitaciones', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getTopPro = function (callback){

	request("http://"+host+'/stats/top/proveedores', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getTopCat = function (callback){

	request("http://"+host+'/stats/top/categorias', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiStats = function (callback){

	request("http://"+host+'/stats', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		console.log(json);
		callback(json);
	});
};

module.exports.getApiFull = function (type, name, callback){

	request("http://"+host+'/'+type+'?nombre='+name, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiGeneral = function (name, callback){

	request("http://"+host+'/buscar?q='+name, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiLic = function (name, pag, callback){

	request("http://"+host+'/licitacion/?q='+name+'&pagina='+pag, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiOrg = function (name, pag, callback){

	request("http://"+host+'/organismo/?q='+name+'&pagina='+pag, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};

module.exports.getApiPro = function (name, pag, callback){

	request("http://"+host+'/proveedor/?q='+name+'&pagina='+pag, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};


module.exports.getApiSimple= function (type, element , callback){

	request("http://"+host+'/'+type+'?q='+element, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		callback(json);
	});
};
