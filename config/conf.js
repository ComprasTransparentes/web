var conf = {};


conf.ip = 'api.comprastransparentes.cl';
//conf.ip = '192.168.100.11';
 //conf.ip = 'cctt.ngrok.io';

conf.port = 80;
//conf.port = 8000;
conf.host = "http://" + conf.ip + ":" + conf.port;	

module.exports = conf;
