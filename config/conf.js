var conf = {};

// conf.ip = '192.168.100.11';
conf.ip = 'dev.comprastransparentes.cl';

//conf.ip = 'hacklab.errdd.com';
//conf.port = 8000;
conf.port = 8000;
conf.host = "http://" + conf.ip + ":" + conf.port;	

module.exports = conf;