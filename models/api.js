
var request = require('request');
var ip = 'hacklab.errdd.com';
var port = '8000';
var host = ip+':'+port;


module.exports.getApiCode = function (type, code, callback){

	request("http://"+host+'/'+type+'/'+code, function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		console.log(json);
		callback(json);
	});
};

module.exports.getStats = function (callback){

	request("http://"+host+'/stats/0', function (error, response, body) {
		if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
			json = JSON.parse(body);		
		}
		else
			json = null;
		console.log(json);
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
