module.exports = function getHTML (options, callback) {

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
};