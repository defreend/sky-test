var express = require('express');

var app = express();

/* serves all the static files */
var oneDay = 86400000;
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/src', { maxAge: oneDay }));
app.use(express.errorHandler());
app.disable('view cache');

app.use(app.router);

app.get(/^(.+)$/, function(req, res){ 
  console.log('static file request : ' + req.params);
  res.setHeader('Cache-Control', 'no-cache');
  res.sendfile( __dirname + req.params[0]); 
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});