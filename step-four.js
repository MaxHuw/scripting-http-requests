
//var options = process.argv.slice(2);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML(options, callback) {

var https = require('https');
var data = '';

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function(chunk){
      data += chunk.toString();
      //console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    });

    response.on('end', function(){
      callback(data);
      console.log('Response stream complete.');
    });
  });
}

function printHTML(html){
  console.log(html);
}

getHTML(requestOptions, printHTML);