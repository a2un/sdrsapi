
var https = require('https');

var url = 'www.ssga.com'

var options = {
    host: url,
    // port: 80,
    path: '/bin/v1/ssmp/fund/fundfinder?country=us&language=en&role=individual&product=etfs&ui=fund-finder',
    method: 'GET'
  };



var makecall = () => {
    https.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk["us"]);
        });
        }).end();
    
 };
  
makecall();

setInterval(
    makecall, 86400
);
  


