var conf = {};


//conf.ip = 'api.comprastransparentes.cl';
//conf.ip = '192.168.100.11';
conf.ip = 'cctt.ngrok.io';
//conf.ip = 'dev.comprastransparentes.cl';

//conf.ip = 'hacklab.errdd.com';
conf.port = 80;
//conf.port = 80;
conf.host = "http://" + conf.ip + ":" + conf.port;	

module.exports = conf;
