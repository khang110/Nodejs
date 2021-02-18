var express= require('express');
var app = express();
const port = 3000;

app.get('/', function(request, response) {
    response.send('<h1>Hello nguyen anhg khang</h1>');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
})