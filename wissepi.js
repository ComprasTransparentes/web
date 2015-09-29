var express = require('express')
  , http = require('http')
  , compileSass = require('express-compile-sass')
  , path = require('path')
  ;

var port = 3000;


var EMBEDLY_KEY = '903a31e23f214be3913813a180d407ad';

var embedly = require('embedly'),
    util = require('util');

new embedly({key: EMBEDLY_KEY}, function(err, api) {
  if (!!err) {
    console.error('Error creating Embedly api');
    console.error(err.stack, api);
    return;
  }
});

/* Routes */

var routes = require('./routes/index'); 

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(compileSass({
    root: 'assets/',
    sourceMap: true, // Includes Base64 encoded source maps in output css 
    sourceComments: false, // Includes source comments in output css 
    watchFiles: true, // Watches sass files and updates mtime on main files for each change 
    logToConsole: false // If true, will log to console.error on errors 
}));




app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', routes);

app.listen(port, function(){
	console.log("Tu no eres un perro salchicha");
});