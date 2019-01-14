
function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var data = '';

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function(chunk){
      data += chunk.toString();
      //console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    });

    response.on('end', function(){
      console.log(data);
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTML();