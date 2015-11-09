var conf = {};

conf.ip = '192.168.100.10';
//conf.ip = 'comprastransparentes.cl';
//conf.ip = 'hacklab.errdd.com';
conf.port = 8000;
//conf.port = 8002;
conf.host = "http://" + conf.ip + ":" + conf.port;	

module.exports = conf;