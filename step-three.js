var options = process.argv.slice(2);

function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: options[0],
    path: options[1]
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