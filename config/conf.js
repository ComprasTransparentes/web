var conf = {};


conf.ip = 'api.comprastransparentes.cl';
// conf.ip = '127.0.0.1';

conf.port = 80;
// conf.port = 8000;
conf.host = "http://" + conf.ip + ":" + conf.port;	

module.exports = conf;
