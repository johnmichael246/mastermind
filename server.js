var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')))

// put api routes here before the CATCH ALL route

// the following catch all routes is necessary for  SPAs client--sinde routing to properly work
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

var port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app is running on port ${port}`)
})